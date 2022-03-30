//rutina para ampliar informacion del producto
export function ampliarinformacion(evento){

        let producto={}

        //llenado la informacion del producto
        producto.fotoinfo=evento.target.parentElement.querySelector("img").src
        producto.titulofoto=evento.target.parentElement.querySelector("h4").textContent
        producto.descripcioninfo=evento.target.parentElement.querySelector("p").textContent
        producto.precioInfo=evento.target.parentElement.querySelector("h2").textContent

        let fotoinfo=document.getElementById("fotoInfo")
        fotoinfo.src=(evento.target.parentElement.querySelector("img").src)

        let titulofoto=document.getElementById("tituloinfo")
        titulofoto.textContent=evento.target.parentElement.querySelector("h4").textContent

        let modalinfo = new bootstrap.Modal(document.getElementById('modalinfo'))

        let descripcioninfo=document.getElementById("descripcionInfo")
        descripcioninfo.textContent=(evento.target.parentElement.querySelector("p").textContent)

        let precioInfo=document.getElementById("precioInfo")
        precioInfo.textContent=(evento.target.parentElement.querySelector("h2").textContent)

        //devolver el producto generado
        return producto;
}
