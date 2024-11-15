document.addEventListener('DOMContentLoaded', function() {
    crearGaleria()
})

function crearGaleria() {
    const galeria = document.querySelector('.galeria-imagenes')
    const Cantidad_Imagenes = 16;

    for(let i = 1; i <= Cantidad_Imagenes; i++) {
        const imagen = document.createElement('IMG')
        imagen.src = `src/img/gallery/full/${i}.jpg`
        imagen.alt = 'Imagen Galeria'

        //Event Handler
        imagen.onclick = function () {
            mostrarImagen(i)
        }
        
        galeria.appendChild(imagen)
    }
}

function mostrarImagen(i) {

    const imagen = document.createElement('IMG')
     imagen.src = `src/img/gallery/full/${i}.jpg`
     imagen.alt = 'Imagen Galeria'

  //Generar Modal
  const modal = document.createElement('DIV')
  modal.classList.add('modal')
  modal.onclick = cerrarModal
  modal.appendChild(imagen)

  //Agregar al HTML
  const body = document.querySelector('body')
  body.classList.add('overflow-hidden')
  body.appendChild(modal)
}

function cerrarModal() {
    const modal = document.querySelector('.modal')
    modal.classList.add('fade-out')

    setTimeout(() =>{
        modal?.remove()
        const body = document.querySelector('body')
        body.classList.remove('overflow-hidden')
    }, 500)
}