// Objeto com os dados da lista
const medicines = [
  {
    name: "ENALAPRIL 10MG",
    quantity: "60 COMPRIMIDOS",
    instructions: "TOMAR 01 COMPRIMIDO DE 12 EM 12 HORAS",
    images: [
      { src: "ima/manha.jpeg", alt: "manha" },
      { src: "ima/almoco.jpeg", alt: "almoco" },
      { src: "ima/noite.png", alt: "janta" },
    ],
  },
  {
    name: "PARACETAMOL 10MG",
    quantity: "10 COMPRIMIDOS",
    instructions: "TOMAR 02 COMPRIMIDO DE 8 EM 8 HORAS",
    images: [
      { src: "ima/manha.jpeg", alt: "manha" },
      { src: "ima/almoco.jpeg", alt: "almoco" },
      { src: "ima/noite.png", alt: "janta" },
    ],
  },
  {
    name: "TYLENOL 10MG",
    quantity: "1 COMPRIMIDO",
    instructions: "TOMAR 1 COMPRIMIDO",
    images: [
      { src: "ima/manha.jpeg", alt: "manha" },
      { src: "ima/almoco.jpeg", alt: "almoco" },
      { src: "ima/noite.png", alt: "janta" },
    ],
  },
  {
    name: "CIMEGRIPE 1MG",
    quantity: "2 COMPRIMIDO",
    instructions: "TOMAR 4 COMPRIMIDO",
    images: [
      { src: "ima/manha.jpeg", alt: "manha" },
      { src: "ima/almoco.jpeg", alt: "almoco" },
      { src: "ima/noite.png", alt: "janta" },
    ],
  },
];

// Função para gerar o HTML da lista
function generateMedicineList(medicines) {
  const ul = document.getElementById("medicine-list");
  medicines.forEach((medicine) => {
    const li = document.createElement("li");
    li.className = "medicine-item";

    const nameSpan = document.createElement("span");
    nameSpan.textContent = `1. ${medicine.name}--------------------------------------${medicine.quantity}.`;
    li.appendChild(nameSpan);

    const instructionsSpan = document.createElement("span");
    instructionsSpan.textContent = medicine.instructions;
    li.appendChild(instructionsSpan);

    const div = document.createElement("div");
    div.className = "image-item-list";

    medicine.images.forEach((image) => {
      const img = document.createElement("img");
      img.src = image.src;
      img.height = 55;
      img.alt = image.alt;
      div.appendChild(img);
    });
    li.appendChild(div);

    ul.appendChild(li);
  });
}

// Chamar a função para gerar a lista
generateMedicineList(medicines);

const deleteMenu = document.querySelector(".delete-menu");

deleteMenu.addEventListener("click", () => {
  const ul = document.getElementById("medicine-list");
  medicines.length = 0;
  ul.innerHTML = "";
  alert("Lista de medicamentos deletada com sucesso!");
});

function populateSelect(medicines) {
  const select = document.getElementById("medication");
  medicines.forEach((medicine) => {
    const option = document.createElement("option");
    option.value = medicine.name;
    option.textContent = medicine.name;
    select.appendChild(option);
  });
}

// Chamar a função para popular o select
populateSelect(medicines);
