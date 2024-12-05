# README - Proyecto Vax

## Descripción General

Este proyecto presenta una página web para **Vax**, una empresa dedicada a soluciones logísticas avanzadas. La página ha sido diseñada y desarrollada para reflejar profesionalismo, accesibilidad, y funcionalidad moderna, cumpliendo con estándares de diseño visual y experiencia de usuario.

---

## Tecnologías Utilizadas

### Lenguajes y Herramientas
- **HTML5:** Estructuración semántica del contenido.
- **CSS con Tailwind CSS:** Para estilos rápidos, consistentes, y altamente personalizables.
- **JavaScript (Vanilla):** Agregado de interactividad dinámica, como ventanas emergentes y despliegues de contenido.

### Configuración de Tailwind CSS
- Se configuró **Tailwind CSS** mediante `tailwind.config.js` para añadir animaciones personalizadas (fade-in) y garantizar un análisis correcto de los archivos HTML y JS.
- **Modo Watch:** Utilizado para regenerar automáticamente los estilos durante el desarrollo.

### Estructura del Proyecto
- **index.html:** Página principal con información sobre la empresa.
- **services.html:** Detalles sobre los servicios ofrecidos.
- **projects.html:** Descripción de proyectos destacados.
- **contact.html:** Formulario de contacto funcional.
- **styles/output.css:** Archivo compilado con los estilos de Tailwind.
- **JavaScript Externo:** Scripts modulares para manejar interacciones dinámicas.

---

## Scripts Implementados

### 1. **Validación de Formulario**
Se utiliza un script para validar el formulario de contacto en tiempo real:
- Validación de campos como nombre, correo y mensaje.
- Mensajes de error claros y legibles.
- Registro de la entrada del usuario como un log en la consola (modo de prueba).

### 2. **Interacción Dinámica con Botones**
- **Sección "Leer Más":**
  - Botones dinámicos que alternan entre mostrar y ocultar contenido adicional.
  - Cambio de texto entre "Leer más" y "Cerrar".
  - Uso de animaciones suaves para mejorar la experiencia.

### 3. **Hover y Escalado de Tarjetas**
- Las tarjetas de "Proyectos" y "Servicios" tienen efectos de hover que incluyen:
  - Aumento de tamaño con una sombra más prominente.
  - Transiciones fluidas usando Tailwind CSS.

### 4. **Fade-in Animado**
- Todas las secciones principales tienen una animación de aparición progresiva, configurada con una keyframe personalizada en Tailwind.

---

## Principios de Diseño Aplicados

### Diseño Visual
- **Atractivo y Consistente:** Uso de una paleta de colores oscuros con acentos en azul para transmitir profesionalismo.
- **Tipografía:** Fuente moderna y legible para encabezados y párrafos.
- **Espaciado:** Amplio espaciado para una lectura cómoda y clara.

### Usabilidad
- **Navegación Intuitiva:**
  - Navbar fija con enlaces claros y destacados.
  - Efectos visuales que indican la interacción (hover, underline).
- **Fluidez:**
  - Contenido organizado en secciones fácilmente identificables.
  - Botones que guían al usuario de manera lógica.

### Responsividad
- **Diseño Adaptativo:**
  - Utilización de Tailwind CSS para crear una experiencia consistente en dispositivos móviles, tablets y escritorio.
  - Layout fluido con rejillas y espaciados adaptables.

### Accesibilidad
- **Buenas Prácticas:**
  - Contraste adecuado entre texto y fondo.
  - Etiquetas semánticas para mejorar la navegación asistida.
  - Formularios accesibles con validación adecuada.

### Calidad del Código
- **Organización:**
  - Código HTML estructurado en secciones claras y concisas.
  - Comentarios que explican la funcionalidad de cada script.
- **Consistencia:** Uso de Tailwind para evitar estilos repetitivos y promover la reutilización.

### Creatividad
- **Interacciones Dinámicas:**
  - Ventanas emergentes con contenido adicional.
  - Tarjetas interactivas que mejoran la experiencia de exploración.
- **Animaciones:**
  - Transiciones fluidas que añaden dinamismo sin afectar la carga del sitio.

---

## Instrucciones de Uso

### Configuración
1. Asegúrate de tener **Node.js** instalado.
2. Ejecuta el siguiente comando para compilar los estilos con Tailwind:
   ```bash
   npx tailwindcss -i ./styles/styles.css -o ./styles/output.css --watch
   ```

### Estructura del Proyecto
- **Root Folder:** Contiene `index.html` y el directorio principal.
- **/pages:** Archivos HTML para las subpáginas (`services.html`, `projects.html`, `contact.html`).
- **/assets:** Imágenes y recursos utilizados.
- **/styles:** Archivo base y generado de Tailwind CSS.
- **/modules:** Scripts externos de JavaScript.

---

## Créditos
Este proyecto fue desarrollado por **Jose Manuel Martinez** como parte de una prueba técnica, siguiendo buenas prácticas de desarrollo web moderno.

