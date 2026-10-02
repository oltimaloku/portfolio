# oltimaloku.github.io/portfolio

Olti Maloku's portfolio. Next.js, exported as static HTML and deployed to GitHub Pages by `.github/workflows/deploy.yml` on every push to `main`.

```bash
npm run dev       # http://localhost:3000
npm run build     # static export into out/
npm run images    # convert new PNG/JPG in public/images to WebP
```

## Adding a project

1. Copy `content/projects/_template.mdx` to `content/projects/<slug>.mdx` and fill in the frontmatter.
2. Put images in `public/images/projects/<slug>/` and run `npm run images`.
3. Choose its `scale`: `large`, `medium` or `small`. Its Roman numeral, place on the home page and point in the triad are worked out automatically.

A missing or malformed field fails the build with a message naming the file and the field.

## Where things live

| What | Where |
| --- | --- |
| Colours, type, line styles | `src/app/globals.css` (tokens at the top) |
| Name, role, links, experience | `src/lib/site.ts` |
| Projects and articles | `content/` |
| Hero drawing (generated Pantheon section) | `src/components/drawing/pantheon.ts` |
| Plates, triad, MDX components | `src/components/folio/` |
