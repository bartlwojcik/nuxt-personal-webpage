<template>
  <component :is="$mq == 'sm' ? 'SideDrawer' : 'Modal'" name="cv-modal">
    <div class="cv-modal">
      <div class="hidden cv-modal__image sm:block">
        <img src="/illustrations/undraw_updated_resume_u4fy.svg" />
      </div>
      <div class="p-4 cv-modal__actions sm:p-8">
        <p class="mb-4">{{ $t('cv.message') }}</p>
        <AppButton @click="openPdf()" class="w-full mb-2 sm:w-auto">
          <font-awesome-icon :icon="['far', 'file-pdf']" class="mr-2" />
          <span>{{ $t('cv.original') }}</span>
        </AppButton>
        <AppButton @click="openPdf('print')" class="w-full sm:w-auto">
          <font-awesome-icon :icon="['far', 'file-pdf']" class="mr-2" />
          <span>{{ $t('cv.print') }}</span>
        </AppButton>
      </div>
    </div>
  </component>
</template>

<script>
import Modal from '@/components/Modal'
import SideDrawer from '@/components/SideDrawer'
import Button from '@/components/Button'

export default {
  name: 'CvModal',
  components: {
    Modal,
    SideDrawer,
    AppButton: Button
  },
  mounted() {
    console.log(this.$mq)
  },
  methods: {
    openPdf(ver = 'original') {
      const pdf = `/cv/${this.$root.$i18n.locale}/CV Bartłomiej Wójcik${
        ver === 'print' ? ' print' : ''
      }.pdf`
      window.open(pdf)
    }
  }
}
</script>

<style lang="scss" scoped>
.cv-modal {
  @apply flex justify-center items-center;

  &__image {
    flex: 1;

    img {
      @apply w-full;
    }
  }

  &__actions {
    flex: 1;
  }
}
</style>
