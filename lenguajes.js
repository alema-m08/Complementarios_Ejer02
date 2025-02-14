fetch("lenguajes.json")
  .then((response) => response.json())
  .then((data) => {
    const lenguajesGrid = document.getElementById("lenguajesGrid");

    data.forEach((lenguaje) => {
      const item = document.createElement("div");
      item.classList.add("grid-item");
      item.innerHTML = `
        <img src="${lenguaje.imagen}" alt="${lenguaje.nombre}">
        <h3>${lenguaje.nombre}</h3>
      `;

      // Agregar el evento de clic al item
      item.addEventListener("click", () => {
        showModal(lenguaje);
      });

      // Añadir el item al grid
      lenguajesGrid.appendChild(item);
    });
  })
  .catch((error) => console.error("Error al cargar el JSON:", error));

// Mostrar el modal con la información
function showModal(lenguaje) {
  const modal = document.getElementById("modal");
  const modalTitle = document.getElementById("modalTitle");
  const modalDesc = document.getElementById("modalDesc");

  modalTitle.textContent = lenguaje.nombre;
  modalDesc.textContent = lenguaje.descripcion;

  modal.style.display = "block";
}

// Cerrar el modal
document.getElementById("closeModal").addEventListener("click", () => {
  const modal = document.getElementById("modal");
  modal.style.display = "none";
});
