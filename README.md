# Paz~100xia - Proyecto React

## 📋 Contenido del Proyecto

Este es un proyecto completo de React + Vite + Tailwind CSS con todas las funcionalidades implementadas:

- ✅ Navegación funcional con scroll suave
- ✅ Formulario de contacto conectado a email (luzen.coach@gmail.com)
- ✅ Diseño completamente responsive (desktop y móvil)
- ✅ Botón flotante "Conversemos"
- ✅ Animaciones y transiciones
- ✅ Todas las imágenes y recursos del diseño Figma

## 📁 Estructura de Archivos Importantes

```
/
├── src/
│   ├── app/
│   │   ├── App.tsx                    # Componente principal
│   │   └── components/
│   │       ├── ui/                     # Componentes UI (botones, formularios, etc.)
│   │       └── figma/
│   │           └── ImageWithFallback.tsx
│   ├── imports/
│   │   └── Frame1.tsx                  # Diseño importado de Figma
│   └── styles/
│       ├── index.css                   # Estilos principales
│       ├── tailwind.css                # Configuración Tailwind
│       ├── theme.css                   # Variables de diseño
│       └── fonts.css                   # Fuentes personalizadas
├── package.json                        # Dependencias del proyecto
├── vite.config.ts                      # Configuración de Vite
└── postcss.config.mjs                  # Configuración PostCSS

```

## 🚀 Cómo Usar el Proyecto

### Opción A: Descargar desde Figma Make

1. En Figma Make, busca el botón de **"Download"** o **"Export"**
2. Descarga el proyecto completo como archivo ZIP
3. Extrae el contenido en tu computadora

### Opción B: Clonar archivos manualmente

Si no puedes descargar directamente, copia todos los archivos que te estoy proporcionando.

## 💻 Instalación y Ejecución Local

### Requisitos Previos

- Node.js versión 18 o superior
- npm o pnpm instalado

### Pasos de Instalación

1. **Navega a la carpeta del proyecto:**
   ```bash
   cd paz-100xia
   ```

2. **Instala las dependencias:**
   ```bash
   npm install
   ```
   
   O si usas pnpm:
   ```bash
   pnpm install
   ```

3. **Inicia el servidor de desarrollo:**
   ```bash
   npm run dev
   ```
   
   O con pnpm:
   ```bash
   pnpm dev
   ```

4. **Abre tu navegador:**
   - Ve a: `http://localhost:5173`
   - La aplicación se recargará automáticamente cuando hagas cambios

## 📦 Generar Versión de Producción

Para crear una versión optimizada lista para subir a un hosting:

```bash
npm run build
```

Esto generará una carpeta `dist/` con todos los archivos optimizados y listos para producción.

## 🌐 Opciones de Hosting (Gratis)

Puedes subir tu sitio a cualquiera de estas plataformas gratuitas:

### 1. **Vercel** (Recomendado)
- Ve a: https://vercel.com
- Conecta tu cuenta de GitHub/GitLab
- Importa el proyecto
- Deployment automático

### 2. **Netlify**
- Ve a: https://netlify.com
- Arrastra la carpeta `dist/` después de hacer `npm run build`
- O conecta con Git para deployment automático

### 3. **GitHub Pages**
- Sube el proyecto a GitHub
- Activa GitHub Pages en la configuración del repositorio
- Deployment automático

### 4. **Cloudflare Pages**
- Ve a: https://pages.cloudflare.com
- Conecta tu repositorio
- Deployment automático

## 🔧 Personalización

### Cambiar el Email de Contacto

Edita el archivo `/src/app/App.tsx` en la línea del `mailto`:

```typescript
const mailtoLink = `mailto:TU_EMAIL@ejemplo.com?subject=${subject}&body=${body}`;
```

### Cambiar Colores y Estilos

Edita `/src/styles/theme.css` para cambiar la paleta de colores global.

### Modificar Contenido

Todo el contenido está en `/src/app/App.tsx`. Busca las secciones:
- Hero Section
- Servicios Section
- Coaching Info Section
- Contact Section
- Footer

## 📱 Características Responsive

El sitio está optimizado para:
- 📱 Móviles (320px - 767px)
- 💻 Tablets (768px - 1023px)
- 🖥️ Desktop (1024px+)

## 🎨 Recursos del Diseño

Las imágenes están almacenadas usando el esquema `figma:asset/` que es específico de Figma Make. Si mueves el proyecto fuera de Figma Make, necesitarás reemplazar estas referencias con rutas de archivos normales.

## ❓ Solución de Problemas

### El proyecto no inicia
- Verifica que tienes Node.js instalado: `node --version`
- Borra `node_modules` y reinstala: `rm -rf node_modules && npm install`

### Las imágenes no cargan
- Las imágenes usan `figma:asset/` que solo funciona en Figma Make
- Para uso externo, necesitarás exportar las imágenes y usar rutas normales

### Errores de compilación
- Limpia la caché: `rm -rf node_modules/.vite`
- Reinicia el servidor de desarrollo

## 📧 Contacto

Para soporte del sitio web: luzen.coach@gmail.com

---

**¡Tu sitio web está listo para usar!** 🎉
