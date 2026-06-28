<script setup lang="ts">
withDefaults(defineProps<{ mark?: string | number }>(), {})
</script>

<template>
  <div class="math-footnote">
    <div class="math-footnote-sep" />
    <div class="math-footnote-content">
      <span v-if="mark" class="math-footnote-mark">{{ mark }}. </span>
      <slot />
    </div>
  </div>
</template>
