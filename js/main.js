const btnAgregar = document.getElementById("btnAgregar");
const txtNombre = document.getElementById("Name");




const alerValidaciones = document.getElementById("alertValidaciones");
const alerValidacionesTexto = document.getElementById("alertValidacionesTexto");



let datos = new Array();

btnAgregar.addEventListener("click", function(event) {
    event.preventDefault()//prevenir el error
    //Eliminar el mensaje y ocultar el bloque
    txtNombre.style.border = "";
    alerValidacionesTexto.innerHTML = "";
    alerValidaciones.style.display = "None";

    //Validar el nombre
    if(txtNombre.value.trim().length<3){
        txtNombre.style.border = "solid red medium"
        alerValidacionesTexto.innerHTML  ="El <strong>Nombre</strong> no es correcto. </br>";
        alerValidaciones.style.display ="block";
        return false;
    }

    localStorage.setItem("nombre", );
});
