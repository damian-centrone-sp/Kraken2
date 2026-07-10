---
description: Desarrolla una feature con el lifecycle completo del equipo
argument-hint: "[descripción de la feature]"
---

Feature a desarrollar: $ARGUMENTS

Seguí el lifecycle del equipo:
1. Plan: proponeme un diseño corto (qué archivos tocás, qué tests nuevos
   vas a escribir) y esperá mi ok explícito.
2. Implementación: desarrollá siguiendo CLAUDE.md y las rules del proyecto,
   en una rama nueva feature/<nombre-corto>.
3. Tests: escribí los tests de la lógica nueva (podés agregar casos o
   archivos de test nuevos; los tests existentes no se tocan).
4. Autotest: corré ./scripts/check.sh y corregí hasta que pase.
5. Review: lanzá el agente reviewer y resolvé sus observaciones si las hay.
6. Integración: commit con mensaje descriptivo. Si el repo tiene un remoto
   configurado, hacé push y ejecutá gh pr create con título y descripción
   del cambio; si no hay remoto, mostrame el comando gh pr create listo
   para cuando lo tenga.
