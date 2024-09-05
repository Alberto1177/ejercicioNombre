//Variables
const btnEliminar = document.getElementById("btnEliminar");
const mensajes = document.getElementById("mensajes");
const nombre = localStorage.getItem("nombre");

//Evento del boton de eliminar
btnEliminar.addEventListener("click", function(event){
    event.preventDefault();
    //Eliminar la informacion del contenido del localstorage
    localStorage.clear();

    //Motrar mensaje al eliminar la informacion
    mensajes.innerHTML = `<p> Se elimino el contenido del localStorage</p>`
});

//Evento de window
window.addEventListener("load", function(){
    //Validar si contiene informacion o no en el localstorage
    if(this.localStorage.getItem("nombre")!=null){
        mensajes.innerHTML = `<p>Hola ${nombre}, bienvenido de nuevo</p>`
    }else{
        mensajes.innerHTML = `<p>Por favor ve al index a ingresar tu nombre</p>`
    }
    
});