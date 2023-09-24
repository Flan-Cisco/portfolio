function seleccionar(elemento) {
  let btnActivo = document.getElementsByClassName("active");
  if (btnActivo.length != 0) {
    for (let btn of btnActivo) {
      btn.classList.remove("active");
    }
  }
  if (elemento < 2) {
    let boton = document.getElementById("opcion" + elemento);
    boton.classList.add("active");
  } else {
    console.log("123123");
    let boton = document.getElementById("opcion5");
    boton.classList.add("active");
  }
  console.log(elemento);
}
function changeDisplay(elemento) {
  let contenidoActivo = document.getElementsByClassName("mostrar");
  removerClase(contenidoActivo);
  let contenido;
  switch (elemento) {
    case 0:
      contenido = document.getElementById("contenedor-video");
      break;
    case 1:
      contenido = document.getElementById("contenedor-bio");
      break;
    case 2:
      contenido = document.getElementById("contenedor-pac");
      break;
    case 3:
      contenido = document.getElementById("contenedor-eyeTrack");
      break;
    case 4:
      contenido = document.getElementById("contenedor-busTrack");
      break;
    default:
      break;
  }

  contenido.classList.add("mostrar");
  contenido.classList.remove("hidden");
}

function removerClase(elemento) {
  console.log("entra a removeClass");
  for (let btn of elemento) {
    btn.classList.add("hidden");
    btn.classList.remove("show");
  }
}
