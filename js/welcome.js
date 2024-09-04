const btnEliminar = document.getElementById("btnEliminar");
const mensaje = document.getElementsByTagName("mensajes")

////////////////////////////
btnEliminar.addEventListener("click", function(event){
    event.preventDefault();
    txtNombre.value = "";
    localStorage.clear();

    alerValidaciones.style.display ="none";
    alerValidacionesTexto.innerHTML ="";

    txtNombre.style.border
});

window.addEventListener("load", function(){
    if(this.localStorage.getItem("nombre")!=null){
        mensaje.innerHTML=`Hola ${this.localStorage.getItem("nombre")} bienvenido de nuevo
        `
    }
    
})