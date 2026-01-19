# js/
JavaScript modular (ES Modules) sin frameworks.

- `app.js`: entrypoint, inicializa features según la página
- `data/`: data mock (cursos y recursos)
- `utils/`: helpers reutilizables (DOM, storage, validate)
- `components/`: navbar y modal (reutilizables)
- `features/`: lógica por caso de uso
  - cursos: render + filtros/búsqueda
  - recursos: render + filtros + modal
  - inscripción: validación + feedback visual

Convención: un archivo = una responsabilidad clara.
