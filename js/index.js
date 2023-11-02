// Funciones

function arregloDeProductos(accion) {
  let listaProductos =
    "Ingrese el código del producto que desee " +
    accion +
    " o ingrese 'salir':\n";
  for (elemento of productos) {
    listaProductos += `${elemento.id}. ${elemento.nombre} - Precio: $${elemento.precio}\n`;
  }
  return listaProductos;
}

function agregarProductosAlCarrito(opcion) {
  while (opcion.toLowerCase() !== "salir") {
    const productoIndex = parseInt(opcion);

    if (
      isNaN(productoIndex) ||
      productoIndex < 0 ||
      productoIndex >= productos.length
    ) {
      alert("Opción incorrecta. Ingrese un número válido.");
    } else {
      const producto = productos[productoIndex];
      const cantidadCompra = parseInt(
        prompt(`Ingrese la cantidad que desea agregar de "${producto.nombre}"`)
      );

      if (isNaN(cantidadCompra) || cantidadCompra <= 0) {
        alert("Ingrese una cantidad válida mayor a 0.");
      } else if (cantidadCompra > producto.cantidad) {
        alert(
          `No hay suficiente stock. Disponemos de ${producto.cantidad} unidades de "${producto.nombre}".`
        );
      } else {
        for (let i = 0; i < cantidadCompra; i++) {
          carrito.push(producto);
          producto.cantidad--;
        }
      }
    }

    opcion = prompt(arregloDeProductos("agregar"));
  }
}

function quitarDelCarrito(opcion, carrito) {
  // Agregar el argumento carrito
  while (opcion.toLowerCase() !== "salir") {
    productosDelCarrito(carrito);
    if (opcion >= 0 && opcion < carrito.length) {
      const productoARetornar = carrito.splice(opcion, 1)[0];
      productos[productoARetornar.id].cantidad++; // Debe ser "cantidad" en lugar de "stock"
    } else {
      alert("Código incorrecto, inténtelo nuevamente");
    }

    opcion = prompt(
      "Ingrese el número del producto que desea quitar del carrito o ingrese salir:\n" +
        productosDelCarrito(carrito)
    ); // Aquí también debes usar "carrito" en lugar de "carritoDeCompras"
  }
}

function productosDelCarrito(arreglo) {
  let mostrarCarrito = arreglo.map(
    (el, index) => index + ". " + el.nombre + " -- $" + el.precio
  );
  return mostrarCarrito.join("\n");
}

function resumenCarrito(array) {
  let resumen = "";
  for (let index = 0; index < array.length; index++) {
    const producto = array[index];
    const { nombre, precio } = producto;
    const numeroItem = index + 1;
    resumen += `${numeroItem}. ${nombre} -- $${precio}\n`;
  }
  return resumen;
}

function terminarCompra(carrito) {
  // Función anónima para calcular el total a pagar
  const calcularTotal = () => {
    return carrito.reduce((acc, producto) => acc + producto.precio, 0);
  };

  // Llama a la función calcularTotal y retorna el total
  return calcularTotal();
}

// Variables


class Producto {
  constructor(id, nombre, precio, cantidad) {
    this.id = id;
    this.nombre = nombre;
    this.precio = precio;
    this.cantidad = cantidad;
  }
}

const productos = [
  new Producto(0, "Camiseta Oficial 2023", 23000, 12),
  new Producto(1, "Camiseta Alternativa 2023", 21000, 8),
  new Producto(2, "Camiseta Arquero 2023", 19000, 5),
  new Producto(3, "Musculosa de entrenamiento 2023", 15000, 10),
  new Producto(4, "Buzo de concentración 2023", 20000, 7),
  new Producto(5, "Buzo de entrenamiento 2023", 18000, 6),
];

let carrito = [];

// Inicio del Programa

let opcion = parseInt(
  prompt(
    "Ingrese la opción que desea:\n1. Agregar al carrito\n2. Detalle total de la compra\n3. Eliminar del carrito\n0. Terminar compra"
  )
);

while (opcion !== 0) {
  switch (opcion) {
    case 1:
      let agregarCarrito = prompt(arregloDeProductos("agregar"));
      agregarProductosAlCarrito(agregarCarrito);
      break;

    case 2:
      alert(resumenCarrito(carrito));
      break;

    case 3:
      let eliminarDeCarrito = prompt(
        "Ingrese el número del producto que desea quitar del carrito:\n" +
          productosDelCarrito(carrito)
      );
      quitarDelCarrito(eliminarDeCarrito, carrito);
      break;

    default:
      alert("Ingresó un número incorrecto");
      break;
  }

  opcion = parseInt(
    prompt(
      "Ingrese la opción que desea:\n 1. Agregar al carrito\n 2. Detalle total de la compra\n 3. Eliminar del carrito\n 0. Terminar compra"
    )
  );
}
// Llama a la función terminarCompra para calcular el total a pagar
const totalAPagar = terminarCompra(carrito);

// Muestra el resumen de la compra y el total a pagar
alert(`En tu carrito contienes los siguientes items:\n${resumenCarrito(carrito)}`);
alert(`Total a pagar: $${totalAPagar}`);
alert("Gracias por utilizar nuestros servicios.");

// Fin del programa
