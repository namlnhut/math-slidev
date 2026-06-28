import { defineAppSetup } from '@slidev/types'

export default defineAppSetup(({ router }) => {
  const base = import.meta.env.BASE_URL
  if (!base || base === '/') return

  // Slidev pushes BASE_URL + slideNo as an absolute path (e.g. '/math-slidev/2'),
  // then Vue Router prepends its own base again → '/math-slidev/math-slidev/2'.
  // Strip the extra prefix here before the route is resolved.
  const prefix = base.endsWith('/') ? base.slice(0, -1) : base

  router.beforeEach((to, _from, next) => {
    if (to.path.startsWith(prefix + '/')) {
      next({ path: to.path.slice(prefix.length), replace: true })
    } else {
      next()
    }
  })
})
