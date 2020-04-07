const functions = require('firebase-functions')
const nodemailer = require('nodemailer')
const validator = require('validator')
const xssFilters = require('xss-filters')

const config = {
  to: functions.config().contact.to,
  gmailUser: functions.config().contact['gmail-user'],
  gmailPassword: functions.config().contact['gmail-password']
}

// eslint-disable-next-line consistent-return
module.exports = async function handler(req, res) {
  try {
    const attributes = ['subject', 'email', 'msg'] // Our three form fields, all required

    // Map each attribute name to the validated and sanitized equivalent (false if validation failed)
    const sanitizedAttributes = attributes.map((n) =>
      validateAndSanitize(n, req.body[n])
    )

    // True if some of the attributes new values are false -> validation failed
    const someInvalid = sanitizedAttributes.some((r) => !r)

    if (someInvalid) {
      // Throw a 422 with a neat error message if validation failed
      return res
        .status(422)
        .json({ success: false, error: 'The request cannot be processed' })
    }

    await sendMail(...sanitizedAttributes)
    res.status(200).json({ success: true })
  } catch (error) {
    res.status(500).json({ error })
  }
}

const rejectFunctions = new Map([
  ['email', (v) => !validator.isEmail(v)],
  ['subject', (v) => !v.length],
  ['msg', (v) => !v.length]
])

const validateAndSanitize = (key, value) => {
  // If map has key and function returns false, return sanitized input. Else, return false
  return (
    rejectFunctions.has(key) &&
    !rejectFunctions.get(key)(value) &&
    xssFilters.inHTMLData(value)
  )
}

async function sendMail(subject, from, text) {
  try {
    // eslint-disable-next-line no-console
    console.log(JSON.stringify(functions.config()))

    // create reusable transporter object using the default SMTP transport
    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: config.gmailUser,
        pass: config.gmailPassword
      }
    })

    // send mail with defined transport object
    const info = await transporter.sendMail({
      from,
      to: config.to,
      subject: `[personal-webpage][from: ${from}]: ${subject}`,
      text
    })

    // eslint-disable-next-line no-console
    console.info('Message sent: %s', info.messageId)
  } catch (error) {
    // eslint-disable-next-line no-console
    console.error(error)
    throw error
  }
}
