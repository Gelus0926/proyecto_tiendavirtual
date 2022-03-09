//creando un arreglo de objetos
let productos = [
    {foto :'img/p1.png', nombre:"Camiseta",precio:45000,descripcion:"Camiseta Demon Slayer"},
    {foto :'img/p2.png', nombre:"Camiseta",precio:45000,descripcion:"Camiseta jujutsu Kaisen"},
    {foto :'img/p3.png', nombre:"Camiseta",precio:45000,descripcion:"Camiseta Nanatsu No Taizai"},
    {foto :'img/p4.png', nombre:"Camiseta",precio:45000,descripcion:"Camiseta One Piece"},   
    {foto :'img/p5.png', nombre:"Chompa",precio:90000,descripcion:"Chompa Boku No Hero Academia"},
    {foto :'img/p6.png', nombre:"Chompa",precio:90000,descripcion:"Chompa Bleach"},
    {foto :'img/p7.png', nombre:"Chompa",precio:90000,descripcion:"Chompa Death Note"},
    {foto :'img/p8.png', nombre:"Buzo",precio:75000,descripcion:"Buzo Shingeki No Kyojin"},
    {foto :'img/p9.png', nombre:"Buzo",precio:75000,descripcion:"Buzo Fairy Tail"},
    {foto :'img/p10.png', nombre:"Buzo",precio:75000,descripcion:"Buzo Fullmeta Alchemist"} 
]

console.log(productos)

//Como recorrer un arreglo con JS
//1.Tener un arreglo

//1.Creo una variable para almacenar la base sobre la cual voy a pintar
    let fila=document.getElementById("fila")
    productos.forEach(function(producto){
    console.log(producto.nombre);
    console.log(producto.precio);
    console.log(producto.foto);

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


    //3.padres e hijos
    tarjeta.appendChild(foto)
    tarjeta.appendChild(titulo)
    tarjeta.appendChild(precio)
    columna.appendChild(tarjeta)
    fila.appendChild(columna)



})
