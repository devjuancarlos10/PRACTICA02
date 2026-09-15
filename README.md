# Práctica Calificada 2 - Desarrollo de Aplicaciones Web

**Institución:** Universidad Nacional del Centro del Perú  
**Facultad:** Facultad de Ingeniería de Sistemas  
**Curso:** Desarrollo de Aplicaciones Web  
**Semestre:** IX  
**Docente:** Dr. Jaime Suasnábar Terrel  

---

## 👥 Integrantes del Equipo

| N° | Apellidos y Nombres | Rol / Rama Asignada | Página Asignada |
|---|---|---|---|
| 1 | [Apellido1 - Apellido2] | Líder / `chahuayo-martinez` | `index.html` |
| 2 | [Apellido3 - Apellido4] | Desarrollador / `vega-sanabria` | `page1.html` |
| 3 | [Apellido5 - Apellido6] | Desarrollador / `antezana-villegas` | `page3.html` |
| 4 | [Apellido7 - Apellido8] | Desarrollador / `huaricallo-jaime` | `page2.html`|

---

## 📋 Backlog del Proyecto

| ID | Historia de Usuario | Responsable | Estimación | Estado |
|---|---|---|---|---|
| **US-01** | **Configuración del Repositorio y Entorno:** Como equipo de desarrollo, deseamos inicializar el repositorio Git con la estructura base (`css/`, `js/`, `img/`) y crear las 4 ramas requeridas para trabajar de forma distribuida. | Líder | 10 min | Completado |
| **US-02** | **Menú Interactivo con Animación 3D (`index.html`):** Como usuario, deseo visualizar una página principal con 3 tarjetas centradas que roten 180° en ambos ejes (horizontal y vertical) para navegar a `page1.html`, `page2.html` y `page3.html`. | Integrante 1 | 20 min | Completado |
| **US-03** | **Listas de Mensajería Inbox Adaptativas (`page1.html`):** Como usuario, deseo comparar dos interfaces de correo (claro/oscuro) distribuidas en un grid de 2 columnas con breakpoints responsivos estrictos (<700px, 701-1399px, >1400px). | Integrante 2 | 25 min | Completado |
| **US-04** | **Catálogos de Playas y Clima con Flexbox (`page2.html`):** Como usuario, deseo visualizar 10 cards de playas peruanas (gap 10px, 200x120px) y 10 cards climáticas (gap 5px, 250x200px) con efectos hover en botones de acción. | Integrante 3 | 25 min | Completado |
| **US-05** | **Tienda E-commerce de Plantas (`page3.html`):** Como comprador, deseo navegar un catálogo de plantas responsivo con flexbox (<480px, <900px, <1200px, >1200px), banner promocional y hover con incremento de opacidad (+15%). | Integrante 3 | 30 min | Completado |
| **US-06** | **Integración y Despliegue:** Como líder técnico, deseo realizar el merge de todas las ramas de trabajo hacia la rama principal para validar la navegación cruzada y entregar el enlace definitivo. | Líder | 10 min | Completado |

---

## 🖥️ Funcionalidades por Página Web

### 1. `index.html` (Página Principal)
* **Contenedor Principal:** Maquetación centrada con Tailwind CSS con tipografía adaptable y diseño minimalista.
* **3 Cards de Navegación:** Identificadas como `page1`, `page2` y `page3`, cada una vinculando a su respectiva página.
* **Animación 3D Simultánea:** Implementación de perspectiva (`perspective: 1000px`) y transformación combinada de `rotateX(180deg) rotateY(180deg)` con `backface-visibility: hidden` para un giro limpio sobre sus ejes horizontal y vertical al pasar el cursor (hover).

### 2. `page1.html` (Bandeja Inbox - Lista A y B)
* **Grid 2x1 Responsivo:** Estructura dividida en dos columnas principales.
* **Reglas de Pantalla Personalizadas:**
  * `< 700px`: Las listas ocupan el 100% de la columna.
  * `701px - 1399px`: Las listas ocupan el 50% de la columna.
  * `> 1400px`: Las listas ocupan el 60% de la columna.
* **Lista A:** Diseño en tema oscuro con barra superior cian (`#1EB8D0`), iconos SVG y avatares circulares.
* **Lista B:** Tema oscuro con cabecera fucsia (`#E91E63`), timestamps laterales alineados a la derecha y marcadores de favoritos (estrellas).

### 3. `page2.html` (Playas y Ciudades del Perú)
* **Grid General:** División en dos paneles independientes para turismo y meteorología.
* **Panel Playas (Columna A):**
  * Disposición mediante Flexbox con separación de `10px` entre tarjetas.
  * 10 cards con imágenes normalizadas a dimensiones de 200px x 120px.
  * Botones interactivos `SHARE` y `EXPLORE` con transición suave hacia gris claro en el estado hover.
* **Panel Ciudades / Clima (Columna B):**
  * Disposición en Flexbox con `gap: 5px`.
  * 10 cards con dimensiones fijas de 250px x 200px.
  * Indicadores visuales de temperatura, viento, humedad y alerta meteorológica.
  * Botón `FULL REPORT` con efecto hover hacia gris claro.

### 4. `page3.html` (Tienda de Plantas)
* **Header Promocional:** Franja superior en verde oliva (`-15% en tu primera compra Registrarse`) y menú de navegación oscuro con tipografía serif.
* **Catálogo "Recién llegados":** Distribución de productos (Ficus lyrata, Cactus, etc.) con tarjetas individuales y botón de compra.
* **Efecto de Opacidad Dinámico:** Las imágenes inician con opacidad base (85%) y aumentan un 15% (100%) al posar el cursor sobre ellas (`opacity-85 hover:opacity-100 transition-opacity`).
* **Media Queries Responsivas (Flexbox):**
  * Pantallas pequeñas: `< 480px` (1 columna / 100%).
  * Pantallas medianas: `< 900px` (2 columnas / 50%).
  * Pantallas grandes: `< 1200px` (3 columnas / 33.33%).
  * Pantallas extra grandes: `> 1200px` (4 columnas / 25%).
* **Pie de Página Completo:** Enlaces útiles, horarios de atención, contacto comercial y métodos de pago.

---

## 🛠️ Tecnologías Empleadas

* **HTML5:** Estructura semántica del documento.
* **Tailwind CSS (CDN):** Estilos atómicos, utilidades de espaciado, colores y flexbox/grid.
* **CSS3 Avanzado:** Módulo 3D (`transform-style: preserve-3d`, `perspective`, `rotateX/Y`), animaciones de transición y media queries manuales.
* **Git & GitHub:** Control de versiones, ramas por integrante y flujo de integración vía *merge*.