import express from 'express'
import nodemailer from 'nodemailer'
import validator from 'validator'
import xssFilters from 'xss-filters'

const RECEIVER_ADDRESS = 'bartlomiejwojcik92@gmail.com'

const app = express()

app.use(express.json())

app.post('/', (req, res) => {
  const attributes = ['email', 'subject', 'msg'] // Our three form fields

  // Map each attribute name to the validated and sanitized equivalent (false if validation failed)
  const sanitizedAttributes = attributes.map((n) =>
    validateAndSanitize(n, req.body[n])
  )

  // True if some of the attributes new values are false -> validation failed
  const someInvalid = sanitizedAttributes.some((r) => !r)

  if (someInvalid) {
    // Throw a 422 with a neat error message if validation failed
    return res.status(422).json({ success: false })
  }

  sendMail(...sanitizedAttributes)
  res.status(200).json({ success: true })
})

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

const sendMail = (email, subject, msg) => {
  const transporter = nodemailer.createTransport({
    sendmail: true,
    newline: 'unix',
    path: '/usr/sbin/sendmail'
  })
  transporter.sendMail({
    from: email,
    to: RECEIVER_ADDRESS,
    subject: `[personal-webpage]: ${subject}`,
    text: msg
  })
}

export default app
