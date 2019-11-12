
let $boton = document.querySelector("#boton-ingresar")

$boton.onclick = function () {
    let nombre = document.querySelector("#primer-nombre").value
    let segundoNombre = document.querySelector("#segundo-nombre").value
    let apellido = document.querySelector("#apellido").value
    let edad = document.querySelector("#edad").value
    let nodoDelDocumento = document.querySelector("body")
    let parrafoNuevo = document.createElement("p")
    
    parrafoNuevo.innerText = "Hola " + primerNombre + ", tus datos estarán ordenados abajo:"

console.log(nombre+segundoNombre+apellido+edad)



/*
  parrafoPrimerNombre = "Primer nombre: " + nombre
    parrafoSegundoNombre = "Segundo nombre: " + segundoNombre
    parrafoApellido = "Apellido: " + apellido
    parrafoEdad = "Edad: " + edad

    nodoDelDocumento.appendChild(nodoDelDocumento)
  parrafoNuevo.appendChild(parrafoPrimerNombre)
    parrafoNuevo.appendChild(parrafoSegundoNombre)
    parrafoNuevo.appendChild(parrafoApellido)
    parrafoNuevo.appendChild(parrafoEdad)

  document.querySelector("bienvenido").innerText = "Bienvenido, " + primerNombre + "!"
*/
    return false
}
