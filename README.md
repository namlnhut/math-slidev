# Mathematical Slide Template

A [Slidev](https://sli.dev) template with Beamer-style academic components for mathematical presentations.

## Components

| Component | Usage |
|-----------|-------|
| `<Theorem>` `<Lemma>` `<Proposition>` | Core mathematical statements |
| `<Proof>` `<Corollary>` | Derivations and consequences |
| `<Definition>` `<Notation>` `<Axiom>` | Foundational elements |
| `<Example>` `<Exercise>` | Pedagogical content |
| `<Remark>` `<Warning>` `<Fact>` | Annotations |
| `<Assumption>` `<Claim>` `<Conjecture>` `<Question>` `<Rule>` `<Law>` | Extended vocabulary |
| `<BookTable>` | Structured table of contents |
| `<Cite>` `<Footnote>` | References |

All block components accept an optional `title` prop and optional `number` prop (for numbered theorems, etc.).

## Local development

```bash
pnpm install
pnpm dev        # visit http://localhost:3030
pnpm build      # production build → dist/
pnpm export     # export to PDF
```

## Deploy

### GitHub Pages

1. Push the repository to GitHub.
2. Go to **Settings → Pages** and set the source to **GitHub Actions**.
3. The workflow at `.github/workflows/deploy.yml` builds and publishes on every push to `master`.

> If your repository is at `https://github.com/<user>/<repo>` (not a user/org root site), the slides are served from a subdirectory. The workflow passes `--base /<repo>/` to `slidev build` automatically via the `VITE_BASE` environment variable — no manual change needed.

### Netlify

Import the repository in Netlify. The `netlify.toml` at the root configures the build automatically.

### Vercel

Import the repository in Vercel. The `vercel.json` at the root configures the build automatically.

## Customization

- Edit `slides.md` to write slides.
- Edit `style.css` for global styles.
- Add new components to `components/`.
- Layouts live in `layouts/` — `section.vue` provides the numbered section divider with an optional `::subtitle::` named slot.
