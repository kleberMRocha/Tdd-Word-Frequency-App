<template>
  <nav class="header-app">
      <strong>Word Frequency Counter</strong>
      <div class="nav-container">
      <router-link :to="'/'">
        <span>
          <font-awesome-icon icon="home" /> Home
      </span>
      </router-link>
      <router-link :to="'/Ranking'">
        <span>
            <font-awesome-icon icon="trophy" /> Ranking
        </span>
      </router-link>
      </div>
  </nav>
</template>

<script>
export default {
  name: 'Header'

}
</script>

<style>
.header-app{
  background: #764AF1;
  font-weight: bold;
  display: flex;
  gap: 16px;
  justify-content: space-between;
  align-items: center;
  padding: 4px 16px;
  height: 80px;
}

.header-app strong,span {
  color: #F2F2F2;
  margin: 0 16px;
  transition: .5s;
}

.header-app span:hover{
   color: #b89eff;
}

.nav-container{
  display: flex;
  flex-wrap: wrap;
  gap: 16px;
}

</style>
