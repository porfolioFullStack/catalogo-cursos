import { cursos } from "./data/cursos.js";
import { recursos } from "./data/recursos.js";
import { qs } from "./utils/dom.js";
import { renderCourses } from "./features/cursos-render.js";
import { setupCourseFilters } from "./features/cursos-filter.js";
import { setupResourceFilters } from "./features/recursos-filter.js";
import { setupEnrollmentForm } from "./features/inscripcion-form.js";

const initHome = () => {
  const featuredContainer = qs("#featured-courses");
  const courseCount = qs("#course-count");
  if (featuredContainer) {
    const featured = cursos.filter((course) => course.featured);
    renderCourses(featured, featuredContainer);
  }
  if (courseCount) {
    courseCount.textContent = cursos.length.toString();
  }
};

const initCoursesPage = () => {
  setupCourseFilters({
    courses: cursos,
    container: qs("#courses-grid"),
    countEl: qs("#courses-total"),
    searchInput: qs("#course-search"),
    categorySelect: qs("#course-category"),
    levelSelect: qs("#course-level"),
    clearButton: qs("#courses-clear"),
  });
};

const initResourcesPage = () => {
  setupResourceFilters({
    resources: recursos,
    container: qs("#resources-grid"),
    typeSelect: qs("#resource-type"),
    levelSelect: qs("#resource-level"),
    clearButton: qs("#resources-clear"),
    modal: qs("#resource-modal"),
  });
};

const initEnrollmentPage = () => {
  setupEnrollmentForm({ form: qs("#enrollment-form"), courses: cursos });
};

initHome();
initCoursesPage();
initResourcesPage();
initEnrollmentPage();
