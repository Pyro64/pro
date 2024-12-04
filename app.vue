<script setup lang="ts">
import "@fontsource-variable/montserrat";
useHead({
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

const { data, status } = await useLazyFetch("/api/partners", {
  key: "partners",
  server: false,
});
</script>
<template>
  <div class="page">
    <div class="container">
      <app-header />
      <div class="block">
        <app-filter />
        <div class="item">
          <app-loader v-if="status === 'pending'" />
          <div v-if="data && status === 'success'">
            <partner-card v-for="partner in data.partners" v-bind="partner" />
          </div>
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
