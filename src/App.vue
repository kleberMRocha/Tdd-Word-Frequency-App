<template>
  <Header />
  <router-view/>
</template>
<script>
import Header from '@/components/Header.vue'
import './assets/css/main.css'
export default {
  name: 'App',
  components: {
    Header
  }
}
</script>

<style>

</style>
