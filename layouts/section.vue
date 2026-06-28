<script setup lang="ts">
defineProps<{ number?: string | number }>()
</script>

<template>
  <div class="layout-section">
    <div class="section-accent" />
    <div class="section-body">
      <div class="section-title">
        <span v-if="number" class="section-number">{{ number }}.</span>
        <slot />
      </div>
      <slot name="subtitle" />
    </div>
  </div>
</template>

<style scoped>
.layout-section {
  display: flex;
  align-items: center;
  height: 100%;
  padding: 0 4rem;
  gap: 2.5rem;
}

.section-accent {
  width: 6px;
  height: 60%;
  background: #1a3a6b;
  border-radius: 3px;
  flex-shrink: 0;
}

.section-body {
  display: flex;
  flex-direction: column;
}

.section-title {
  display: flex;
  align-items: baseline;
  gap: 0.25em;
}

.section-number {
  font-size: 2em;
  color: #1a3a6b;
  font-weight: 700;
  line-height: 1.2;
  flex-shrink: 0;
}

.layout-section :deep(h1) {
  font-size: 2em;
  font-weight: 700;
  line-height: 1.2;
  margin: 0;
}

.layout-section :deep(p) {
  font-size: 1em;
  opacity: 0.65;
  margin: 0;
}

</style>
