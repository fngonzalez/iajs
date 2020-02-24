/*

TAREA:
Crear una interfaz que permita agregar ó quitar (botones agregar y quitar) inputs+labels para completar el salario anual de
cada integrante de la familia que trabaje. Al hacer click en "calcular", mostrar en un elemento pre-existente el mayor salario
anual, menor salario anual, salario anual promedio y salario mensual promedio.

Punto bonus: si hay inputs vacíos, ignorarlos en el cálculo (no contarlos como 0).


*/



let $botonAceptar = document.querySelector("#boton-entrar")

$botonAceptar.onclick = function () {

     let numeroDeLaFamilia = document.querySelector("#cantidad-de-personas").value
     let nodoPrincipal = document.querySelector("form#resultado")
     if (numeroDeLaFamilia < 1) {
          nodoPrincipal.innerText = "Ingresá un número válido."
     }
     else {
          for (i = 1; i <= numeroDeLaFamilia; i++) {
               let crearForm = document.createElement("form")
               let crearInput = document.createElement("input")
               crearInput.id = "input-sueldo"
               crearInput.type = "number"
               let crearLabel = document.createElement("label")
               crearLabel.id = "label-sueldo"
               crearLabel.innerText = "Ingresá el sueldo del integrante " + i + " :       "

               nodoPrincipal.appendChild(crearForm)
               nodoPrincipal.appendChild(crearLabel)

               nodoPrincipal.appendChild(crearInput)
          }

          document.querySelector("#cantidad-de-personas").style = "display:none"
          document.querySelector("#boton-entrar").style = "display:none"


          document.querySelector("#boton-calcular").style = "display=block"

          let $calcularDeNuevo = document.querySelector("#empezar-de-nuevo").style = "display:block"
     }
}




let $botonCalcular = document.querySelector("#boton-calcular")

$botonCalcular.onclick = function () {
     let todosLosSueldos = document.querySelectorAll("#input-sueldo")
     let mayor = 0
     let menor = 0
     let promedio = 0
     let divisor = 0
     for (let i of todosLosSueldos) {


          if (Number(i.value) > 0) {
               if (menor == 0)
                    menor = Number(i.value)
               else if (Number(i.value) < menor) {
                    menor = Number(i.value)
               }
               if (Number(i.value) > mayor) {
                    mayor = Number(i.value)
               }
               promedio = promedio + Number(i.value)
               divisor++
          }
     }

     document.querySelector("form#resultado").innerText = "El sueldo promedio de tu hogar es de: " +
          (promedio / divisor).toFixed(2) + ", el más bajo es de: " + menor + ", y el mayor es de : " +
          mayor

     let $botonCalcular = document.querySelector("#boton-calcular").style = "display:none"
}

let $calcularDeNuevo = document.querySelector("#empezar-de-nuevo")

$calcularDeNuevo.onclick = function () {

     document.querySelector("#cantidad-de-personas").style = "display:block"
     document.querySelector("#boton-entrar").style = "display:block"

     document.querySelector("#boton-calcular").style = "display:none"


     let nodoPrincipal = document.querySelector("form#resultado")
     //let formsEnIndex= document.querySelector("form")

     while (nodoPrincipal.firstChild) {
          nodoPrincipal.removeChild(nodoPrincipal.firstChild);
     }

     document.querySelector("#empezar-de-nuevo").style = ("display:none")
}



