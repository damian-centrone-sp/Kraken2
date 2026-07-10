# Rúbrica del AI adoption health audit

| Pieza | Criterio | Puntos |
|---|---|---|
| CLAUDE.md | Existe | 10 |
| CLAUDE.md | <200 líneas, con comandos de build/test y convenciones reales | +10 |
| Rules | Al menos una rule con `paths:` relevante al stack | 10 |
| Permisos | settings.json de proyecto con deny de secretos | 15 |
| Commands/Skills | Al menos un procedimiento de equipo invocable | 15 |
| Hooks | Validación automática (lint/format/test) en PostToolUse o Stop | 20 |
| Agents | Al menos un rol custom (reviewer, qa, etc.) | 10 |
| Autotest→PR | El agente llega a un PR verde solo (lifecycle completo) | 10 |

Lectura del score: 0–30 "sin harness" (el modelo improvisa), 31–60 "harness
básico" (contexto sí, enforcement no), 61–85 "harness sólido", 86–100
"paved path" (el camino de calidad es el camino fácil).
