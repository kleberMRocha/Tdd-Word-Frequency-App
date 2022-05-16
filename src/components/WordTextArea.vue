<template>
<div class="word-container">
  <textarea v-model="wordCount" class="text-area-words" maxlength="250" />
  <span class="info">{{info}}</span>
  <div class="btn-container">
      <button type="button" data-test-salvar>Salvar</button>
      <button type="button" :disabled="!isFilled" @click="handleCleanWordCount" data-test-limpar>Limpar</button>
  </div>
</div>
</template>

<script>
import { ref, computed } from 'vue'
export default {
  setup () {
    const wordCount = ref('')
    const info = computed(() => {
      return {
        true: `Caracteres ${wordCount.value.length}`,
        [wordCount.value.length === 250]: 'Maximo de caracteres foi atigido',
        [!wordCount.value.length]: 'Digite um texto para que as palavras sejam contadas'
      }.true
    })

    const isFilled = computed(() => {
      return Boolean(wordCount.value.length)
    })

    const handleCleanWordCount = () => {
      wordCount.value = ''
    }
    return { wordCount, info, isFilled, handleCleanWordCount }
  }

}
</script>

<style>
.word-container{
  background: #f8f8f8;
  padding: 8px;
  margin: 8px auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}

.word-container .info{
  color: #f324f3;
  min-height: 55px;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
}
.word-container textarea{
    border: 1px #764AF1 solid;
    width: 430px;
    height:200px;
}
.btn-container{
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 16px;
  padding: 8px;
}

.btn-container button{
  min-width: 208px;
  height: 25px;
  cursor: pointer;
  transition: .2s;
}

.btn-container button:nth-child(1){
  background: none;
  border: 1px #764AF1 solid;
  color: #764AF1;
}

.btn-container button:nth-child(2){
  background: none;
  border: 1px #9772FB solid;
  color: #9772FB;
}

.btn-container button:hover{
  background: #9772FB;
  color: #f8f8f8;
}

.btn-container button[disabled]{
  cursor: not-allowed;
}

@media(max-width: 800px){
  .word-container textarea{
    width: 300px;
    height:200px;
}
}
</style>
