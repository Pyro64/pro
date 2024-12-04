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
      <app-loader v-if="status === 'pending'" />
      <div class="block" v-if="filteredPartners.value && status === 'success'">
        <app-filter />
        <div class="item">
          <partner-card v-for="partner in filteredPartners.value.partners" v-bind="partner" :key="partner.id" />
        </div>
      </div>
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
