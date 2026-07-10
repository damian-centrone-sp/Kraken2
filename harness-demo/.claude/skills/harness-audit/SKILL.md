---
name: harness-audit
description: Audita qué tan completo está el harness de IA de un proyecto y devuelve un score con plan de acción
---

Auditá el harness de IA del proyecto actual:

1. Buscá cada pieza: CLAUDE.md, .claude/rules/, .claude/settings.json
   (permisos y hooks), .claude/commands/ y .claude/skills/, .claude/agents/.
2. Puntuá cada pieza con la rúbrica de [rubrica.md](rubrica.md).
3. Devolvé: una tabla con score por pieza, el total sobre 100, la lectura
   del score según la rúbrica, y los 3 próximos pasos de mayor impacto.
