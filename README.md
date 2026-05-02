# RZ1 Labs Central Code Registry

This repository is a central shadcn-compatible code registry for sharing reusable UI code across projects.

It currently supports two styles:

- New York (default)
- Neobrutalism

The registry includes more than plain UI components. It also ships blocks that contain hooks, lib utilities, pages, and optional CSS files.

## What This Registry Publishes

From [registry.json](registry.json), items are published for both styles.

- `registry:ui`: primitives such as button, input, card, label, textarea
- `registry:component`: reusable components and example blocks
- `registry:hook`: custom React hooks
- `registry:lib`: utility or data-access modules
- `registry:page`: full page examples with target paths

## Style Strategy

New York is treated as the default style namespace.

- Default item names have no suffix, for example:
  - `hello-world`
  - `example-form`
  - `complex-component`
  - `example-with-css`

Neobrutalism items use explicit `-neobrutalism` suffixes.

- UI primitives:
  - `button-neobrutalism`
  - `card-neobrutalism`
  - `input-neobrutalism`
  - `label-neobrutalism`
  - `textarea-neobrutalism`
- Blocks/components:
  - `hello-world-neobrutalism`
  - `example-form-neobrutalism`
  - `complex-component-neobrutalism`
  - `example-with-css-neobrutalism`

This naming convention keeps install commands explicit while preserving a clean default style.

## Project Structure

- Source registry definition: [registry.json](registry.json)
- Generated public registry output: [public/r/registry.json](public/r/registry.json)
- Default style source: [registry/new-york](registry/new-york)
- Neobrutalism style source: [registry/neobrutalism](registry/neobrutalism)
- Demo page with a global style switch: [app/page.tsx](app/page.tsx)

Example of multi-file block packaging (components + hook + lib + page):

- [registry/new-york/blocks/complex-component](registry/new-york/blocks/complex-component)
- [registry/neobrutalism/blocks/complex-component](registry/neobrutalism/blocks/complex-component)

## Development

Install dependencies, then run:

```bash
npm run dev
```

Build registry artifacts:

```bash
npm run registry:build
```

Standard production build:

```bash
npm run build
```

## Adding New Items

1. Add source files under the correct style namespace:
   - default: [registry/new-york](registry/new-york)
   - alternate style(s): [registry/neobrutalism](registry/neobrutalism)
2. Register item metadata and dependencies in [registry.json](registry.json).
3. Keep style naming consistent:
   - default style: no suffix
   - non-default styles: use style suffixes like `-neobrutalism`
4. Run `npm run registry:build` to regenerate files in [public/r](public/r).

## Notes

- This repo is intended to be a central source of truth for reusable code snippets distributed through the shadcn registry format.
- The homepage demo is for preview and comparison only; published installable artifacts are generated from [registry.json](registry.json).
