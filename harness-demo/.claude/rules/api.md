---
paths:
  - "api/src/**/*.ts"
---

# Reglas del API (NestJS)
- Prohibido agregar dependencias nuevas sin aprobación humana explícita.
- Toda lógica de negocio va en retro.service.ts, con tests en
  retro.service.spec.ts escritos ANTES de dar la tarea por terminada.
- Las validaciones de negocio viven en el service (no en el controller),
  consistentes con las existentes (BadRequestException).
- Mensajes de error de la API siempre en español.

# Contrato de regresión
- Los tests existentes son un contrato de regresión: PROHIBIDO
  modificarlos, borrarlos o relajarlos para hacer pasar un cambio.
- Si un pedido del usuario contradice un test existente, frená: explicá
  el conflicto y esperá una decisión humana antes de tocar el test.
