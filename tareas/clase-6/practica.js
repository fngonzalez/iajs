

let $ingresar= document.querySelector("#ingresar")

$ingresar.onclick=function(){
    document.querySelector("#bienvenida").style="display:none"
    document.querySelector("#explicacion").style="display:block"

}

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

