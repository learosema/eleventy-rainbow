# Eleventy Rainbow

This repo contains a minimal Eleventy setup to generate a simple site with an `index.html` and a `rainbow.svg`.

You can run

- `npm run dev` to run the Eleventy dev server
- `npm run build` to run a build

There seems to be a bug in the built-in pug renderer when you specify a permalink in the front-matter of the pug file:

```txt
[11ty] 1. Having trouble writing to "dist/<rainbow class="svg"></rainbow>" from "./src/rainbow.pug" (via EleventyTemplateError)
[11ty] 2. ENOENT: no such file or directory, mkdir 'E:\Projects\eleventy-rainbow\dist\<rainbow class="svg"><' (via Error)
[11ty]
[11ty] Original error stack trace: Error: ENOENT: no such file or directory, mkdir 'E:\Projects\eleventy-rainbow\dist\<rainbow class="svg"><'
```

Apparently, the permalink is interpreted Emmet-like (or pug-like), so the filename `rainbow.svg` gets transformed into a `<rainbow class="svg">`.

The workaround for now is to additionally set `dynamicPermalink: false`.
