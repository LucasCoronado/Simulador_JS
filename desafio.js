  
class Producto {
  constructor(articulo, talle, precio) {
    this.articulo = articulo;
    this.talle = talle;
    this.precio = precio;
  }
  calcularIva() {
    let precioFinal = this.precio * 1.21;
    return precioFinal;
  }
}

let precio 

let articulo = prompt(
  "Elegi una prenda: \n  Remera   \n  Pantalon   \n  Campera "
);

if ((articulo === "Remera") || (articulo === "remera")) {
    precio = 600
    alert("El valor de la remera es $600"); 
} 
  else if ((articulo === "Pantalon") || (articulo === "pantalon")){
    precio = 550
    alert("El valor del pantalon es $550");  
}
  else if ((articulo === "Campera") || (articulo === "campera")){
    precio = 350
    alert("El valor de la campera es $350");
}
else {
  alert("El producto no es valido");
  window.location.reload();
}

const talle = prompt("Seleccione el talle: \n S  \n M  \n L  \n XL");

console.log(articulo);

const productoComprado = new Producto(articulo, talle, precio);

alert(`Gracias por su compra, usted adquirio un/a  ${
  productoComprado.articulo
} en talle ${productoComprado.talle}, el precio final es de 
${productoComprado.calcularIva()}`);
