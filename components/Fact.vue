<script setup lang="ts">
import { useTheoremLike } from '../composables/useTheoremLike'

const props = withDefaults(defineProps<{ title?: string; number?: string | number }>(), {})
const { autoNumber } = useTheoremLike('Fact', () => props.number)
</script>

<template>
  <div class="math-block math-block--fact">
    <div class="math-block-header">
      <span class="font-bold">Fact {{ autoNumber }}</span>
      <span v-if="title" class="font-normal italic"> ({{ title }})</span>
    </div>
    <div class="math-block-body"><slot /></div>
  </div>
</template>
