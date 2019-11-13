
let $boton = document.querySelector("#boton-ingresar")

$boton.onclick = function () {
  let segundoNombre = document.querySelector("#segundo-nombre").value
  let nombre = document.querySelector("#primer-nombre").value
  let apellido = document.querySelector("#apellido").value
  let edad = document.querySelector("#edad").value
  let nodoDelDocumento = document.querySelector("body")
  let parrafoNuevo = document.createElement("p")
  parrafoNuevo.id = "parrafo-nuevo"
  parrafoNuevo.innerText = "Hola " + nombre + ", tus datos estarán ordenados abajo:"
  let datosResultados = (nombre + " " + segundoNombre + " " + apellido + " " + edad)



  let inputResultado = document.querySelector("#texto-resultado")
  inputResultado.style = "display:block"
  inputResultado.value = datosResultados
  document.querySelector("#bienvenido").innerText = "Bienvenido, " + nombre + "!"

  return false
}
