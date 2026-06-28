import { ref, type Ref } from 'vue'

// Global per-type counter. Each kind (Theorem, Lemma, …) gets its own
// ordered list of component UIDs; position in that list is the number.
const registries = new Map<string, Ref<number[]>>()

function listFor(kind: string): Ref<number[]> {
  let list = registries.get(kind)
  if (!list) {
    list = ref<number[]>([])
    registries.set(kind, list)
  }
  return list
}

export function registerTheoremLike(uid: number, kind: string): void {
  const list = listFor(kind)
  if (!list.value.includes(uid))
    list.value = [...list.value, uid].sort((a, b) => a - b)
}

export function unregisterTheoremLike(uid: number, kind: string): void {
  const list = registries.get(kind)
  if (list?.value.includes(uid))
    list.value = list.value.filter((id) => id !== uid)
}

export function getTheoremIndex(uid: number, kind: string): number {
  const list = listFor(kind)
  const idx = list.value.indexOf(uid)
  return idx === -1 ? 1 : idx + 1
}

export function __resetTheoremCounters(): void {
  registries.clear()
}
