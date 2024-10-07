function abreVentana(numVentanas, wid, hgh, url) {
  let ancho = window.innerWidth;
  for (let i = 0; i < numVentanas; i++) {
    ventana = window.open(
      url,
      "Ventana " + i,
      "width = " + wid + ", height = " + hgh + ", top = 0, left = " + ancho
    );
    ventana.document.write(
      "<button onclick = 'window.close()'>Cerrar Ventana</button>"
    );
  }
}

function abreVentana2(numVentanas, wid, hgh, url){
  let ancho = window.innerWidth;
  for (let i = 0; i < numVentanas; i++) {
    ventana = window.open(
      url,
      "Ventana " + i,
      "width = " + wid + ", height = " + hgh + ", top = 0, left = " + ancho
    );
  }
}