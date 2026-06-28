<script setup lang="ts">
defineProps<{ title?: string }>()
</script>

<template>
  <div class="layout-toc">
    <div class="toc-col toc-left">
      <slot />
    </div>
    <div v-if="$slots.right" class="toc-col toc-right">
      <slot name="right" />
    </div>
  </div>
</template>

<style scoped>
.layout-toc {
  display: flex;
  gap: 2.5rem;
  height: 100%;
  padding: 1.5rem 2.5rem;
  align-items: flex-start;
}

.toc-col {
  flex: 1;
  min-width: 0;
}

.layout-toc :deep(h1) {
  font-size: 1.6em;
  font-weight: 700;
  margin-bottom: 0.8rem;
  padding-bottom: 0.4rem;
  border-bottom: 2px solid #1a3a6b;
  color: #1a3a6b;
}
</style>
