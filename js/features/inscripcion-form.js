import { isEmail, isEmpty } from "../utils/validate.js";

const setError = (errors, field, message) => {
  errors[field] = message;
};

const clearErrors = (form) => {
  form.querySelectorAll("[data-error-for]").forEach((el) => {
    el.textContent = "";
  });
};

const showErrors = (form, errors) => {
  Object.entries(errors).forEach(([field, message]) => {
    const errorEl = form.querySelector(`[data-error-for="${field}"]`);
    if (errorEl) {
      errorEl.textContent = message;
    }
  });
};

export const setupEnrollmentForm = ({ form, courses }) => {
  if (!form) return;
  const success = document.querySelector("#form-success");
  const trackSelect = form.querySelector("#track");

  if (trackSelect && courses?.length) {
    courses.forEach((course) => {
      const option = document.createElement("option");
      option.value = course.title;
      option.textContent = course.title;
      trackSelect.appendChild(option);
    });
  }

  form.addEventListener("submit", (event) => {
    event.preventDefault();
    clearErrors(form);
    if (success) success.textContent = "";

    const data = new FormData(form);
    const errors = {};

    const fullName = data.get("fullName");
    const email = data.get("email");
    const role = data.get("role");
    const track = data.get("track");
    const terms = data.get("terms");

    if (isEmpty(fullName)) setError(errors, "fullName", "Ingresa tu nombre.");
    if (!isEmail(email)) setError(errors, "email", "Email no valido.");
    if (isEmpty(role)) setError(errors, "role", "Selecciona un rol.");
    if (isEmpty(track)) setError(errors, "track", "Elige un curso.");
    if (!terms) setError(errors, "terms", "Acepta para continuar.");

    if (Object.keys(errors).length > 0) {
      showErrors(form, errors);
      return;
    }

    form.reset();
    if (success) {
      success.textContent =
        "Listo. Te enviamos un mail con los siguientes pasos.";
    }
  });
};
