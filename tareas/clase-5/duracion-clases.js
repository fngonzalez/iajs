let convertirSegundosAMinutos = function (segundos, minutos) {
    while (segundos > 60) {
        segundos -= 60
        minutos++
    }
}

let convertirMinutosAHoras = function (minutos, horas) {


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
        if (contadorMin > 60) {
            contadorMin -= 60
            contadorHs++
        }
    }


    for (i = 0; i < duracionSeg.length; i++) {
        contadorSeg += Number(duracionSeg[i].value)
        if (contadorSeg > 60) {
            contadorSeg -= 60
            contadorMin++
        }
    }

    let nodoTexto = document.querySelector("body")
    let textoResultado = document.createElement("p")
    textoResultado.innerText = "Las horas de duración del curso es de: " + contadorHs + ". Con " + contadorMin + " minutos, y" + contadorSeg + "segundos"
    nodoTexto.appendChild(textoResultado)
}



