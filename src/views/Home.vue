<template>
  <div class="home">
    <WordTextArea @showResult="setResult" />
    <TableInfos />
  </div>
</template>

<script>
// @ is an alias to /src
import WordTextArea from '@/components/WordTextArea.vue'
import TableInfos from '@/components/TableInfos.vue'
import { ref } from 'vue'

export default {
  name: 'Home',
  components: {
    WordTextArea,
    TableInfos
  },
  setup () {
    const result = ref('')
    const setResult = (payload) => {
      result.value = payload.value
    }
    return { setResult, result }
  }
}
</script>
