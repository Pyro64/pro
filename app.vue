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
});

const store = usePartnersStore();
const { filteredPartners, status } = storeToRefs(store);
</script>
<template>
  <div class="page">
    <div class="container">
      <app-header />
      <client-only>
        <app-loader v-if="status === 'pending'" />
        <div class="block" v-if="status === 'success'">
          <app-filter />
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
</style>
