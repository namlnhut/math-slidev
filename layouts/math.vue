<template>
  <div class="layout-math">
    <slot />
  </div>
</template>

<style scoped>
.layout-math {
  height: 100%;
  padding: 1rem 2.5rem;
  display: flex;
  flex-direction: column;
  font-size: 0.92em;
  line-height: 1.6;
}

/* Tighter spacing for dense math slides */
.layout-math :deep(.math-block) {
  margin: 0.3rem 0;
}

.layout-math :deep(.katex-display) {
  margin: 0.4em 0;
}

.layout-math :deep(h1) {
  font-size: 1.5em;
  margin-bottom: 0.4rem;
  padding-bottom: 0.25rem;
  border-bottom: 1px solid #d0d7e3;
}
</style>
