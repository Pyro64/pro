<script setup lang="ts">
import type { Partner } from "~/types/partner.type";

const card = defineProps<Partner>();
</script>
<template>
  <div class="partner">
    <nuxt-img
      fit="fill"
      :placeholder="[150, 150, 20, 3]"
      format="webp"
      :src="`/images/partners/${card.logo.toLowerCase()}.png`"
      :alt="card.name"
      class="img"
    />
    <div class="block">
      <div class="item">
        <h2 class="title">{{ card.name }}</h2>
        <span
          class="badge rounded-pill status"
          :class="statusTheme(card.status)"
        >
          {{ card.status }}</span
        >
      </div>
      <div class="info">
        <nuxt-link class="link" :href="`tel:${card.phone}`">{{
          card.phone
        }}</nuxt-link>
        <nuxt-link class="link" :href="`mailto:${card.email}`">{{
          card.email
        }}</nuxt-link>
        <nuxt-link
          :href="`https://${card.website}`"
          target="_blank"
          rel="noopener noreferrer"
          class="website link"
          >{{ card.website }}</nuxt-link
        >
      </div>
    </div>
  </div>
</template>
<style scoped lang="scss">
.partner {
  display: flex;
  gap: 40px;
  border-bottom: 1px solid #ccccd1;
  padding-bottom: 40px;
  margin-bottom: 40px;
  &:last-child {
    margin-bottom: 0;
  }
}
.img {
  width: 100px;
  object-fit: contain;
  flex-shrink: 0;
}
.block {
  flex-grow: 1;
}
.item {
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
}
.info {
  display: flex;
  gap: 25px;
}
.title {
  margin-bottom: 25px;
  font-weight: 800;
  font-size: 20px;
}
.status {
  padding-left: 16px;
  padding-right: 16px;
  padding-top: 5px;
  padding-bottom: 5px;
  font-size: 12px;
  font-weight: 500;
}
.link {
  text-decoration: none;
  font-size: 16px;
  color: #000;
  position: relative;
  &::after {
    content: "";
    transition: 0.3s ease-in-out;
    position: absolute;
    width: 0;
    height: 2px;
    left: 50%;
    bottom: 0;
    background: #000;
  }
  &:hover {
    &::after {
      left: 50%;
      transform: translateX(-50%);
      width: 50%;
    }
  }
  &:active {
    &::after {
      left: 50%;
      width: 100%;
    }
  }
}
.website {
  color: #00a5ad;
  font-weight: 500;
  &::after {
    background: #00a5ad;
  }
}
</style>
