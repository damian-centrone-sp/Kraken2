---
paths:
  - "web/src/**/*.{ts,tsx}"
---

# Reglas del frontend (React)
- Componentes funcionales con hooks; nada de librerías de UI nuevas.
- Los estilos van en styles.css reutilizando las clases y variables
  existentes (respetar el acento por columna con --acento).
- Todos los textos visibles en español.
- Los errores que devuelve la API se muestran al usuario; nunca se
  silencian con un catch vacío.
