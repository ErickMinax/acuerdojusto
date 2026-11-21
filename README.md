# AcuerdoJusto – Landing page

Sitio estático (HTML + CSS + JavaScript). Sin PHP, sin base de datos, sin dependencias.

## Estructura
```
acuerdojusto/
├── index.html        Página principal
├── privacidad.html   Política de privacidad (borrador)
├── _headers          Cabeceras de seguridad (Cloudflare Pages / Netlify)
├── css/styles.css    Estilos y paleta (variables :root)
├── js/main.js        Formulario (poner ENDPOINT de Formspree)
├── js/bot.js         Bot informativo (arreglo KB)
└── assets/           logo.svg, logo-icon.svg
```

## Instalar
1. Visual Studio Code: https://code.visualstudio.com
2. Extensiones: **Live Server** (Ritwick Dey) y **Prettier**.
3. Abre la carpeta (File > Open Folder), clic derecho en index.html > **Open with Live Server**.
No necesitas instalar Node.js para esta versión.

## Publicar (gratis)
Sube la carpeta a Cloudflare Pages o Netlify (arrastrar y soltar). Activa HTTPS y conecta tu dominio.

## Pendientes
Buscar y reemplazar los textos entre [corchetes] en index.html y privacidad.html.
