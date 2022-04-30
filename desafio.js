function saludar() {
  const usuario = localStorage.getItem("nombreUsuario")
  
  let nombre
  
  if ((usuario === null) || (usuario === "")) {
     Swal.fire({
      title: "Ingrese su nombre",
      input: "text",
      confirmButtonText: "Aceptar",
      
    }).then((nombre) => {
      if (nombre.isConfirmed) {
        const enJSON = JSON.stringify(nombre.value)
        localStorage.setItem("nombreUsuario", enJSON)
      }
    });

  }
  else {
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
  let suma = `El total de la compra es  \n $ ${producto1.prenda * producto1.talle * producto1.cantidad}`;
  Swal.fire(suma)
}

// Swal.fire({
//   title: "Submit your Github username",
//   input: "text",
//   confirmButtonText: "aceptar",
  
// }).then((nombre) => {
//   if (nombre.isConfirmed) {
//     Swal.fire({
//       title: `${nombre.value}'s avatar`
//     });
//   }
// });