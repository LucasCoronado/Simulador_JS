function saludar() {
  const usuario = localStorage.getItem("nombreUsuario")
  
  let nombre

  if ((usuario === null) || (usuario === "")) {
    nombre = prompt("Ingrese su nombre");
    localStorage.setItem("nombreUsuario", nombre)
  }
  else {
    // alert(
    //   `Hola ${usuario} bienvenido/a a la tienda`
    // );
    let saludo = document.getElementById("saludo")
    saludo.innerText = `Hola ${usuario} bienvenido/a a la tienda`
  }


}

saludar();

class Producto {
  constructor(prenda, talle, cantidad) {
    this.prenda = prenda;
    this.talle = talle;
    this.cantidad = cantidad;
  }
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

