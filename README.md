# Tea Shelf

Tea Shelf is currently organized as a documentation-first repository with MVP implementation projects under `projects/`.

## Projects

- `projects/web` - empty runnable React + Vite web app scaffold.
- `projects/design-system-impl` - empty runnable shared design-system implementation library scaffold.

## Workspace Commands

Install dependencies:

```sh
pnpm install
```

Run the web app:

```sh
pnpm dev
```

Run the design-system demo:

```sh
pnpm --filter design-system-impl dev
```

Run all checks:

```sh
pnpm lint
pnpm typecheck
pnpm test
pnpm build
```
