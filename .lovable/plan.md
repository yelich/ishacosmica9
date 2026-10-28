# Plan: Que judybentolila.com abra tu página de inicio (sin /lander)

## Qué encontré
- Tu página de inicio **ya está en la raíz "/"**; en el sitio no existe ninguna página "/lander", así que no hay que cambiar nada en el diseño ni en las páginas.
- "/lander" es la página de aviso que muestran los registradores (GoDaddy, etc.) cuando un dominio **no apunta a ningún sitio**.
- Revisé judybentolila.com: hoy **no tiene servidores de nombres respondiendo**, todavía **no está conectado a este proyecto**, y el sitio **aún no está publicado**.

## Pasos
1. **Revisar el dominio en tu registrador**: confirmar que esté activo/renovado y desactivar la página de estacionamiento o el "reenvío" (forwarding) que lleva a /lander.
2. **Publicar el sitio** en Lovable para que haya una versión en vivo.
3. **Conectar judybentolila.com** al proyecto desde la tarjeta de conexión de dominio (te la muestro en el chat) y cargar en el registrador los registros que indique.
4. **Elegir la versión principal** (judybentolila.com o www) para que la otra redirija a ella.
5. **Verificar** que https://judybentolila.com/ abra directamente la página de inicio, con candado (https).

## Detalle técnico
- Sin cambios de código: `src/routes/index.tsx` ya responde en `/`.
- El paso 1 depende de tu cuenta del registrador; yo no puedo entrar ahí.
