// Funciones

//mostramos las opciones para que ingrese el usuario atraves de un switch.
function carrito(opcion) {
    while (opcion !== 0) {
      switch (opcion) {
        case 1:
          agregarAlCarrito();
          break;
  
        case 2:
          valorTotalCarrito();
          break;
  
        case 3:
          quitarDeCarrito();
          break;
  
        default:
          alert("Ingresó un número incorrecto");
          break;
      }
      opcion = pedirOpcion();
    }
  
    terminarCompra();
    alert("Gracias por utilizar nuestros servicios.");
  }
  
  //accede a las opciones de producto y agrega los datos en 2 variables total y codigoProducto.
  function agregarAlCarrito() {
    let codigoProducto = pedirProducto();
  
    while (codigoProducto !== 0) {
      // Controlamos la operacion que elije el usuario
  
      switch (codigoProducto) {
        case 1:
          detalleProducto(codigoProducto);
          total += 1000;
          break;
  
        case 2:
          detalleProducto(codigoProducto);
          total += 2000;
          break;
  
        case 3:
          detalleProducto(codigoProducto);
          total += 3000;
          break;
  
        case 4:
          detalleProducto(codigoProducto);
          total += 4000;
          break;
  
        case 5:
          opcion = pedirOpcion();
          break;
  
        default:
          alert("Usted ingresó un valor incorrecto");
      }
      codigoProducto = pedirProducto();
    }
  }
  
  //accede a las opciones de productos y llama a la funcion totalResta a traves de un switch y agrega los importes a restar. 
  function quitarDeCarrito() {
    let codigoProducto = restarProducto();
  
    while (codigoProducto !== 0) {
      // Controlamos la operacion que elije el usuario
  
      switch (codigoProducto) {
        case 1:
          totalResta(1000);
          break;
  
        case 2:
          totalResta(2000);
          break;
  
        case 3:
          totalResta(3000);
          break;
  
        case 4:
          totalResta(4000);
          break;
  
        case 0:
          break;
  
        default:
          alert("Usted ingresó un valor incorrecto");
      }
      codigoProducto = restarProducto();
    }
  }
  
  //verifica que el importe no sea mayor que el total que se agrego en carrito.
  function totalResta(monto) {
    if (monto > total) {
      alert(
        "El importe ingresado es mayor al total, por favor ingrese un monto menor."
      );
    } else {
      total = total - monto;
      alert("El monto quedó en " + total);
    }
  }
  
  //enviamos el valor total de la compra siempre que sea mayor que 0 sino lo envia nuevamente al menu.
  function valorTotalCarrito() {
    if (total > 0) {
      alert(
        "Los productos ingresados son: " +
          codigoDeProducto +
          ", el total de su carrito es de: \n $ " +
          total
      );
    } else {
      alert("Usted no posee elementos en el carrito, intente nuevamente");
      pedirOpcion();
    }
  }
  
  //con esta condicion concatenamos el detalle del producto.
  function detalleProducto(codigoProducto) {
    if (codigoDeProducto !== "") {
      codigoDeProducto += ", ";
    }
    codigoDeProducto += codigoProducto;
  }
  
  //con esta condicion mostramos el saldo a pagar y un saludo, sino lo envia al menu.
  function terminarCompra() {
    if (total > 0) {
      alert("El saldo a pagar es de : \n $" +total);
      alert("Muchas gracias por su compra!");
      return;
     
    } else {
      alert("Usted no posee elementos en el carrito.");
    }
  }
  
  // estas funciones se utilizan para no repetir codigo -- pedirProducto -- restarProducto -- pedirOpcion 
  function pedirProducto() {
    return parseInt(
      prompt(
        "Ingrese el detalle del producto que desee: \n 1. Producto 1 $1000. \n 2. Producto 2 $2000. \n 3. Producto 3 $3000. \n 4. Producto 4 $4000. \n 0. Volver al menu anterior. "
      )
    );
  }

  function restarProducto() {
    return parseInt(
      prompt(
        "Ingrese el detalle del producto que desee eliminar del carrito: \n 1. Producto 1 $1000. \n 2. Producto 2 $2000. \n 3. Producto 3 $3000. \n 4. Producto 4 $4000. \n 0. Volver al menu anterior. "
      )
    );
  }
 
  function pedirOpcion() {
    return parseInt(
      prompt(
        "Ingrese la opción que desea: \n 1. Agregar al carrito. \n 2. Detalle total de la compra. \n 3 Eliminar del carrito. \n 0. Terminar compra  "
      )
    );
  }
  
  // Variables
  
  let codigoDeProducto = "";
  let total = 0;

  
  class Producto {
    constructor(id, nombre, precio, cantidad){
      this.id = id;
      this.nombre = nombre;
      this.precio = precio;
      this.cantidad = cantidad

    }
  }

  const productos = [
    new Producto (1, "Camiseta Oficial 2023", 23000, 12),
    new Producto (2, "Camiseta Alternativa 2023", 21000, 8),
    new Producto (3, "Camiseta Arquero 2023" , 19000, 5),
    new Producto (4, "Musculosa de entrenamiento 2023", 15000, 10),
    new Producto (5, "Buzo de concentración 2023", 20000, 7),
    new Producto (6, "Buzo de entrenamiento 2023", 18000, 6)
  ];
  

  let carritoCompras = [];
  
  // Inicio del Programa
  
  let opcion = pedirOpcion();
  carrito(opcion);
  
  // Fin del programa
  