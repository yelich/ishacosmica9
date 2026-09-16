# Plan: Publicar el sitio en un dominio propio

## Objetivo
Poner el sitio de Corazón Solar / Ishacósmica en vivo con el dominio propio (JudyBentolila.com u otro que elijas), verificando DNS, SSL y que todo funcione correctamente.

## Pasos del plan

1. **Confirmar el dominio objetivo**
   - Verificar si ya tenés registrado `JudyBentolila.com` o si preferís comprarlo ahora.
   - Si ya lo tenés, preparar el acceso al panel de DNS de tu registrar.

2. **Publicar el sitio por primera vez**
   - Hacer el deploy inicial en la URL de Lovable para que haya una versión live.
   - Esto es necesario antes de que cualquier dominio propio sirva contenido.

3. **Conectar el dominio propio**
   - Agregar `JudyBentolila.com` y `www.JudyBentolila.com` en la configuración de dominios del proyecto.
   - Seguir el flujo automático de Lovable para conectar un dominio existente.
   - Si el dominio está en Cloudflare o proxy similar, habilitar el modo proxy durante la configuración.

4. **Configurar DNS en el registrar**
   - Agregar los registros A y TXT que indique Lovable en tu proveedor de dominio.
   - Asegurar que no haya registros A antiguos en conflicto.
   - Esperar la propagación DNS (puede tardar hasta 72 horas, aunque suele ser minutos).

5. **Definir el dominio primario y redirecciones**
   - Elegir si la versión principal es la raíz (`JudyBentolila.com`) o `www`.
   - Configurar la otra versión para redireccionar al dominio primario.

6. **Ajustes finales antes o después de publicar**
   - Actualizar el enlace canónico del sitio a `https://JudyBentolila.com/`.
   - Generar y subir la imagen OG para compartir en WhatsApp/Instagram.
   - Reemplazar el PDF de ejemplo del cuadernillo por el definitivo.
   - Verificar que el link de Spotify apunte a tu perfil o playlist correcta.

7. **Verificación post-publicación**
   - Probar que `JudyBentolila.com` responde con HTTPS.
   - Revisar que las secciones, menú, formulario del cuadernillo, WhatsApp y Calendly funcionen.
   - Validar la imagen OG con una herramienta de preview de redes sociales.

## Decisión pendiente

- ¿Ya tenés registrado `JudyBentolila.com` o lo querés comprar ahora?
- ¿Querés que la versión principal sea `JudyBentolila.com` o `www.JudyBentolila.com`?

## Detalles técnicos

- El proyecto actualmente no está publicado y no tiene dominios conectados.
- La visibilidad efectiva del proyecto es pública, por lo que cualquier persona con el link podrá acceder una vez publicado.
- Para dominios gestionados fuera de Lovable se requieren registros A para `@` y `www` apuntando a `185.158.133.1`, más un registro TXT de verificación `_lovable`.
- Los cambios de backend (base de datos del cuadernillo) ya están deployados automáticamente.
