<template>
  <q-page class="flex flex-center">
    <img src="~assets/quasar-logo-full.svg">
  </q-page>
</template>

<style>
</style>

<script>
export default {
  name: 'PageHomeIndex',
  mounted () {
    this.$OidcClient.startSigninMainWindow()
  }
}
</script>
