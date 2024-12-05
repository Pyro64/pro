<script setup lang='ts'>
const props = defineProps<{ show: boolean, title: string }>()
const emit = defineEmits(['toggle-modal'])
</script>
<template>
    <Teleport to="body">
        <div class="modal fade" :class="{ show: show }" :style="{ display: show ? 'block' : 'none' }" tabindex="-1">
            <div class="modal-dialog">
                <div class="modal-content">
                    <div class="modal-header">
                        <h5 class="modal-title">{{ title }}</h5>
                        <button type="button" class="btn-close" @click="emit('toggle-modal')"
                            aria-label="Закрыть"></button>
                    </div>
                    <div class="modal-body">
                        <slot />
                    </div>
                </div>
            </div>
        </div>
        <div class="modal-backdrop fade" :class="{ show: show }" v-if="show"></div>
    </Teleport>
</template>
