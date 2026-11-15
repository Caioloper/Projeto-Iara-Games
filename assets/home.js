document.querySelectorAll("[data-filter-group]").forEach((group) => {
  group.addEventListener("click", (event) => {
    const selectedChip = event.target.closest("button[aria-pressed]");

    if (!selectedChip || !group.contains(selectedChip)) {
      return;
    }

    // Atualiza o estado acessível do filtro sem simular uma filtragem de catálogo.
    group.querySelectorAll("button[aria-pressed]").forEach((chip) => {
      const isSelected = chip === selectedChip;
      chip.setAttribute("aria-pressed", String(isSelected));
      chip.classList.toggle("is-selected", isSelected);
    });
  });
});

const hero = document.querySelector(".hero[data-theme]");
const themeToggle = hero?.querySelector(".hero-theme-toggle");

if (hero && themeToggle) {
  const themeLabel = themeToggle.querySelector("[data-theme-label]");
  const themeIcon = themeToggle.querySelector("i");

  themeToggle.addEventListener("click", () => {
    const isNight = hero.dataset.theme !== "night";
    hero.dataset.theme = isNight ? "night" : "dawn";
    themeToggle.setAttribute("aria-pressed", String(isNight));
    themeToggle.setAttribute(
      "aria-label",
      isNight ? "Alternar para o amanhecer" : "Alternar para o anoitecer"
    );

    if (themeLabel) {
      themeLabel.textContent = isNight ? "Ver amanhecer" : "Ver anoitecer";
    }

    if (themeIcon) {
      themeIcon.classList.toggle("bi-moon", !isNight);
      themeIcon.classList.toggle("bi-sun", isNight);
    }
  });
}
