import { storage } from "../utils/storage.js";
import { renderCourses } from "./cursos-render.js";

const uniqueValues = (items) =>
  Array.from(new Set(items)).sort((a, b) => a.localeCompare(b));

const applyFilters = (courses, { search, category, level }) => {
  const normalizedSearch = search.toLowerCase().trim();
  return courses.filter((course) => {
    const matchesSearch =
      !normalizedSearch ||
      `${course.title} ${course.description}`
        .toLowerCase()
        .includes(normalizedSearch);
    const matchesCategory = category === "all" || course.category === category;
    const matchesLevel = level === "all" || course.level === level;
    return matchesSearch && matchesCategory && matchesLevel;
  });
};

export const setupCourseFilters = ({
  courses,
  container,
  countEl,
  searchInput,
  categorySelect,
  levelSelect,
  clearButton,
}) => {
  if (!container) return;

  const categories = uniqueValues(courses.map((course) => course.category));
  const levels = uniqueValues(courses.map((course) => course.level));

  categories.forEach((category) => {
    const option = document.createElement("option");
    option.value = category;
    option.textContent = category;
    categorySelect?.appendChild(option);
  });

  levels.forEach((level) => {
    const option = document.createElement("option");
    option.value = level;
    option.textContent = level;
    levelSelect?.appendChild(option);
  });

  const storedSearch = storage.get("courses-search", "");
  if (searchInput && storedSearch) {
    searchInput.value = storedSearch;
  }

  const render = () => {
    const filtered = applyFilters(courses, {
      search: searchInput?.value || "",
      category: categorySelect?.value || "all",
      level: levelSelect?.value || "all",
    });
    renderCourses(filtered, container);
    if (countEl) {
      countEl.textContent = `${filtered.length} cursos`;
    }
    storage.set("courses-search", searchInput?.value || "");
  };

  render();

  [searchInput, categorySelect, levelSelect].forEach((element) => {
    element?.addEventListener("input", render);
    element?.addEventListener("change", render);
  });

  clearButton?.addEventListener("click", () => {
    if (searchInput) searchInput.value = "";
    if (categorySelect) categorySelect.value = "all";
    if (levelSelect) levelSelect.value = "all";
    render();
  });
};
