let numerosLi = document.querySelectorAll("li")
let numerosOl = document.querySelectorAll("ol")
let todosLosNumeros = []



let promedio = function (arrayDeNumeros) {
    let contador = 0
    for (let i of arrayDeNumeros) {
        contador = contador + i
    }
    return contador / (arrayDeNumeros.length)

}


let menorDeUnString = function (stringDeNumeros) {
    let numeroMenor = 0
    for (let i of stringDeNumeros) {
        if (numeroMenor > i) {
            numeroMenor = i
        } else if (numeroMenor == 0) {
            numeroMenor = i
        }
    }
    return numeroMenor
}

let mayorEnUnString = function (stringDeNumeros) {
    let numeroMayor = 0
    for (let i of stringDeNumeros) {
        if (numeroMayor < i) {
            numeroMayor = i
        }
    } return numeroMayor
}

for (i = 0; i < numerosLi.length; i++) {
    todosLosNumeros.push(Number(numerosLi[i].innerText))
    if (numerosOl[i] != undefined) {
        todosLosNumeros.push(Number(numerosOl[i].innerText))
    }
}

numeroPromedio = promedio(todosLosNumeros)
numeroMenor = menorDeUnString(todosLosNumeros)
numeroMayor = mayorEnUnString(todosLosNumeros)

console.log(numeroPromedio)
console.log(numeroMenor)
console.log(numeroMayor)