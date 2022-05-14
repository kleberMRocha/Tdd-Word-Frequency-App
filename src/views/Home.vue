<template>
  <div class="home">
    <WordTextArea />
  </div>
</template>

<script>
// @ is an alias to /src
import WordTextArea from '@/components/WordTextArea.vue'

export default {
  name: 'Home',
  components: {
    WordTextArea
  }
}
</script>
