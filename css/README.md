# css/
Arquitectura CSS por capas para mantener orden y escalabilidad.

- `base/`: reset + tokens (variables) + estilos globales
- `layout/`: estructura general (grid, header, footer, breakpoints)
- `components/`: piezas reutilizables (cards, botones, modal, forms, badges, searchbar)
- `pages/`: estilos específicos por página
- `main.css`: punto de entrada (orden de carga)

Orden recomendado: base → layout → components → pages.
