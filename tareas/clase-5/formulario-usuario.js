
let $boton = document.querySelector("#boton-ingresar")

$boton.onclick = function () {
  let segundoNombre = document.querySelector("#segundo-nombre").value
  let nombre = document.querySelector("#primer-nombre").value
  let apellido = document.querySelector("#apellido").value
  let edad = document.querySelector("#edad").value
  let nodoDelDocumento = document.querySelector("body")
  let parrafoNuevo = document.createElement("p")
  parrafoNuevo.id = "parrafo-nuevo"
  //nodoDelDocumento.appendChild(parrafoNuevo)
  parrafoNuevo.innerText = "Hola " + nombre + ", tus datos estarán ordenados abajo:"

  //  console.log(nombre + segundoNombre + apellido + edad)



  let oracionPrimerNombre = document.createElement("p")
  oracionPrimerNombre.innerText = ("Primer nombre: " + nombre)
  let oracionSegundoNombre = document.createElement("p")
  oracionSegundoNombre.innerText = ("Segundo nombre: " + segundoNombre)
  let oracionApellido = document.createElement("p")
  oracionApellido.innerText = ("Apellido: " + apellido)
  let oracionEdad = document.createElement("p")
  oracionEdad.innerText = ("Edad: " + edad)

  nodoDelDocumento.appendChild(parrafoNuevo)
  parrafoNuevo.appendChild(oracionPrimerNombre)
  parrafoNuevo.appendChild(oracionSegundoNombre)
  parrafoNuevo.appendChild(oracionApellido)
  parrafoNuevo.appendChild(oracionEdad)

  document.querySelector("#bienvenido").innerText = "Bienvenido, " + nombre + "!"

  return false
}
