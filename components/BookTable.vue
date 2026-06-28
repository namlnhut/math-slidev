<script setup lang="ts">
export interface BookTableItem {
  title: string
  number?: string | number
  page?: number
  sub?: Array<{ title: string; number?: string | number; page?: number }>
}

withDefaults(defineProps<{
  title?: string
  items: BookTableItem[]
}>(), {
  title: 'Table of Contents',
})
</script>

<template>
  <div class="book-table">
    <div class="book-table-title">{{ title }}</div>
    <div class="book-table-body">
      <div v-for="(item, i) in items" :key="i">
        <div class="book-table-entry book-table-main">
          <span class="book-table-entry-number" v-if="item.number">{{ item.number }}</span>
          <span class="book-table-entry-title">{{ item.title }}</span>
          <span class="book-table-entry-dots" />
          <span class="book-table-entry-page" v-if="item.page">{{ item.page }}</span>
        </div>
        <div
          v-for="(sub, j) in item.sub"
          :key="j"
          class="book-table-entry book-table-sub"
        >
          <span class="book-table-entry-number" v-if="sub.number">{{ sub.number }}</span>
          <span class="book-table-entry-title">{{ sub.title }}</span>
          <span class="book-table-entry-dots" />
          <span class="book-table-entry-page" v-if="sub.page">{{ sub.page }}</span>
        </div>
      </div>
    </div>
  </div>
</template>
