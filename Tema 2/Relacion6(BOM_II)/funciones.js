let ventanaNueva;

//! Ejercicio 3

function ventanaConfirmacion() {
  if (confirm("¿Estás seguro de que deseas continuar?")) {
    alert("Has pulsado Aceptar");
  } else {
    alert("Has pulsado Cancelar");
  }
}

function analizaVentana() {
  ventanaNueva = window.open("", "_blank", "width=200,height=100");
  ventanaNueva.onload = function () {
    alert("La ventana se ha abierto.");
  };

  alert("Cierra la ventana y luego haz clic en el botón 'Comprobar estado'.");
}

function comprobarEstadoVentana() {
  if (ventanaNueva && !ventanaNueva.closed) {
    alert("La ventana está abierta.");
  } else {
    alert("La ventana se ha cerrado.");
  }
}

function nuevoNombreVentana() {
  ventanaNueva = window.open("", "ventanaRenombrar", "width=300,height=200");
  let nuevoNombre = prompt("Introduce un nuevo nombre para la ventana:");
  if (nuevoNombre) {
    ventanaNueva.document.title = nuevoNombre;
  }
}

function cerrarVentanaActual() {
  window.close();
}

function cerrarVentanaNueva() {
  if (ventanaNueva) {
    ventanaNueva.close();
    alert("Ventana nueva cerrada.");
  } else {
    alert("No hay ventana nueva abierta.");
  }
}

function abrirVentanaRedimensionable() {
  ventanaNueva = window.open(
    "",
    "ventanaRedimensionable",
    "width=300,height=100,resizable=yes"
  );
}

function abrirVentanaConTexto() {
  ventanaNueva = window.open("", "ventanaTexto", "width=300,height=100");
  ventanaNueva.document.write("<h1>Texto en ventana</h1>");
  window.document.write("<p>Se ha abierto una nueva ventana.</p>");
}

function moverVentana() {
  if (ventanaNueva) {
    ventanaNueva.moveBy(50, 50);
  } else {
    alert("No hay ventana nueva abierta.");
  }
}

function posicionarVentana() {
  if (ventanaNueva) {
    ventanaNueva.moveTo(100, 100);
  } else {
    alert("No hay ventana nueva abierta.");
  }
}

function desplazarScroll() {
  window.scrollBy(0, 10);
}

function desplazarScrollPos() {
  window.scrollTo(0, 100);
}


//! Ejercicio 4

function mostrarNombreHost() {
  alert("El nombre del host es: " + window.location.host);
}

function mostrarURL() {
  alert("La URL completa es: " + window.location.href);
}

function activarDireccion() {
  const direccion = prompt(
    "Introduce una dirección URL (ejemplo: https://www.ejemplo.com):"
  );
  if (direccion) {
    window.location.href = direccion;
  }
}

function mostrarProtocolo() {
  alert("El protocolo utilizado es: " + window.location.protocol);
}

function recargarPagina() {
  location.reload();
}
