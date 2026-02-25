# Lista Completa de Archivos del Proyecto

## 📂 Archivos Principales

### 1. Configuración del Proyecto

- **package.json** - Todas las dependencias y scripts
- **vite.config.ts** - Configuración del bundler Vite
- **postcss.config.mjs** - Configuración de PostCSS para Tailwind

### 2. Código Fuente Principal

- **/src/app/App.tsx** - ⭐ ARCHIVO PRINCIPAL - Toda la aplicación web

### 3. Componentes de Interfaz (UI)

Todos en `/src/app/components/ui/`:

- accordion.tsx
- alert-dialog.tsx
- alert.tsx
- aspect-ratio.tsx
- avatar.tsx
- badge.tsx
- breadcrumb.tsx
- button.tsx
- calendar.tsx
- card.tsx
- carousel.tsx
- chart.tsx
- checkbox.tsx
- collapsible.tsx
- command.tsx
- context-menu.tsx
- dialog.tsx
- drawer.tsx
- dropdown-menu.tsx
- form.tsx
- hover-card.tsx
- input-otp.tsx
- input.tsx
- label.tsx
- menubar.tsx
- navigation-menu.tsx
- pagination.tsx
- popover.tsx
- progress.tsx
- radio-group.tsx
- resizable.tsx
- scroll-area.tsx
- select.tsx
- separator.tsx
- sheet.tsx
- sidebar.tsx
- skeleton.tsx
- slider.tsx
- **sonner.tsx** - (Usado para notificaciones del formulario)
- switch.tsx
- table.tsx
- tabs.tsx
- textarea.tsx
- toggle-group.tsx
- toggle.tsx
- tooltip.tsx
- use-mobile.ts
- utils.ts

### 4. Componentes Figma

- **/src/app/components/figma/ImageWithFallback.tsx** - Componente para imágenes

### 5. Diseño Importado

- **/src/imports/Frame1.tsx** - Diseño original de Figma (referencia)

### 6. Estilos CSS

- **/src/styles/index.css** - CSS principal
- **/src/styles/tailwind.css** - Configuración Tailwind v4
- **/src/styles/theme.css** - Variables de tema y colores
- **/src/styles/fonts.css** - Fuentes personalizadas

## 📦 Recursos (Assets)

Las imágenes están referenciadas como `figma:asset/[hash].png`:

1. **imgImageSunsetClouds** - a3f94d76cfcf5e2782e381c52ef2e6d8b48086dc.png
2. **imgImageMandalaLogo** - cf90b2f38908ad1b5f862d2b44c565fbba8b9ad0.png
3. **imgDiamante1** - 3a2e609fe60cf2e2448ea829f48d156a96788769.png
4. **imgImageCloud** - c37ee1ea92828c6b2902260de08d02278b1d1620.png
5. **imgImagePlane** - 7167be9c3072ecab0ccdb856a187d5c14c2dd81c.png
6. **imgImage1** - 8b0e06b67e06b97f5a1f266cbf165eb2767e5b2f.png

## 🎯 Archivos Críticos que NO Debes Modificar

- **/src/app/components/figma/ImageWithFallback.tsx** - Protegido
- **/pnpm-lock.yaml** - Protegido

## 📝 Archivos que Puedes Editar

### Para Cambiar Contenido:
- **/src/app/App.tsx** - TODO el contenido de la web

### Para Cambiar Estilos:
- **/src/styles/theme.css** - Colores y variables
- **/src/styles/fonts.css** - Fuentes

### Para Cambiar Configuración:
- **package.json** - Dependencias
- **vite.config.ts** - Configuración de build

## 🔍 Cómo Encontrar Cada Archivo

Usa estos comandos en la terminal dentro del proyecto:

```bash
# Ver todos los archivos
ls -R

# Ver solo archivos .tsx
find . -name "*.tsx"

# Ver solo archivos .css
find . -name "*.css"

# Ver estructura del proyecto
tree -L 3
```

## 📥 Descargar Archivos Individuales

Si necesitas algún archivo específico, aquí está su ruta completa:

```
/INSTRUCCIONES.md                                    ← Este archivo de instrucciones
/LISTA_DE_ARCHIVOS.md                               ← Esta lista
/package.json                                        ← Dependencias
/vite.config.ts                                      ← Config Vite
/postcss.config.mjs                                  ← Config PostCSS
/src/app/App.tsx                                     ← ⭐ APLICACIÓN PRINCIPAL
/src/app/components/ui/sonner.tsx                    ← Notificaciones
/src/app/components/figma/ImageWithFallback.tsx     ← Imágenes
/src/imports/Frame1.tsx                              ← Diseño Figma original
/src/styles/index.css                                ← CSS principal
/src/styles/tailwind.css                             ← Tailwind
/src/styles/theme.css                                ← Tema
/src/styles/fonts.css                                ← Fuentes
```

## 💾 Archivos Más Importantes (Top 5)

1. **App.tsx** - Todo el código de tu sitio web
2. **package.json** - Todas las librerías necesarias
3. **index.css** - Estilos base
4. **vite.config.ts** - Configuración para compilar
5. **theme.css** - Colores y variables de diseño

---

**Nota:** Todos estos archivos ya están en tu proyecto de Figma Make. Para descargarlos, usa la función de export/download del editor.
