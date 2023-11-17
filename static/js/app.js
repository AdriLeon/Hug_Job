const container = document.querySelector(".container")
const imagenes = [
    {frase: "El único límite a tus logros es tu propia mente. - Oprah Winfrey", imagen: "/static/img/Image-1.jpg"},
    {frase: "La vida es 10% lo que te sucede y 90% cómo reaccionas a ello. - Charles Swindoll", imagen: "/static/img/image-2.jpg"},
    {frase: "No hay nada imposible para el que se atreve a intentarlo. - Alejandro Magno", imagen: "/static/img/image-3.jpg"},
]

const showImagenes = () => {
    let output = ""
    imagenes.forEach(
        ({frase, imagen}) =>
        (output += `
       
    <div class="card">
        <div class="face face1" style="background-image: url(${imagen}); background-repeat: no-repeat; background-size: cover; background-position: center center;">
            
        </div>
        <div class="face face2">
            <div class="content">
                <h4>
                    ${frase}
                </h4>
            </div>
        </div>
    </div>
        `)
    )
    container.innerHTML = output
}

document.addEventListener("DOMContentLoaded", showImagenes)