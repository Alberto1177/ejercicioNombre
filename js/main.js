//Variables
const btnAgregar = document.getElementById("btnAgregar");
const txtNombre = document.getElementById("nombre");

const alerValidaciones = document.getElementById("alertValidaciones");
const alerValidacionesTexto = document.getElementById("alertValidacionesTexto");

//Evento del boton de agregar
btnAgregar.addEventListener("click", function(event) {
    event.preventDefault()//prevenir el error
    //Eliminar el mensaje y ocultar el bloque
    txtNombre.style.border = "";
    alerValidacionesTexto.innerHTML = "";
    alerValidaciones.style.display = "None";

    //Validar el nombre
    if(txtNombre.value.length<3){
        txtNombre.style.border = "solid red medium"
        alerValidacionesTexto.innerHTML  ="El <strong>Nombre</strong> no es correcto. </br>";
        alerValidaciones.style.display ="block";
        return false;
    }

    //Guardar el valor en localstorage
    localStorage.setItem("nombre", txtNombre.value );
});
