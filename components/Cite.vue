<script setup lang="ts">
withDefaults(defineProps<{ label?: string }>(), {})
</script>

<template>
  <sup class="math-cite">
    <span v-if="label">[{{ label }}]</span>
    <span v-else>[<slot />]</span>
  </sup>
</template>
