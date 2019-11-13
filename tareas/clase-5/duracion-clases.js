const convertirSegsAMin = function (segs, mins) {
    if (segs > 60) {
        return segs -= 60
        mins = mins + 1
    }
}
const convertirMinAHs = function (mins, hs) {
    if (mins > 60) {
        return mins -= 60
        hs = hs + 1
    }
}

let $aceptar = document.querySelector("#aceptar")

$aceptar.onclick = function () {

    let duracionHs = document.querySelectorAll("#input-horas")
    let duracionMin = document.querySelectorAll("#input-minutos")
    let duracionSeg = document.querySelectorAll("#input-segundos")
    let contadorHs = 0
    let contadorMin = 0
    let contadorSeg = 0


    for (i = 0; i < duracionHs.length; i++) {
        contadorHs += Number(duracionHs[i].value)

    }

    for (i = 0; i < duracionMin.length; i++) {
        contadorMin += Number(duracionMin[i].value)
        convertirMinAHs(contadorMin, contadorHs)
    }



    for (i = 0; i < duracionSeg.length; i++) {
        contadorSeg += Number(duracionSeg[i].value)
        convertirSegsAMin(duracionSeg, duracionMin)
    }


    let nodoTexto = document.querySelector("body")
    let textoResultado = document.createElement("p")
    textoResultado.innerText = "Las horas de duración del curso es de: " + contadorHs + " horas. Con " + contadorMin + " minutos, y " + contadorSeg + " segundos"
    nodoTexto.appendChild(textoResultado)
}

//Qué tanto no respeto el 
