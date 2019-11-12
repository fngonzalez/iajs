
let $boton = document.querySelector("#boton-ingresar")

$boton.onclick = function () {
  let segundoNombre = document.querySelector("#segundo-nombre").value
  let nombre = document.querySelector("#primer-nombre").value
  let apellido = document.querySelector("#apellido").value
  let edad = document.querySelector("#edad").value
  let nodoDelDocumento = document.querySelector("body")
  let parrafoNuevo = document.createElement("p")
  //nodoDelDocumento.appendChild(parrafoNuevo)
  parrafoNuevo.innerText = "Hola " + nombre + ", tus datos estarán ordenados abajo:"

  //  console.log(nombre + segundoNombre + apellido + edad)

  let parrafoPrimerNombre = "Primer nombre: " + nombre
  let parrafoSegundoNombre = "Segundo nombre: " + segundoNombre
  let parrafoApellido = "Apellido: " + apellido
  let parrafoEdad = "Edad: " + edad

  nodoDelDocumento.appendChild(parrafoNuevo)
  parrafoNuevo.appendChild(parrafoPrimerNombre)
  parrafoNuevo.appendChild(parrafoSegundoNombre)
  parrafoNuevo.appendChild(parrafoApellido)
  parrafoNuevo.appendChild(parrafoEdad)

  document.querySelector("bienvenido").innerText = "Bienvenido, " + primerNombre + "!"

  return false
}
