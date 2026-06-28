import { readFileSync, statSync } from 'node:fs'
import { defineConfig } from 'vite'

// Inject \tag{n} into every untagged display equation across all slides
// so equation numbers are globally sequential. Component numbering is
// handled at runtime by the Vue composable in composables/useTheoremLike.ts.

function blankCodeFences(src: string): string {
  return src.replace(/```[\s\S]*?```/g, m => ' '.repeat(m.length))
}

function injectEqTags(content: string, eqCounter: { n: number }): string {
  let c = content
  const stripped = blankCodeFences(c)
  const insertions: Array<{ pos: number; tag: string }> = []
  const re = /\$\$([\s\S]*?)\$\$/g
  let m: RegExpExecArray | null
  while ((m = re.exec(stripped)) !== null) {
    eqCounter.n++
    if (/\\tag\s*\{/.test(m[1])) continue
    insertions.push({ pos: m.index + m[0].length - 2, tag: ` \\tag{${eqCounter.n}}` })
  }
  for (let i = insertions.length - 1; i >= 0; i--) {
    const { pos, tag } = insertions[i]
    c = c.slice(0, pos) + tag + c.slice(pos)
  }
  return c
}

const caches = new Map<string, { mtime: number; slides: Map<number, string> }>()

async function getSlideMap(entry: string): Promise<Map<number, string>> {
  const mtime = statSync(entry).mtimeMs
  const hit = caches.get(entry)
  if (hit && hit.mtime === mtime) return hit.slides

  const { parseSync } = await import('@slidev/parser')
  const raw = readFileSync(entry, 'utf-8')
  const data = parseSync(raw, entry)

  const slides = new Map<number, string>()
  const eqCounter = { n: 0 }
  for (let i = 0; i < data.slides.length; i++) {
    slides.set(i + 1, injectEqTags(data.slides[i].content, eqCounter))
  }
  caches.set(entry, { mtime, slides })
  return slides
}

export default defineConfig({
  base: process.env.VITE_BASE ?? '/',
  slidev: {
    markdown: {
      transforms: {
        async before(code: string, id: string) {
          const match = id.match(/^(.+)__slidev_(\d+)\.md$/)
          if (!match) return code
          const slideMap = await getSlideMap(match[1])
          return slideMap.get(parseInt(match[2])) ?? code
        },
      },
    },
  },
})
