
let $boton = document.querySelector("#boton-ingresar")

$boton.onclick = function () {
  let segundoNombre = document.querySelector("#segundo-nombre").value
  let nombre = document.querySelector("#primer-nombre").value
  let apellido = document.querySelector("#apellido").value
  let edad = document.querySelector("#edad").value
  parrafoNuevo=document.querySelector("#parrafo-nuevo")
  parrafoNuevo.innerText = "Hola " + nombre + ", tus datos son:"
  let datosResultados = (nombre + " " + segundoNombre + " " + apellido + " " + edad)



  let inputResultado = document.querySelector("#texto-resultado")
  inputResultado.style = "display:block"
  inputResultado.value = datosResultados
  document.querySelector("#bienvenido").innerText = "Bienvenido, " + nombre + "!"

  return false
}
