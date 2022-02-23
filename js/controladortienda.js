//controlando etiquetas 

//1.crear una variable 
let etiquetatitulo = document.getElementById("title");
console.log(etiquetatitulo);
let etiquetamenu = document.getElementById("menu");
console.log(etiquetamenu);

//2. como modificar el texto de una etiqueta
etiquetatitulo.textContent="Antiheroe"
etiquetatitulo.textContent="Deadpool"


//controlando una imagen 
let etiquetafoto = document.getElementById("imagen");
etiquetafoto.src="img/3.jpg"


//utilizar o cambiar el estilo de la etiqueta
etiquetatitulo.classList.add("text-center")
etiquetatitulo.classList.add("text-danger")