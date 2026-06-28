<script setup lang="ts">
import { useNav } from '@slidev/client'
const { currentPage, total } = useNav()
</script>

<template>
  <div v-if="currentPage > 1" class="slide-number">
    {{ currentPage }} / {{ total }}
  </div>
</template>

<style>
/* ── Slide number ──────────────────────────────────────────── */
.slide-number {
  position: fixed;
  bottom: 0.9rem;
  right: 1.4rem;
  font-size: 0.72rem;
  color: #888;
  font-family: 'JetBrains Mono', 'Fira Mono', ui-monospace, monospace;
  letter-spacing: 0.04em;
  user-select: none;
  pointer-events: none;
  z-index: 200;
}

/* ══════════════════════════════════════════════════════════
   MATH BLOCK COMPONENT STYLES
   Injected here so Vue's SFC compiler guarantees they load
   regardless of whether style.css is picked up by Slidev.
   ══════════════════════════════════════════════════════════ */

/* ── Shared structure ──────────────────────────────────────── */
.math-block {
  border-radius: 2px;
  overflow: hidden;
  font-size: 0.88em;
  margin: 0.5rem 0;
}

.math-block-header {
  padding: 0.2rem 0.75rem;
  font-size: 0.87em;
  color: #fff;
}

.math-block-body {
  padding: 0.4rem 0.75rem;
  color: #111;
}

/* ── Theorem / Lemma / Corollary / Proposition  (navy) ─────── */
.math-block--theorem .math-block-header,
.math-block--lemma .math-block-header,
.math-block--corollary .math-block-header,
.math-block--proposition .math-block-header {
  background: #1a3a6b;
}
.math-block--theorem .math-block-body,
.math-block--lemma .math-block-body,
.math-block--corollary .math-block-body,
.math-block--proposition .math-block-body {
  background: #dce9f9;
  font-style: italic;
}

/* ── Conjecture / Claim  (indigo) ─────────────────────────── */
.math-block--conjecture .math-block-header,
.math-block--claim .math-block-header {
  background: #2d3f7a;
}
.math-block--conjecture .math-block-body,
.math-block--claim .math-block-body {
  background: #dce0f5;
  font-style: italic;
}

/* ── Definition / Axiom / Notation / Law  (teal) ──────────── */
.math-block--definition .math-block-header,
.math-block--axiom .math-block-header,
.math-block--notation .math-block-header,
.math-block--law .math-block-header {
  background: #0d4d4d;
}
.math-block--definition .math-block-body,
.math-block--axiom .math-block-body,
.math-block--notation .math-block-body,
.math-block--law .math-block-body {
  background: #d5eeed;
}

/* ── Example / Exercise  (forest green) ───────────────────── */
.math-block--example .math-block-header,
.math-block--exercise .math-block-header {
  background: #145a1e;
}
.math-block--example .math-block-body,
.math-block--exercise .math-block-body {
  background: #d4edda;
}

/* ── Fact  (mid green) ─────────────────────────────────────── */
.math-block--fact .math-block-header {
  background: #2e6b28;
}
.math-block--fact .math-block-body {
  background: #daebd8;
}

/* ── Proof  (charcoal) ─────────────────────────────────────── */
.math-block--proof .math-block-header {
  background: #3d4852;
}
.math-block--proof .math-block-body {
  background: #f0f4f8;
}
.math-block-qed-row {
  text-align: right;
  margin-top: 0.3em;
  line-height: 1;
}
.math-block--proof .math-block-qed {
  font-size: 1.45em;
}

/* ── Remark / Assumption  (amber) ─────────────────────────── */
.math-block--remark .math-block-header,
.math-block--assumption .math-block-header {
  background: #7a5300;
}
.math-block--remark .math-block-body,
.math-block--assumption .math-block-body {
  background: #fdf3cd;
}

/* ── Rule  (burnt orange) ──────────────────────────────────── */
.math-block--rule .math-block-header {
  background: #6b3500;
}
.math-block--rule .math-block-body {
  background: #fde8c8;
}

/* ── Warning  (crimson) ────────────────────────────────────── */
.math-block--warning .math-block-header {
  background: #8b1c1c;
}
.math-block--warning .math-block-body {
  background: #fde8e8;
}

/* ── Question  (purple) ────────────────────────────────────── */
.math-block--question .math-block-header {
  background: #4b1d96;
}
.math-block--question .math-block-body {
  background: #ede8f9;
}

/* ── Cite ──────────────────────────────────────────────────── */
.math-cite {
  font-size: 0.7em;
  color: #1a3a6b;
  font-weight: 500;
  vertical-align: super;
  line-height: 0;
  letter-spacing: 0.01em;
}

/* ── Footnote ──────────────────────────────────────────────── */
.math-footnote {
  position: absolute;
  bottom: 1.8rem;
  left: 2rem;
  right: 2rem;
}
.math-footnote-sep {
  border-top: 1px solid #aaa;
  width: 30%;
  margin-bottom: 0.3rem;
}
.math-footnote-content {
  font-size: 0.7em;
  color: #444;
  line-height: 1.4;
}
.math-footnote-mark {
  font-weight: 600;
}

/* ── BookTable ─────────────────────────────────────────────── */
.book-table {
  border-radius: 2px;
  overflow: hidden;
  font-size: 0.88em;
}
.book-table-title {
  background: #1a3a6b;
  color: #fff;
  padding: 0.25rem 0.75rem;
  font-weight: 700;
  font-size: 0.9em;
}
.book-table-body {
  background: #f4f8ff;
  padding: 0.4rem 0.75rem;
  color: #111;
}
.book-table-entry {
  display: flex;
  align-items: baseline;
  gap: 0.35rem;
  line-height: 1.75;
}
.book-table-main { font-weight: 600; }
.book-table-sub {
  padding-left: 1.5rem;
  font-weight: 400;
  font-size: 0.93em;
  color: #333;
}
.book-table-entry-number { flex-shrink: 0; min-width: 1.6rem; }
.book-table-entry-title  { flex-shrink: 0; }
.book-table-entry-dots   { flex: 1; border-bottom: 1px dotted #aaa; margin-bottom: 0.22rem; }
.book-table-entry-page   { flex-shrink: 0; color: #555; font-variant-numeric: tabular-nums; }

/* ── KaTeX display equation spacing & tag colour ───────────── */
.katex-display {
  margin: 0.6em 0;
}
.katex-display .tag {
  color: #555;
  font-size: 0.82em;
}
.math-block-body .katex-display {
  margin: 0.4em 0;
}
</style>
