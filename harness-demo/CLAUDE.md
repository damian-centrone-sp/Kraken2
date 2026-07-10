# CLAUDE.md

## Qué es esto

Tablero de retrospectiva, monorepo npm con dos workspaces:
- `api/`: NestJS, puerto 3000.
- `web/`: React + Vite, puerto 5173, con proxy de `/api` al backend.

## Cómo correrlo

`npm run dev` desde la raíz levanta ambos workspaces en paralelo.

## Dependencias

Prohibido agregar dependencias nuevas sin aprobación humana.

## Tests

- Correr `./scripts/check.sh` para la suite de tests.
- Ningún cambio de lógica está terminado sin tests que pasen.

## Dónde va cada cosa

- Lógica de negocio: `api/src/retro.service.ts`, tests en
  `api/src/retro.service.spec.ts`.
- UI: `web/src/App.tsx`, estilos en `web/src/styles.css`.

## Idioma

Mensajes de error y todo texto visible para el usuario van en español.
