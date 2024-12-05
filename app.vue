<script setup lang="ts">
import "@fontsource-variable/montserrat";
useHead({
  title: "PRO32",
  link: [
    {
      href: "https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css",
      crossorigin: "anonymous",
      rel: "stylesheet",
      integrity:
        "sha384-EVSTQN3/azprG1Anm3QDgpJLIm9Nao0Yz1ztcQTwFspd3yD65VohhpuuCOmLASjC",
    },
  ],
  script: [
    {
      src: 'https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/js/bootstrap.bundle.min.js',
      crossorigin: 'anonymous',
      integrity: 'sha384-MrcW6ZMFYlzcLA8Nl+NtUVF0sA7MsXsP1UyJoMp4YLEuNSfAP+JcXn/tWtIaxVX',
    }
  ]
});

const store = usePartnersStore();
const { toggleModalFilter } = store
const { filteredPartners, status, showModalFilter } = storeToRefs(store);

import { useWindowSize } from '@vueuse/core'

const { width } = useWindowSize()
</script>
<template>
  <div class="page">
    <div class="container">
      <app-header />
      <client-only>
        <ui-loader v-if="status === 'pending'" />
        <div class="block" v-if="status === 'success'">
          <app-filter v-if="width > 1024" />
          <div v-else>
            <button class="btn btn-primary" @click="toggleModalFilter">
              Фильтры
            </button>
            <ui-modal :show="showModalFilter" @toggle-modal="toggleModalFilter" title="Фильтры">
              <app-filter />
            </ui-modal>
          </div>
          <transition name="fade" mode="out-in">
            <div v-if="filteredPartners.length === 0">Список пуст</div>
            <transition-group name="list" tag="div" class="item" v-else>
              <partner-card v-for="partner in filteredPartners" v-bind="partner" :key="partner.id" />
            </transition-group>
          </transition>
        </div>
      </client-only>
    </div>
  </div>
</template>

<style scoped lang="scss">
.page {
  margin-top: 150px;
  margin-bottom: 260px;
}

.block {
  display: flex;
  gap: 70px;
}

.item {
  flex-grow: 1;
}

@media(max-width:1024px) {
  .block {
    flex-direction: column;
    gap: 30px;
  }

  .page {
    margin-top: 30px;
    margin-bottom: 30px;
  }
}
</style>
