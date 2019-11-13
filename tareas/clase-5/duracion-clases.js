let pasarSegundosAMinutos= function(segundos,minutos){
    while(segundos>60){
        segundos-=60
        minutos++
    }
}

let pasarMinutosAHoras= function(minutos,horas){
    while(minutos>60){
        minutos-=60
        horas++
    }
}

let calcularHoras


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

    }


    for (i = 0; i < duracionSeg.length; i++) {
        contadorSeg += Number(duracionSeg[i].value)

    }




}