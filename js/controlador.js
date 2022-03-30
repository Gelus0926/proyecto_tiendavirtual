import { llenarTienda } from "./llenadotienda.js";
import { ampliarinformacion } from "./ampliarinfo.js";

//creo un producto vacio
let producto={}



//llamando a tienda llenado
llenarTienda();

//llamando a llenar tienda
/*
import { ampliarInfo } from "./ampliarinfo.js";

*/

let filacontenedor=document.getElementById("fila")
filacontenedor.addEventListener("click",function(evento){
    
    if(evento.target.classList.contains("btn")){
        
        let modalinfo = new bootstrap.Modal(document.getElementById('modalinfo'))
        producto=ampliarinformacion(evento)
        console.log(producto)
        modalinfo.show();
    }
})

//añadir un prducto al carrito de compras
let carrito=[];
let botonagregarcarrito=document.getElementById("btnadd")
botonagregarcarrito.addEventListener("click",function(){

    carrito.push(producto)
    console.log(carrito)

})

