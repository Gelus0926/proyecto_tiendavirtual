/*
let etiquetaboton = document.getElementById("boton");

etiquetaboton.addEventListener("click",cambiarFoto);

function cambiarFoto() {
    let titulo2=document.getElementById("titulo2")
    titulo2.textContent="Buenos dias Sr.Usuario"
    console.log("estoy haciendo click");
}
*/

let etiquetacamiartexto = document.getElementById("imagen");

etiquetacamiartexto.addEventListener("mouseover",cambiartitulo);

function cambiartitulo(){
    let etiquetacamiartexto=document.getElementById("tituloimg")
    etiquetacamiartexto.textContent="Descripcion"
}
