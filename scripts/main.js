let miImage = document.querySelector('img'); //Cambiador de imagen
miImage.onclick = function () { //Manejador de evento onclick y función anónima
    let miSrc = miImage.getAttribute('src'); //Recuperación del valor del atributo src
    if (miSrc === 'images/el-callejón.png') { //condicional para comprobar si el valor src es igual a la ruta de la imagen original
      miImage.setAttribute('src','images/servicios.png'); //Si es igual, el código cambia el valor de src a la ruta de la segunda imagen, cargando la otra imagen en el elemento img
    } else {
      miImage.setAttribute('src', 'images/el-callejón.png'); //Si no es igual, se cambiará el valor de src nuevamente a la ruta de la imagen original
    }
}

let miBoton = document.querySelector('button'); 
let miTitulo = document.querySelector( 'h1'); //Toma de referencia al botón y al título y los almacena en variables 

function estableceNombreUsuario() {
  let miNombre = prompt('Introduzca su nombre.'); //prompt pide al usuario un dato, y almacena este dato en una variable cuando el botón Aceptar del cuadro de diálogo es presionado.
  if(!miNombre) { //Si miNombre no tiene ningún valor
    estableceNombreUsuario(); //Se ejecuta esta función desde el principio
  } else {
    localStorage.setItem('nombre', miNombre); //API localstorage, permite almacenar datos en el navegador y recuperarlos luego. setItem() crea y almacena un dato en el elemento llamado 'nombre', y coloca este valor en la variable miNombre que contiene el nombre que el usuario ingresó
    miTitulo.innerHTML = 'Hay de todo por aquí, ' + miNombre;
  }
}

//Código de inicialización
if (!localStorage.getItem('nombre')) { //¿Existe el elemento nombre?
    estableceNombreUsuario(); //Si no existe, la función estableceNombreUsuario() se iniciará para crearlo
}
else {
    let nombreAlmacenado = localStorage.getItem('nombre');
    miTitulo.textContent = 'Hay de todo por aquí, ' + nombreAlmacenado; //Si ya existe, se recupera el dato del nombre usando getItem() y se fija mediante textContent del título a la cadena, más el nombre del usuario
}

miBoton.onclick = function() { 
    estableceNombreUsuario(); //Evento onclick, manipulará el botón, de modo que cuando sea pulsado se inicie la función estableceNombreUsuario
}