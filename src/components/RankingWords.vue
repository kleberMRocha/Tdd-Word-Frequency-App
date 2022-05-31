<template>
  <div class="container">
    <table class="rankingTable">
      <tr>
        <td>
              <font-awesome-icon icon="trophy" />
        </td>
          <td>
              um
        </td>
        <td>
             8
        </td>
      </tr>
    </table>
  </div>
</template>

<script>
export default {
  name: 'Ranking'

}
</script>

<style>
.container{
  background: #f3f3f3;
  border-radius: 8px;
  height: 30vw;
  display: flex;
  justify-content: center;
  align-items: flex-start;
  padding:12px
}
.rankingTable td,tr{
  border: 1px solid #8f24af;
  min-width: 90px;
}

</style>
