const pizzas = [
  {
    id: 1,
    nombre: "Pizza de Muzzarella",
    precio: 500,
    ingredientes: ["Muzzarella", "Tomate", "Aceitunas"],
    imagen: "./img/muzzarella.png",
  },

  {
    id: 2,
    nombre: "Pizza de Cebolla",
    precio: 1500,
    ingredientes: ["Muzzarella", "Tomate", "Cebolla"],
    imagen: "./img/cebolla.png",
  },

  {
    id: 3,
    nombre: "Pizza 4 Quesos",
    precio: 1380,
    ingredientes: [
      "Muzzarella",
      "Tomate",
      "Queso Azul",
      "Parmesano",
      "Roquefort",
    ],
    imagen: "./img/4quesos.png",
  },

  {
    id: 4,
    nombre: "Pizza Especial",
    precio: 1000,
    ingredientes: ["Muzzarella", "Tomate", "Rucula", "Jamón"],
    imagen: "./img/especial.png",
  },

  {
    id: 5,
    nombre: "Pizza con Anana",
    precio: 600,
    ingredientes: ["Muzzarella", "Tomate", "Anana"],
    imagen: "./img/anana.png",
  },
];

const body = document.querySelector("body");
const form = document.querySelector("form");
const list = document.querySelector(".all_pizzas");
const numPizza = document.querySelector("#pizza_number");
const selectedPizza = document.querySelector(".selected-pizza");

form.addEventListener('submit', (e) => {
  e.preventDefault();

  const pizza_number = parseInt(document.getElementById('pizza_number').value);

  if (pizza_number >= 1 && pizza_number <= pizzas.length) {
    
    let pizzaSelected = pizzas.find(pizzas => pizzas.id === pizza_number);

    list.innerHTML = `
      <div class="card">
        <img class="card-img" src="${pizzaSelected.imagen}" alt="${pizzaSelected.nombre}">
        
        <div class="card-body">
          <p class="pizza-name">${pizzaSelected.nombre}</p>
          <p>Precio: $${pizzaSelected.precio}</p>
          <p>Ingredientes: ${pizzaSelected.ingredientes}</p>
        </div>
      </div>
    `;

    localStorage.setItem("pizzaSelected", JSON.stringify(pizzaSelected));
    
  } else {
    list.innerHTML = '<p class="card-body">Por favor, ingrese un número de pizza válido.</p>';
  }
});

if(localStorage.pizzaSelected) {
  let pizzaSel = JSON.parse(localStorage.getItem("pizzaSelected"));

  list.innerHTML = `<div class="card">
  <img class="card-img" src="${pizzaSel.imagen}" alt="${pizzaSel.nombre}">
  
  <div class="card-body">
    <p class="pizza-name">${pizzaSel.nombre}</p>
    <p>Precio: $${pizzaSel.precio}</p>
    <p>Ingredientes: ${pizzaSel.ingredientes}</p>
  </div>
</div>
`;
}



