let miImage = document.querySelector('img'); //Cambiador de imagen
miImage.onclick = function () {
    let miSrc = miImage.getAttribute('src');
    if (miSrc === 'images/el-callejón.png') {
      miImage.setAttribute('src','images/servicios.png');
    } else {
      miImage.setAttribute('src', 'images/el-callejón.png');
    }
}

let miBoton = document.querySelector('button'); //toma referencia al botón y al título y los almacena en variables 
let miTitulo = document.querySelector( 'h1');

function estableceNombreUsuario() {
  let miNombre = prompt('Introduzca su nombre.');
  if(!miNombre) {
    estableceNombreUsuario();
  } else {
    localStorage.setItem('nombre', miNombre);
    miTitulo.innerHTML = 'Hay de todo por aquí, ' + miNombre;
  }
}

if (!localStorage.getItem('nombre')) {
    estableceNombreUsuario();
}
else {
    let nombreAlmacenado = localStorage.getItem('nombre');
    miTitulo.textContent = 'Hay de todo por aquí,' + nombreAlmacenado;
}

miBoton.onclick = function() {
    estableceNombreUsuario();
}