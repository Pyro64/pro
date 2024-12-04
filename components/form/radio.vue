<script setup lang='ts'>
const props = defineProps<{ radio: string[], active: string }>()
const model = defineModel()
</script>
<template>
    <div class="block">
        <template v-for="type in displayFilters.productType">
            <input type="radio" class="btn-check" name="productTypes" :id="type" autocomplete="off" :value="type"
                v-model="model" />
            <label class="btn rounded-pill" :class="activeFilters.productType === type ? 'btn-dark' : 'btn-secondary'"
                :for="type">{{ type }}</label>
        </template>
    </div>
</template>
<style scoped lang='scss'>
.block {
    display: flex;
    gap: 4px;
}
</style>