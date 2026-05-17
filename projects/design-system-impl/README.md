# design-system-impl

Shared design-system implementation library for Tea Shelf MVP clients.

Design docs version: `MVP-001`
Implemented version: `DS-IMPL-001`

The package exports React components, semantic tokens, and CSS variables/styles:

- `design-system-impl`
- `design-system-impl/tokens`
- `design-system-impl/styles.css`

## Run

```sh
pnpm --filter design-system-impl dev
pnpm --filter design-system-impl storybook
```

## Check

```sh
pnpm --filter design-system-impl lint
pnpm --filter design-system-impl typecheck
pnpm --filter design-system-impl test
pnpm --filter design-system-impl build
pnpm --filter design-system-impl build-storybook
```
