<script setup lang="ts">
const store = usePartnersStore();
const { displayFilters } = store;
const { activeFilters } = storeToRefs(store);
</script>
<template>
  <div class="filter" v-if="displayFilters">
    <p class="title">Уточните адрес</p>
    <div class="selects">
      <select class="form-select form-select-lg" aria-label="Выбор страны" v-model="activeFilters.country">
        <option :value="null" disabled>Страна</option>
        <option :value="option" v-for="option in displayFilters.country">
          {{ option }}
        </option>
      </select>
      <select class="form-select form-select-lg" aria-label="Выбор города" placeholder="Город"
        v-model="activeFilters.city">
        <option :value="null" disabled>Город</option>
        <option :value="option" v-for="option in displayFilters.city">
          {{ option }}
        </option>
      </select>
    </div>
    <!-- <form-radio radio="" /> -->
    <!-- прокинуть 2 v-model и массив для отрисовки -->
    <p class="titile">Выберите тип продукта</p>

  </div>
</template>
<style scoped lang="scss">
.filter {
  width: 380px;
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
</style>
