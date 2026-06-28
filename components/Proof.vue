<script setup lang="ts">
withDefaults(defineProps<{ title?: string }>(), {})
</script>

<template>
  <div class="math-block math-block--proof">
    <div class="math-block-header">
      <span class="font-bold italic">Proof</span>
      <span v-if="title" class="font-normal not-italic"> of {{ title }}</span>
      <span>.</span>
    </div>
    <div class="math-block-body">
      <slot />
      <div class="math-block-qed-row">
        <span class="math-block-qed">∎</span>
      </div>
    </div>
  </div>
</template>
