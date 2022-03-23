//creando un arreglo de objetos
let productos = [
    {foto :'img/p1.png', nombre:"Camiseta",precio:45000,descripcion:"Camiseta Demon Slayer", boton:"Agregar Producto"},
    {foto :'img/p2.png', nombre:"Camiseta",precio:45000,descripcion:"Camiseta jujutsu Kaisen", boton:"Agregar Producto"},
    {foto :'img/p3.png', nombre:"Camiseta",precio:45000,descripcion:"Camiseta Nanatsu No Taizai", boton:"Agregar Producto"},
    {foto :'img/p4.png', nombre:"Camiseta",precio:45000,descripcion:"Camiseta One Piece", boton:"Agregar Producto"},   
    {foto :'img/p5.png', nombre:"Chompa",precio:90000,descripcion:"Chompa Boku No Hero Academia", boton:"Agregar Producto"},
    {foto :'img/p6.png', nombre:"Chompa",precio:90000,descripcion:"Chompa Bleach", boton:"Agregar Producto"},
    {foto :'img/p7.png', nombre:"Chompa",precio:90000,descripcion:"Chompa Death Note", boton:"Agregar Producto"},
    {foto :'img/p8.png', nombre:"Buzo",precio:75000,descripcion:"Buzo Shingeki No Kyojin", boton:"Agregar Producto"},
    {foto :'img/p9.png', nombre:"Buzo",precio:75000,descripcion:"Buzo Fairy Tail", boton:"Agregar Producto"},
    {foto :'img/p10.png', nombre:"Buzo",precio:75000,descripcion:"Buzo Fullmeta Alchemist", boton:"Agregar Producto"} 
]

console.log(productos)

//Como recorrer un arreglo con JS
//1.Tener un arreglo

//1.Creo una variable para almacenar la base sobre la cual voy a pintar
    let fila=document.getElementById("fila")
    productos.forEach(function(producto){
        /*
    console.log(producto.nombre);
    console.log(producto.precio);
    console.log(producto.foto);
    */

    //2.Pintando etiquetas
    //div con la clase col
    let columna=document.createElement("div")
    columna.classList.add("col")

    //div con la clase card
    let tarjeta=document.createElement("div")
    tarjeta.classList.add("card")
    tarjeta.classList.add("h-100")

    //img con la clase card-img-top
    let foto=document.createElement("img")
    foto.classList.add("card-img-top")
    foto.src=producto.foto

    //h4
    let titulo=document.createElement("h4")
    titulo.classList.add("text-center")
    titulo.textContent=producto.nombre

    //precio
    let precio=document.createElement("h2")
    precio.classList.add("text-center")
    precio.textContent=producto.precio

    //descripcion
    let descripcion=document.createElement("p")
    descripcion.classList.add("text-center")
    descripcion.textContent=producto.descripcion

    //boton
    let boton=document.createElement("button")
    boton.classList.add("btn-center")
    boton.classList.add("btn","btn-warning","w-40","d-block","mx-auto","mt-4")
    boton.setAttribute("type","button")
    boton.textContent=producto.boton


    //3.padres e hijos
    tarjeta.appendChild(foto);
    tarjeta.appendChild(titulo);
    tarjeta.appendChild(precio);
    tarjeta.appendChild(descripcion);
    tarjeta.appendChild(boton);
    columna.appendChild(tarjeta);
    fila.appendChild(columna);



})

//rutina para ampliar informacion del producto
let filacontenedor=document.getElementById("fila")
filacontenedor.addEventListener("click",function(evento){
    if(evento.target.classList.contains("btn")){

        console.log(evento.target.parentElement.querySelector("h4").textContent)
        console.log(evento.target.parentElement.querySelector("h4").src)

        let fotoinfo=document.getElementById("fotoInfo")
        fotoinfo.src=(evento.target.parentElement.querySelector("img").src)

        let titulofoto=document.getElementById("tituloinfo")
        titulofoto.textContent=evento.target.parentElement.querySelector("h4").textContent

        let modalinfo = new bootstrap.Modal(document.getElementById('modalinfo'))
        modalinfo.show()

    }
})

