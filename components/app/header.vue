<script setup lang="ts"></script>
<template>
  <header class="header">
    <h1 class="title">Где купить</h1>
    <p class="description">Контакты наших клиентов</p>
  </header>
</template>
<style scoped lang="scss">
.header {
  margin-bottom: 65px;
}

.title {
  text-align: center;
  font-weight: 800;
  font-size: 48px;
  margin-bottom: 25px;
}

.description {
  text-align: center;
  font-size: 20px;
  font-weight: 400;
}

@media(max-width:768px) {
  .header {
    margin-bottom: 30px;
  }

  .title {
    font-size: 30px;
    margin-bottom: 10px;
  }

  .description {
    font-size: 18px;
  }
}
</style>
