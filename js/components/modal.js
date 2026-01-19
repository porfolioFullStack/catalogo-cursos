export const setupModal = (modal) => {
  if (!modal) return;
  const closeButtons = modal.querySelectorAll("[data-modal-close]");

  const close = () => {
    modal.classList.remove("is-open");
    modal.setAttribute("aria-hidden", "true");
  };

  const open = () => {
    modal.classList.add("is-open");
    modal.setAttribute("aria-hidden", "false");
  };

  closeButtons.forEach((button) => {
    button.addEventListener("click", close);
  });

  return { open, close };
};
