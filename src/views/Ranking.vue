<template>
  <div class="Ranking">
    <h1>Ranking</h1>
    <RankingWords />
  </div>
</template>

<script>
// @ is an alias to /src
import RankingWords from '@/components/RankingWords.vue'

export default {
  name: 'Ranking',
  components: { RankingWords },
  setup () {}
}
</script>
<style scoped>
.Ranking{
  color:blueviolet;
  width: 90%;
  margin: 0 auto;
  text-align: center;
}
</style>
