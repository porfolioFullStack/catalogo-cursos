export const renderResources = (resources, container) => {
  if (!container) return;
  container.innerHTML = resources
    .map((resource) => {
      const tags = resource.tags
        .map((tag) => `<span class="badge">${tag}</span>`)
        .join("");
      return `
        <article class="card resource-card" data-resource-id="${resource.id}">
          <div class="resource-card__cover">${resource.type}</div>
          <div>
            <p class="resource-card__type">${resource.type}</p>
            <h3 class="card__title">${resource.title}</h3>
            <p class="muted">${resource.description}</p>
          </div>
          <div class="badge-row">${tags}</div>
          <button class="btn btn--secondary" type="button" data-resource-open>
            Ver recurso
          </button>
        </article>
      `;
    })
    .join("");
};
