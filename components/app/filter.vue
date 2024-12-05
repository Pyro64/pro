<script setup lang="ts">
const store = usePartnersStore();
const { displayFilters, getFilteredPartners, clearFiltered } = store;
const { activeFilters } = storeToRefs(store);
</script>

<template>
  <div class="filter" v-if="displayFilters">
    <p class="title">Уточните адрес</p>
    <div class="selects">
      <form-select v-model="activeFilters.country" :options="displayFilters.country" placeholder="Страна" />
      <form-select v-model="activeFilters.city" :options="displayFilters.city" placeholder="Город" />
    </div>
    <p class="titile">Выберите тип продукта</p>
    <form-radio :radio="displayFilters.productType" v-model="activeFilters.productType" />
    <p class="titile">Выберите продукт</p>
    <form-radio :radio="displayFilters.products" v-model="activeFilters.products" />
    <p class="titile">Выберите тип партнёра</p>
    <form-tags>
      <template v-for="option in displayFilters.partnerType" :key="option">
        <input type="checkbox" class="btn-check" :id="option" autocomplete="off" :value="option"
          v-model="activeFilters.partnerType" />
        <label class="btn rounded-pill btn-outline-dark checkbox" :for="option">{{ option }}</label>
      </template>
    </form-tags>
    <div class="buttons">
      <button @click="clearFiltered" type="button" class="btn btn-lg btn-outline-dark ">Очистить</button>
      <button @click="getFilteredPartners" type="button" class="btn btn-lg btn-outline-success search">Найти</button>
    </div>
  </div>
</template>

<style scoped lang="scss">
.filter {
  width: 380px;

  @media(max-width:450px) {
    width: 100%;
  }
}

.selects {
  display: flex;
  flex-direction: column;
  gap: 15px;
  margin-bottom: 15px;
}

.title {
  font-size: 14px;
  margin-bottom: 15px;
  color: #9999a2;
}

.checkbox {
  background: #6c757d;
  color: #fff;

  &:hover {
    background-color: #5c636a;
    border-color: #565e64;
  }
}

.search {
  color: #00A5AD;
  border-color: #00A5AD;

  &:hover {
    background-color: #00A5AD;
    color: #fff;
  }
}

.buttons {
  margin-top: 40px;
  display: flex;
  gap: 9px;
}
</style>
