<script setup lang='ts'>
</script>
<template>
    <div class="tags">
        <slot />
    </div>
</template>
<style scoped lang='scss'>
.tags {
    display: flex;
    flex-wrap: wrap;
    gap: 8px;
    margin-bottom: 30px;
}
</style>