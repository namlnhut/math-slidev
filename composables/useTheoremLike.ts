import { computed, getCurrentInstance, onBeforeUnmount, watch } from 'vue'
import { getTheoremIndex, registerTheoremLike, unregisterTheoremLike } from './theoremCounter'

/**
 * Per-type global counter. "Theorem 1, Theorem 2, …" independent of
 * "Exercise 1, Exercise 2, …". When `number` prop is provided it is
 * used verbatim and the component is excluded from the counter.
 */
export function useTheoremLike(kind: string, numberProp: () => string | number | undefined) {
  const instance = getCurrentInstance()!
  const uid = instance.uid

  let registered = false

  watch(
    () => numberProp(),
    (explicit) => {
      const wantsAuto = explicit === undefined
      if (registered && !wantsAuto) {
        unregisterTheoremLike(uid, kind)
        registered = false
      }
      if (wantsAuto && !registered) {
        registerTheoremLike(uid, kind)
        registered = true
      }
    },
    { immediate: true },
  )

  onBeforeUnmount(() => {
    if (registered) {
      unregisterTheoremLike(uid, kind)
      registered = false
    }
  })

  const autoNumber = computed<string | number>(() => {
    const explicit = numberProp()
    if (explicit !== undefined) return explicit
    return getTheoremIndex(uid, kind)
  })

  return { autoNumber }
}
