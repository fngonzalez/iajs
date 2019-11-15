/*

TAREA:
Crear una interfaz que permita agregar ó quitar (botones agregar y quitar) inputs+labels para completar el salario anual de
cada integrante de la familia que trabaje. Al hacer click en "calcular", mostrar en un elemento pre-existente el mayor salario
anual, menor salario anual, salario anual promedio y salario mensual promedio.

Punto bonus: si hay inputs vacíos, ignorarlos en el cálculo (no contarlos como 0).


*/



let $botonEntrar = document.querySelector("#boton-entrar")

$botonAceptar = function () {
     let crearInput = document.createElement("input")
     crearInput.id = "input-sueldo"
     let crearLabel = document.createElement("label")
     crearLabel.id = "label-sueldo"
     let nodoPrincipal = document.querySelector("div")

     let numeroDeLaFamilia = document.querySelector("#cantidad-de-personas").value

     for (i = 0; i <= numeroDeLaFamilia; i++) {
          nodoPrincipal.appendChild(crearLabel)
          crearLabel.innerText = "Ingresá el sueldo del integrante " + i
          nodoPrincipal.appendChild(crearInput)
     }


     document.querySelector("#boton-calcular").style = "display=block"








}




// let sueldoPromedio
// let sueldoMayor
// let sueldoMenor

let $botonCalcular = document.querySelector("#boton-calcular")

$botonCalcular = function () {
     let todosLosSueldos = document.querySelectorAll("#input-sueldo")
     let mayor = 0
     let menor = 0
     let promedio = 0
     let divisor
     for (let i of todosLosSueldos.value) {
          if (i < menor) {
               menor = i
          }
          else if (menor == 0)
               menor = i

          if (i > mayor) {
               mayor = i
          }
          promedio = promedio + i
          divisor++
     }

     document.querySelector("div#resultado").innerText = "El sueldo promedio de tu hogar es de: " +
          (sueldoPromedio /divisor) + ", el más bajo es de: " + sueldoMenor + ", y el mayor es de : " + sueldoMayor


}









/*
TAREA: Empezar preguntando cuánta gente hay en el grupo familiar.
Crear tantos inputs+labels como gente haya para completar la edad de cada integrante.
Al hacer click en "calcular", mostrar en un elemento pre-existente la mayor edad, la menor edad y 
el promedio del grupo familiar.

Punto bonus: Crear un botón para "empezar de nuevo" que empiece el proceso nuevamente, borrando los inputs ya creados (investigar
     cómo en MDN).
*/






const $botonIngresar = document.querySelector("#ingresar")
$botonIngresar.onclick = function () {
     let numeroDelGrupoFamiliar = Number(document.querySelector("#numeroDelGrupoFamiliar").value);
     let nodoPaginaTexto = document.querySelector('body')
     let divFamilia = document.querySelector("div#familia")

     if (numeroDelGrupoFamiliar > 0 && numeroDelGrupoFamiliar != null) {
          document.querySelector("div#familia").style = "display:block"
     }
     for (i = 1; i <= numeroDelGrupoFamiliar; i++) {
          let formularioFamilia = document.querySelector('form#formulario-familiar')
          let nuevoFormulario = document.createElement("form")
          let nuevoInput = document.createElement("input")
          nuevoInput.id = "inputFamilia"
          nuevoInput.type = 'number'

          let nuevoLabel = document.createElement("label")
          nuevoLabel.innerText = ("Integrante " + i + ': ')

          formularioFamilia.appendChild(nuevoFormulario)
          nuevoFormulario.appendChild(nuevoLabel)
          nuevoFormulario.appendChild(nuevoInput)

     }
     return false
}


let promediar = function (arrayDeNumeros, numeroParaPromediar) {
     let cantidadDeNumeros = (arrayDeNumeros.length)
     return (numeroParaPromediar / cantidadDeNumeros).toFixed(2)
}


let $botonAceptar = document.querySelector("#aceptar")
$botonAceptar.onclick = function () {
     let edadesEnLaFamilia = document.querySelectorAll("#inputFamilia")
     let mayorDeEdad = 0
     let menorDeEdad = 0
     let edadPromedio = 0
     let edadesSumadas = 0
     for (i = 0; i < edadesEnLaFamilia.length; i++) {
          if (mayorDeEdad < edadesEnLaFamilia[i].value) {
               mayorDeEdad = Number(edadesEnLaFamilia[i].value)
          } if (menorDeEdad > edadesEnLaFamilia[i].value || menorDeEdad == 0) {
               menorDeEdad = Number(edadesEnLaFamilia[i].value)
          }
          edadesSumadas += Number(edadesEnLaFamilia[i].value)
     } edadPromedio = promediar(edadesEnLaFamilia, edadesSumadas)
     let edadesRelevantes = document.querySelector("div#edades-relevantes")
     edadesRelevantes.innerText = 'La edad promedio de tu familia es de: ' + edadPromedio + " años. " + 'La persona con menor edad tiene: ' + menorDeEdad + " años. " + 'La persona con mayor edad tiene: ' + mayorDeEdad + " años. "
}

let $limpiar = document.querySelector("#limpiar")
$limpiar.onclick = function () {
     document.querySelector("div#familia").style = "display:none"
     let edadesRelevantes = document.querySelector("div#edades-relevantes")
     edadesRelevantes.innerText = ''
     let formularioFamiliar = document.querySelector("form#formulario-familiar")
     while (formularioFamiliar.firstChild) {
          formularioFamiliar.removeChild(formularioFamiliar.firstChild);
     }

}  //Los labels tambien se van por el hecho de ser un firstchild, ¿verdad?






