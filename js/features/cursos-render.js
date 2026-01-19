export const renderCourses = (courses, container) => {
  if (!container) return;
  container.innerHTML = courses
    .map((course) => {
      return `
        <article class="card" data-course-id="${course.id}">
          <div class="card__media" role="img" aria-label="${course.title}">
            ${course.category}
          </div>
          <div>
            <p class="eyebrow">${course.category}</p>
            <h3 class="card__title">${course.title}</h3>
            <p class="muted">${course.description}</p>
          </div>
          <div class="card__meta">
            <span>${course.level}</span>
            <span>${course.duration}</span>
            <span>${course.mode}</span>
          </div>
          <div class="card__actions">
            <div class="badge-row">
              <span class="badge">${course.level}</span>
            </div>
            <a class="btn btn--ghost" href="curso.html">Ver detalle</a>
          </div>
        </article>
      `;
    })
    .join("");
};
