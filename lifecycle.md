# Lifecycle Día / Noche

| IN THE LOOP — de día, mirando, alto juicio | ON THE LOOP — fuera de hora, disparado, mecánico |
|---|---|
| Vos presente, decidiendo en el momento. | El loop corre solo; vos revisás el resultado después. |
| **Diseñar** el goal y el scope. | **Reportes** recurrentes ya compuestos. |
| **Prompear** y ajustar las instrucciones. | **Cruce de tickets** (PR ↔ Jira) resuelto. |
| **Revisar** lo que trajo, cazar lo dudoso. | **Tests** corridos una vez, resultado listo. |
| **Decidir y aprobar** antes de que salga. | **Borradores** esperando tu OK. |

## Por rol

| Rol | Qué corre SU loop (ON) | Qué se encuentra esperándolo (IN) |
|---|---|---|
| **Dev** | Cada mañana junta PRs abiertos, corre la suite una vez y arma el resumen. | Abre el día con la lista de qué mergear y qué está roto — decide, no recolecta. |
| **QA** | De noche cruza tickets de Jira contra sus PRs y marca lo no verificado. | Llega a una tabla de cobertura lista para revisar — enfoca el juicio donde falla. |
| **PM** | Al cierre agrupa el estado del sprint y redacta el update de stakeholders. | Encuentra un borrador escaneable — lo edita y aprueba, no lo escribe de cero. |

## Receta: armá tu propio loop

1. **Escribí el goal** — scope, entregable y qué significa "done" (incluí "si algo falla, decilo").
2. **Dry run en background** — corralo una vez sin actuar; guardá la salida en un archivo y revisala.
3. **Agregá verify o un gate** — si el loop *actúa* sobre algo (postea, mergea, escribe), verificá los datos y/o pedí aprobación humana antes.
4. **Agendalo** — cron/trigger recurrente; recordá que un gate bloqueante no vive en una corrida desatendida (usá gate asíncrono).

> ⏱️ Costo: cada corrida gasta tokens y llamadas reales — agendá solo lo que vas a leer, y acotá el fan-out a lo que el goal necesita.
