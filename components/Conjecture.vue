<script setup lang="ts">
import { useTheoremLike } from '../composables/useTheoremLike'

const props = withDefaults(defineProps<{ title?: string; number?: string | number }>(), {})
const { autoNumber } = useTheoremLike('Conjecture', () => props.number)
</script>

<template>
  <div class="math-block math-block--conjecture">
    <div class="math-block-header">
      <span class="font-bold">Conjecture {{ autoNumber }}</span>
      <span v-if="title" class="font-normal italic"> ({{ title }})</span>
    </div>
    <div class="math-block-body"><slot /></div>
  </div>
</template>
