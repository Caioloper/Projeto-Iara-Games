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
