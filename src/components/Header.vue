<template>
  <nav class="header-app">
      <strong>Word Frequency Counter</strong>
      <router-link :to="'/'">Home</router-link>
      <router-link :to="'/Ranking'">Ranking</router-link>
  </nav>
</template>

<script>
export default {

}
</script>

<style>
.header-app{
  background: #764AF1;
  font-weight: bold;
  display: flex;
  gap: 16px;
  justify-content: flex-start;
  align-items: center;
  padding: 8px;
  height: 80px;
}

.header-app a, strong {
  color: #F2F2F2;
}

</style>
