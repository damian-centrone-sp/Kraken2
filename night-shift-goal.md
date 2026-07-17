# Objetivo: Reporte de estado matutino del equipo (recurrente)

Este es un objetivo **recurrente** (corre todas las mañanas), no una tarea de una sola vez.

## 1. SCOPE

- Todos los PRs abiertos del repo del equipo (Kraken2).
- Los tickets de Jira que esos PRs referencian (por ejemplo `PROJ-123`, mencionado en título, descripción o commits).
- El resultado de correr la suite de tests una vez (un solo run, no reintentos hasta que pase).

## 2. ENTREGABLE

Un reporte listo para pegar en Slack, de menos de 30 líneas y escaneable, con:

- PRs agrupados por estado:
  - Necesita review
  - Cambios pedidos
  - Aprobado sin mergear
  - Stale hace más de 3 días (sin actividad)
- Para cada PR: el ticket de Jira asociado y su estado actual.
- Una línea con el resultado de la suite de tests (pasó / falló / cuántos tests fallaron).

## 3. DONE significa

- Se contemplaron **todos** los PRs abiertos del repo (ninguno quedó afuera del reporte).
- **Toda** referencia a Jira encontrada se resolvió a un estado (no queda ningún ticket sin chequear).
- El reporte quedó **posteado en #team-standup**.
- El reporte termina con una lista corta de **"qué necesita un humano hoy"**.
- Si algo no se pudo traer (un ticket inaccesible, un PR sin poder determinar su estado, los tests no corrieron), **se dice explícitamente** en el reporte — no se omite en silencio.
