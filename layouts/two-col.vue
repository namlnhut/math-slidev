<script setup lang="ts">
withDefaults(defineProps<{ gap?: string }>(), { gap: '2rem' })
</script>

<template>
  <div class="layout-two-col" :style="{ '--col-gap': gap }">
    <div class="col-left">
      <slot />
    </div>
    <div class="col-right">
      <slot name="right" />
    </div>
  </div>
</template>

<style scoped>
.layout-two-col {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: var(--col-gap, 2rem);
  height: 100%;
  padding: 1rem 2rem;
  align-content: start;
}

.col-left,
.col-right {
  min-width: 0;
}
</style>
