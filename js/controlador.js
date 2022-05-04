import { llenarTienda } from "./llenadotienda.js";
import { ampliarinformacion } from "./ampliarinfo.js";

//creo un producto vacio
let producto={}

//llamando a tienda llenado
llenarTienda();

//referencia al modal
let modalinfo = new bootstrap.Modal(document.getElementById('modalinfo'))
let modalcompra = new bootstrap.Modal(document.getElementById('ResumenCompra'))

//Rutina para ampliar imformacion
let filacontenedor=document.getElementById("fila")
filacontenedor.addEventListener("click",function(evento){
    
    if(evento.target.classList.contains("btn")){
        producto=ampliarinformacion(evento)
        console.log(producto)
        modalinfo.show();
        reiniciar();
    }
})

//añadir un prducto al carrito de compras
let carrito=[];
let botonagregarcarrito=document.getElementById("btnadd")
let capsula=document.getElementById("capsula")
botonagregarcarrito.addEventListener("click",function(){
    let cantidad=document.getElementById("CantidadProducto").value;
    //antes de capturar la cantidad y agregar el producto
    producto.cantidad=cantidad
    producto.subtotal=producto.cantidad*Number(producto.precioInfo)
     //Agregar el producto al carrito
     carrito.push(producto)
     console.log(cantidad)
    //pintar la capsula en el carrito
    let suma=0
    carrito.forEach(function (producto){
        suma=suma+Number(producto.cantidad)
    })
    //console.log(suma)
    capsula.classList.remove("invisible")
    capsula.textContent=suma
    modalinfo.hide()
    LimpiarCarrito.classList.remove("invisible")
    Total(1)
    modalinfo.show();
    
})

//Rutina para limpiar
let LimpiarCarrito = document.getElementById("limpiar")
LimpiarCarrito.addEventListener("click",function(){
    Total(0)
    capsula.textContent=0
    capsula.classList.add("invisible")
    LimpiarCarrito.classList.add("invisible")
    carrito=[];

})

//ver carrito
let btnvercarrito=document.getElementById("vercarrito")
btnvercarrito.addEventListener("click",function(){
//Recorrer el carrito y pintar los productos
let base=document.getElementById("baseCarro")

    base.innerHTML = ""

    carrito.forEach(function(producto){

        let fila = document.createElement("div")
        fila.classList.add("row","mb-5")

        let columna1 = document.createElement("div")
        columna1.classList.add("col-4","align-self-center")

        let columna2 = document.createElement("div")
        columna2.classList.add("col-8")
        columna2.classList.add("align-self-center")

        let imagen = document.createElement("img")
        imagen.classList.add("w-100")
        imagen.classList.add("img-fluid")
        imagen.src = producto.fotoinfo

        //h4
        let titulo=document.createElement("h4")
        titulo.classList.add("text-center")
        titulo.textContent=producto.tituloFoto

        //precio
        let precio=document.createElement("h2")
        precio.classList.add("text-center")
        precio.textContent=producto.precioInfo

        //descripcion
        let descripcion=document.createElement("p")
        descripcion.classList.add("text-center")
        descripcion.textContent=producto.descripcioninfo
         
        let cantidad=document.createElement("p")
        cantidad.classList.add("text-center")
        cantidad.textContent=producto.cantidad

        let subtotalProducto = document.createElement("h5")
        subtotalProducto.textContent=producto.subtotal
        subtotalProducto.classList.add("text-center")

        //Padres e hijos
        columna1.appendChild(imagen)
        columna2.appendChild(titulo)
        columna2.appendChild(cantidad)
        columna2.appendChild(precio)
        columna2.appendChild(subtotalProducto)
        fila.appendChild(columna1)
        fila.appendChild(columna2)
        base.appendChild(fila)
    })

    modalcompra.show()

})

//Mostrar total
let mostrarTotal = document.getElementById("totalCompra")
let total

function Total(validar){
    total=0;
    carrito.forEach(function (producto){
       if(validar==1){
           total=total+producto.subtotal
           mostrarTotal.textContent="Total: "+total
       }else{
           total=0
           mostrarTotal.textContent=""
       }
    })
}

function reiniciar(){
    let CantidadProducto = document.getElementById("CantidadProducto")
    CantidadProducto.value="1"
}

let convertidor = document.getElementById("convertidor")
convertidor.addEventListener("click",function(){
    let pesos = total
    let dolares = pesos/3955
    mostrarTotal.textContent="Dolar: "+dolares.toFixed(2)
})
