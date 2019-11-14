let numerosLi = document.querySelectorAll("li")
let numerosOl = document.querySelectorAll("ol")
let todosLosNumeros = 0

for (i = 0; i < numerosLi.length; i++) {
    todosLosNumeros += Number(numerosLi[i].innerText)
}
for (i = 0; i < numerosOl.length; i++) {
    todosLosNumeros += Number(numerosOl[i].innerText)
}
console.log(todosLosNumeros)


let numerosEnArray
let numeros = numerosLi.innerText + numerosOl.innerText

for (i = 0; i < numeros.length; i++) {
    numerosEnArray += Number(numeros[i].innerText)
}
console.log(numerosEnArray)
