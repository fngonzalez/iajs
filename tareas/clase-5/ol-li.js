let numerosLi = document.querySelectorAll("li")
let numerosOl = document.querySelectorAll("ol")
let todosLosNumeros = []



let promedio = function (arrayDeNumeros, contador) {
    let contador = 0
    for (i = 0; i < arrayDeNumeros.length; i++) {
        contador = contador + arrayDeNumeros[i]
    }
    return contador / (arrayDeNumeros.length + 1)

}


let menorDeUnString = function (stringDeNumeros, numeroMenor) {
    let numeroMenor = 0
    for (i = 0; i < stringDeNumeros.length; i++) {
        if (numeroMenor < stringDeNumeros[i]) {
            numeroMenor = stringDeNumeros[i]
        }
    }
    return numeroMenor
}

let mayorEnUnString = function (stringDeNumeros, numeroMayor) {
    let numeroMayor = 0
    for (i = 0; i < stringDeNumeros; i++) {
        if (numeroMayor < stringDeNumeros[i]) {
            numeroMayor = stringDeNumeros[i]
        }
    } return numeroMayor
}

for (i = 0; i < numerosLi.length; i++) {
    todosLosNumeros.push(Number(numerosLi[i].innerText))
    if (numerosOl[i] != undefined) {
        todosLosNumeros.push(Number(numerosOl[i].innerText))
    }
}

promedio(todosLosNumeros, contador)
menorDeUnString(todosLosNumeros, numeroMenor)
mayorEnUnString(todosLosNumeros, numeroMayor)

