import { renderResources } from "./recursos-render.js";
import { setupModal } from "../components/modal.js";

const uniqueValues = (items) =>
  Array.from(new Set(items)).sort((a, b) => a.localeCompare(b));

export const setupResourceFilters = ({
  resources,
  container,
  typeSelect,
  levelSelect,
  clearButton,
  modal,
}) => {
  if (!container) return;

  const types = uniqueValues(resources.map((resource) => resource.type));
  const levels = uniqueValues(resources.map((resource) => resource.level));

  types.forEach((type) => {
    const option = document.createElement("option");
    option.value = type;
    option.textContent = type;
    typeSelect?.appendChild(option);
  });

  levels.forEach((level) => {
    const option = document.createElement("option");
    option.value = level;
    option.textContent = level;
    levelSelect?.appendChild(option);
  });

  const modalControls = setupModal(modal);
  const modalTitle = modal?.querySelector("#modal-title");
  const modalDescription = modal?.querySelector("#modal-description");
  const modalCategory = modal?.querySelector("#modal-category");
  const modalMeta = modal?.querySelector("#modal-meta");

  const render = () => {
    const typeValue = typeSelect?.value || "all";
    const levelValue = levelSelect?.value || "all";
    const filtered = resources.filter((resource) => {
      const matchesType = typeValue === "all" || resource.type === typeValue;
      const matchesLevel =
        levelValue === "all" || resource.level === levelValue;
      return matchesType && matchesLevel;
    });
    renderResources(filtered, container);

    container.querySelectorAll("[data-resource-open]").forEach((button) => {
      button.addEventListener("click", (event) => {
        const card = event.target.closest("[data-resource-id]");
        const resourceId = card?.dataset.resourceId;
        const resource = resources.find((item) => item.id === resourceId);
        if (!resource || !modalControls) return;
        if (modalTitle) modalTitle.textContent = resource.title;
        if (modalDescription) modalDescription.textContent = resource.description;
        if (modalCategory) modalCategory.textContent = resource.type;
        if (modalMeta) {
          modalMeta.innerHTML = `
            <span class="badge">${resource.level}</span>
            ${resource.tags.map((tag) => `<span class="badge">${tag}</span>`).join("")}
          `;
        }
        modalControls.open();
      });
    });
  };

  render();

  [typeSelect, levelSelect].forEach((element) => {
    element?.addEventListener("change", render);
  });

  clearButton?.addEventListener("click", () => {
    if (typeSelect) typeSelect.value = "all";
    if (levelSelect) levelSelect.value = "all";
    render();
  });
};
