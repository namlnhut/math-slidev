<template>
  <div class="layout-cover">
    <slot />
  </div>
</template>

<style scoped>
.layout-cover {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  height: 100%;
  padding: 3rem 4rem;
}

.layout-cover :deep(h1) {
  font-size: 2.2em;
  font-weight: 700;
  line-height: 1.15;
  margin-bottom: 0.6rem;
}

.layout-cover :deep(p) {
  font-size: 1.1em;
  opacity: 0.85;
}
</style>
