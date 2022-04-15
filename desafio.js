
let nombre = prompt("Ingrese su nombre");
saludar();

class Producto {
  constructor(prenda, talle, cantidad) {
    this.prenda = prenda;
    this.talle = talle;
    this.cantidad = cantidad;
  }
}

function saludar() {
  alert(
    `Hola ${nombre} bienvenido/a a la tienda`
  );
}

let boton = document.getElementById("button");
boton.addEventListener("click", cargarArticulo);

function cargarArticulo() {
  let prenda = parseInt(document.getElementById("prenda").value);
  let talle = parseInt(document.getElementById("talle").value);
  let cantidad = parseInt(document.getElementById("cantidad").value);
  let producto1 = new Producto(prenda, talle, cantidad);
  mostrarTotal(producto1);
}

function mostrarTotal(producto1) {
  let suma = `Total $ ${producto1.prenda * producto1.talle * producto1.cantidad}`;
  document.getElementById("resultado").value = suma;
  
}

