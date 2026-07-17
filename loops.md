# Loops

## 1. Agentic loop vs. Orchestration loop

El **agentic loop** es el ciclo interno del modelo (pensar → herramienta → observar, repetido hasta terminar una tarea), mientras que el **orchestration loop** es el ciclo externo que yo diseño para decidir cuándo y con qué contexto se dispara ese agentic loop.

## 2. Triggers

| Trigger | Cuándo dispara | Ejemplo | ¿Lo usa nuestro "night shift"? |
|---|---|---|---|
| Manual | Cuando una persona lo ejecuta a demanda | El usuario corre `/loop` o pide una tarea puntual en el chat | No |
| Reloj (cron) | En un horario o fecha fija, sin intervención humana | Un cron `0 3 * * *` que corre todas las noches a las 3am | Sí |
| Intervalo | Cada N minutos/horas de forma recurrente, sin fecha fija | Un chequeo cada 30 minutos con `ScheduleWakeup` | No |
| Evento | Cuando ocurre algo externo (webhook, notificación) | Un push a un PR dispara CI y notifica a la sesión | No |

Un **closed loop** le agrega al **open loop** la capacidad de observar el resultado de su propia acción y ajustarse en base a eso, en vez de ejecutar una vez y confiar en que salió bien.
