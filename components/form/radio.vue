<script setup lang='ts'>
const props = defineProps<{ radio: string[] }>()
const model = defineModel()
</script>
<template>
    <form-tags>
        <template v-for="type in props.radio" :key="type">
            <input type="radio" class="btn-check" :name="type" :id="type" autocomplete="off" :value="type"
                v-model="model" />
            <label class="btn rounded-pill" :class="model === type ? 'btn-dark' : 'btn-secondary'" :for="type">{{ type
                }}</label>
        </template>
    </form-tags>
</template>
