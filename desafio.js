  
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

const articulo = prompt(
  "Elegi una prenda: \n  Remera $600  \n  Pantalon $550  \n  Campera $350"
);

const talle = prompt("Seleccione el talle: \n S  \n M  \n L  \n XL");

const precio = parseInt(prompt("Ingrese el precio del producto elegido"));

const productoComprado = new Producto(articulo, talle, precio);

alert(`Gracias por su compra, usted adquirio un/a  ${
  productoComprado.articulo
} en talle ${productoComprado.talle}, el precio final es de 
${productoComprado.calcularIva()}`);
