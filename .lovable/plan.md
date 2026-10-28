# Plan: Que el sitio abra en la dirección principal (sin /lander)

## Qué encontré
- En el proyecto **no existe ninguna página "/lander"**. La página de inicio ya está en la raíz "/".
- "/lander" es la dirección típica de las **páginas de estacionamiento de dominio** (por ejemplo GoDaddy u otros registradores). Si al entrar a tu dominio te lleva a `/lander`, significa que el dominio **todavía no apunta a tu sitio**, sino a la página de aviso del registrador.
- Además, la copia en GitHub Pages se publica bajo `/ishacosmica9/`, que es otra subcarpeta distinta.

## Pasos
1. **Confirmar dónde ves el /lander** (tu dominio propio, GitHub Pages o la dirección de Lovable).
2. **Publicar el sitio en Lovable** para que exista una versión en vivo en la raíz.
3. **Conectar tu dominio** a Lovable y, en el panel del registrador, desactivar la página de estacionamiento / reenvío y reemplazar los registros DNS por los que indique Lovable.
4. **Si usás GitHub Pages con dominio propio**: quitar la subcarpeta `/ishacosmica9/` para que el sitio quede en la raíz.
5. **Verificar** que `https://tudominio.com/` abra directamente la página de inicio.

## Detalle técnico
- Paso 4: cambiar `base` en `vite.config.ts` a `/` cuando el deploy de Pages use dominio propio (archivo `CNAME` en `public/`).
- No hace falta tocar las rutas: `src/routes/index.tsx` ya es `/`.
