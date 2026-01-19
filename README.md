# Catálogo de Cursos – Vanilla Front-End

Sitio estático tipo mini-plataforma educativa construido con **HTML5 semántico**, **CSS3 responsive (Flex/Grid)** y **JavaScript vanilla modular (ES Modules)**.

## Objetivo
Integrar fundamentos de front en un proyecto único:
- Catálogo de cursos (cards) con búsqueda y filtros (DOM)
- Página de detalle de curso (plantilla)
- Galería de recursos (miniaturas) con filtros + modal
- Formulario de inscripción con validación front-end

## Páginas
- `index.html`: home + destacados + CTA
- `cursos.html`: listado completo + filtros/búsqueda
- `curso.html`: detalle de un curso (plantilla)
- `recursos.html`: galería filtrable + modal
- `inscripcion.html`: formulario validado

## Estructura
- `/assets`: imágenes/íconos/fuentes
- `/css`: estilos por capas (base/layout/components/pages)
- `/js`: módulos por responsabilidad (data/utils/components/features)

## Ejecución
Proyecto estático (sin build).
Recomendado: VSCode + Live Server (abrir `index.html`).

## Roadmap
- [ ] Maquetado semántico de páginas + header/footer consistentes
- [ ] Tokens de diseño en `css/base/variables.css`
- [ ] Layout responsive (Grid/Flex)
- [ ] Render dinámico de cursos desde `js/data/cursos.js`
- [ ] Filtros + búsqueda por texto y categoría
- [ ] Render dinámico de recursos + filtros + modal
- [ ] Validación completa de inscripción con feedback visual
- [ ] Persistencia mínima (opcional) con localStorage: filtros/última búsqueda

## Convenciones
- HTML: estructura semántica sin estilos inline
- CSS: base → layout → components → pages
- JS: evitar variables globales, inicializar desde `js/app.js`
