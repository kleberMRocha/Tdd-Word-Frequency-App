<template>
<div class="container-table">
  <table class="table-info">
    <tr>
    <td class="header" colspan="3">
        <span>Resultado da Contagem</span>
    </td>
    </tr>
    <tbody>
    <tr v-for="info in infos" :key="info.title">
       <td data-test="table">{{info.title}}</td>
       <td>{{info.value}}</td>
    </tr>
    </tbody>
  </table>
  <button data-test v-if="hasInfos" @click="saveRanking" :disabled="savedInLocalstorage" >
    <font-awesome-icon icon="trophy" />
    Savlar informações para o ranking
   </button>
</div>
</template>

<script>
export default {
  name: 'Table',
  data () {
    return {
      savedInLocalstorage: false
    }
  },
  props: {
    infos: {
      type: Array,
      require: true,
      defaut: () => []
    }
  },
  computed: {
    hasInfos () {
      if (!this.infos) return false
      return !!this.infos.length
    }
  },
  methods: {
    saveRanking () {
      this.savedInLocalstorage = true
      const old = JSON.parse(localStorage.getItem('@TDDAPP'))
      const newWord = JSON.parse(JSON.stringify(this.infos))

      if (!old) {
        localStorage.setItem('@TDDAPP', JSON.stringify(this.infos))
      }

      const uniqueWords = newWord.filter(u => {
        return !(old.find(o => o.title === u.title))
      })

      const result = old.map(r => {
        const w = newWord.find(w => w.title === r.title)
        if (w) {
          r.value = r.value += w.value
        }
        return r
      })

      const finalResult = [...result, ...uniqueWords]

      localStorage.setItem('@TDDAPP', JSON.stringify(finalResult))
    }

  },
  watch: {
    hasInfos (value) {
      if (!value) {
        this.savedInLocalstorage = false
      }
    }
  }
}
</script>

<style>
.container-table{
text-align: center;
}

.container-table button[disabled]{
  position: relative;
  background: #d3d3d3;
  color: #464646;
  border: 1px #464646 solid;
  cursor: not-allowed;
}

.container-table button::after{
 content: 'Informaões  no Ranking';
 position: absolute;
 bottom:  -30px;
 width: 100%;
 left: 0;
 right: 0;
 color:blueviolet
}

.container-table button[disabled]:hover{
  background: #d3d3d3;
  color: #464646;
  border: 1px #464646 solid;
  cursor: not-allowed;
}

.container-table button{
  cursor: pointer;
  background: none;
  border: 1px #764AF1 solid;
  color: #764AF1;
  padding: 8px;
}

.container-table button:hover{
  background: #9772FB;
  color: #f8f8f8;
}

.table-info{
  margin: 24px auto;
  border: 1px #764AF1 solid;
}
.table-info td.header{
  background: #6e43e6;
  color: #ffffff;
  text-align: center;
}

.table-info td{
  border: 1px solid #4620af;
  min-width: 300px;
  text-align: center;
  font-weight: bold;
  color: #636363;
}

</style>
