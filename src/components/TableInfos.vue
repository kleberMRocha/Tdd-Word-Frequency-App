<template>
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
</template>

<script>
export default {
  name: 'Table',
  props: {
    infos: {
      type: Array,
      require: true,
      defaut: () => []
    }
  }

}
</script>

<style>
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
