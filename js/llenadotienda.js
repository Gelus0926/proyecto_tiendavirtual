export function llenarTienda(){
//export function llenarTienda(){
    //creando un arreglo de objetos
    let productos = [
        {foto :'img/p1.png', nombre:"Camiseta",precio:45000,descripcion:"Camisa Negra Demon Slayer", boton:"Agregar Producto"},
        {foto :'img/p2.png', nombre:"Camiseta",precio:45000,descripcion:"Camisa Negra jujutsu Kaisen", boton:"Agregar Producto"},
        {foto :'img/p3.png', nombre:"Camiseta",precio:45000,descripcion:"Camisa Negra Nanatsu No Taizai", boton:"Agregar Producto"},
        {foto :'img/p4.png', nombre:"Camiseta",precio:45000,descripcion:"Camisa Negra One Piece", boton:"Agregar Producto"},   
        {foto :'img/p5.png', nombre:"Chompa",precio:90000,descripcion:"Chompa Negra Boku No Hero Academia", boton:"Agregar Producto"},
        {foto :'img/p6.png', nombre:"Chompa",precio:90000,descripcion:"Chompa Negra Bleach", boton:"Agregar Producto"},
        {foto :'img/p7.png', nombre:"Chompa",precio:90000,descripcion:"Chompa Negra Death Note", boton:"Agregar Producto"},
        {foto :'img/p8.png', nombre:"Buzo",precio:75000,descripcion:"Buzo Negro Shingeki No Kyojin", boton:"Agregar Producto"},
        {foto :'img/p9.png', nombre:"Buzo",precio:75000,descripcion:"Buzo Negro Fairy Tail", boton:"Agregar Producto"},
        {foto :'img/p10.png', nombre:"Buzo",precio:75000,descripcion:"Buzo Negro Fullmeta Alchemist", boton:"Agregar Producto"} 
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
        tarjeta.appendChild(descripcion);
        tarjeta.appendChild(precio);
        tarjeta.appendChild(boton);
        columna.appendChild(tarjeta);
        fila.appendChild(columna);
    })
}  






