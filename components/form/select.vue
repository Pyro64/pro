<script setup lang='ts'>
const props = defineProps<{
    options: string[],
    placeholder: string
}>()
const model = defineModel()
</script>
<template>
    <select class="form-select form-select-lg select" v-model="model">
        <option :value="null" disabled>{{ placeholder }}</option>
        <option :value="option" v-for="option in options" :key="option">
            {{ option }}
        </option>
    </select>
</template>
