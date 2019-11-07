/*
let mesesEnUnAño = 12
let semanasEnUnMes = 4
let semanasEnUnAño = 52
let diasEnUnaSemana = 6
let diasEnUnMes = 28
let diasEnUnAño = 360
let horasEnUnAño = 2880
let horasEnUnMes = 224
let horasEnUnaSemana = 48
let horasEnUnDia = 8

let anualAMensual = function (sueldoAnual, mesesEnUnAño) {
    return sueldoAnual / mesesEnUnAño
}

let anualASemanal = function (sueldoAnual, semanasEnUnAño) {
    return sueldoAnual / semanasEnUnAño
}

let anualADiario = function (sueldoAnual, diasEnUnAño) {
    return sueldoAnual / diasEnUnAño
}

let anualAHorario = function (sueldoAnual, horasEnUnAño) {
    return sueldoAnual / horasEnUnAño
}

///////////////////////////////
let mensualAAnual = function (sueldoMensual, mesesEnUnAño) {
    return sueldoMensual * mesesEnUnAño

}

let mensualASemanal = function (sueldoMensual, semanasEnUnMes) {
    return sueldoMensual / semanasEnUnMes
}

let mensualADiario = function (sueldoMensual, diasEnUnMes) {
    return sueldoMensual / diasEnUnMes
}

let mensualAHorario = function (sueldoMensual, horasEnUnMes) {
    return  sueldoMensual / horasEnUnMes
}

//////////////////////////////
let semanalAAnual = function (sueldoSemanal, semanasEnUnAño) {
    return sueldoSemanal * semanasEnUnAño
}

let semanalAMensual = function (sueldoSemanal, semanasEnUnMes) {
    return sueldoSemanal * semanasEnUnMes
}

let semanalADiario = function (sueldoSemanal, diasEnUnaSemana) {
    sueldoSemanal / diasEnUnaSemana
}

let semanalAHorario = function (sueldoSemanal, horasEnUnaSemana) {
    return sueldoSemanal / horasEnUnaSemana
}

//////////////////////////////
let diarioAAnual = function (sueldoDiario, diasEnUnAño) {
    return sueldoDiario * diasEnUnAño
}
let diarioAMensual = function (sueldoDiario, diasEnUnMes) {
    return sueldoDiario * diasEnUnMes
}
let diarioASemanal = function (sueldoDiario, diasEnUnaSemana) {
    return sueldoDiario * diasEnUnaSemana
}
let diarioAHorario = function (sueldoDiario, horasEnUnDia) {
    return sueldoDiario / horasEnUnDia
}

///////////////////////////////
let horarioAAnual = function (sueldoHorario, horasEnUnAño) {
    return sueldoHorario * horasEnUnAño
}

let horarioAMensual = function (sueldoHorario, horasEnUnMes) {
    return sueldoHorario * horasEnUnMes
}
let horarioASemanal = function (sueldoHorario, horasEnUnaSemana) {
    return sueldoHorario * horasEnUnaSemana
}
let horarioADiario = function (sueldoHorario, horasEnUnDia) {
    return sueldoHorario * horasEnUnDia
}


const $botonSueldo = document.querySelector('#ingresar')

$botonSueldo.onclick = function () {
    //alert('hiciste click')
    let textoResultado
    let sueldoUsuario = Number(document.querySelector('#sueldoUsuario').value)
    let lapsoSueldo = document.querySelector('#lapsoSueldo').value
    let lapsoBuscado = document.querySelector('#lapsoBuscado').value
 

    if (lapsoSueldo == 'año' || lapsoSueldo == 'años' || lapsoSueldo == 'anual') {
        if (lapsoBuscado == 'mensual' || lapsoBuscado == 'meses' || lapsoBuscado == 'mes') {
            textoResultado = 'tu sueldo mensual es de: ' + anualAMensual(sueldoUsuario, mesesEnUnAño)
        } else if (lapsoBuscado == 'semanas' || lapsoBuscado == 'semana' || lapsoBuscado == 'semanal') {
            textoResultado = 'tu sueldo semanal es de: ' + anualASemanal(sueldoUsuario, semanasEnUnAño)
        } else if (lapsoBuscado == 'diario' || lapsoBuscado == 'dias' || lapsoBuscado == 'dia') {
            textoResultado = 'tu sueldo diario es de: ' + anualADiario(sueldoUsuario, diasEnUnAño)
        } else if (lapsoBuscado == 'horario' || lapsoBuscado == 'hora' || lapsoBuscado == 'horas') {
            textoResultado = 'tu sueldo por hora es de: ' + anualAHorario(sueldoUsuario, horasEnUnAño)
        }
        document.querySelector('#resultado').innerText = textoResultado
        return false
    }

    else if (lapsoSueldo == 'mes' || lapsoSueldo == 'meses' || lapsoSueldo == 'mensual') {
        if (lapsoBuscado == 'año' || lapsoBuscado == 'años' || lapsoBuscado == 'anual') {
            textoResultado = 'tu sueldo anual es de: ' + mensualAAnual(sueldoUsuario, mesesEnUnAño)
        } else if (lapsoBuscado == 'semanas' || lapsoBuscado == 'semana' || lapsoBuscado == 'semanal') {
            textoResultado = 'tu sueldo semanal es de: ' + mensualASemanal(sueldoUsuario, semanasEnUnMes)
        } else if (lapsoBuscado == 'dia' || lapsoBuscado == 'dias' || lapsoBuscado == 'diario') {
            textoResultado = 'tu sueldo diario es de: ' + mensualADiario(sueldoUsuario, diasEnUnMes)
        } else if (lapsoBuscado == 'hora' || lapsoBuscado == 'horas' || lapsoBuscado == 'horario') {
            textoResultado = 'tu sueldo horario es de: ' + mensualAHorario(sueldoUsuario, horasEnUnMes)
        }
        document.querySelector('#resultado').innerText = textoResultado
        return false

    } else if (lapsoSueldo == 'semana' || lapsoSueldo == 'semanal' || lapsoSueldo == 'semanas') {
        if (lapsoBuscado == 'anual' || lapsoBuscado == 'año' || lapsoBuscado == 'años') {
            textoResultado = 'tu sueldo anual es de: ' + semanalAAnual(sueldoUsuario, semanasEnUnAño)
        } else if (lapsoBuscado == 'mensual' || lapsoBuscado == 'meses' || lapsoBuscado == 'mes') {
            textoResultado = 'tu sueldo mensual de: ' + semanalAMensual(sueldoUsuario, semanasEnUnMes)
        } else if (lapsoSueldo == ' diario' || lapsoSueldo == 'dia' || lapsoSueldo == 'dias') {
            textoResultado = 'tu sueldo diario es de ' + semanalADiario(sueldoUsuario, diasEnUnaSemana)
        } else if (lapsoBuscado == 'horario' || lapsoBuscado == 'hora' || lapsoBuscado == 'horario') {
            textoResultado = 'tu sueldo por hora es de: ' + semanalAHorario(sueldoUsuario, horasEnUnaSemana)
        }
        document.querySelector('#resultado').innerText = textoResultado
        return false

    } else if (lapsoSueldo == 'dia' || lapsoSueldo == 'dias' || lapsoSueldo == 'diario') {
        if (lapsoBuscado == 'anual' || lapsoBuscado == 'año' || lapsoBuscado == 'años') {
            textoResultado = 'tu sueldo anual es de: ' + diarioAAnual(sueldoUsuario, diasEnUnAño)
        } else if (lapsoBuscado == 'mensual' || lapsoBuscado == 'mes' || lapsoBuscado == 'meses') {
            textoResultado = 'tu sueldo mensual es de: ' + diarioAMensual(sueldoUsuario, diasEnUnMes)
        } else if (lapsoBuscado == 'semanal' || lapsoBuscado == 'semana' || lapsoBuscado == 'semanas') {
            textoResultado = 'tu sueldo semanal es de: ' + diarioASemanal(sueldoUsuario, diasEnUnaSemana)
        } else if (lapsoBuscado == 'horas' || lapsoBuscado == 'horas' || lapsoBuscado == 'horas') {
            textoResultado = 'tu sueldo por hora es de: ' + diarioAHorario(sueldoUsuario, horasEnUnDia)
        }
        document.querySelector('#resultado').innerText = textoResultado
        return false

    } else if (lapsoSueldo == 'hora' || lapsoSueldo == 'horas' || lapsoSueldo == 'horario') {
        if (lapsoBuscado == 'anual' || lapsoBuscado == 'año' || lapsoBuscado == 'años') {
            textoResultado = 'tu sueldo anual es de: ' + horarioAAnual(sueldoUsuario, horasEnUnAño)
        } else if (lapsoBuscado == 'mensual' || lapsoBuscado == 'mes' || lapsoBuscado == 'meses') {
            textoResultado = 'tu sueldo mensual es de: ' + horarioAMensual(sueldoUsuario, horasEnUnMes)
        } else if (lapsoBuscado == 'semanal' || lapsoBuscado == 'semana' || lapsoBuscado == 'semanas') {
            textoResultado = 'tu sueldo semanal es de: ' + horarioASemanal(sueldoUsuario, horasEnUnaSemana)
        } else if (lapsoBuscado == 'diario' || lapsoBuscado == 'dia' || lapsoBuscado == 'dias') {
            textoResultado = 'tu sueldo diario es de: ' + horarioADiario(sueldoUsuario, horasEnUnDia)
        }
        document.querySelector('#resultado').innerText = textoResultado
        return false
    } else {
        textoResultado = 'La operación no pudo ser resuelta. Por favor, intentá de nuevo'
        document.querySelector('#resultado').innerText = textoResultado
        return false
    }
} 

////       parte del html:
<input type='number' placeholder="Ingresá tu sueldo." id="sueldoUsuario" />
    <input type='text' placeholder="Ingresá el periodo de cobro." id='lapsoSueldo'/>
      <input type='text' placeholder="Ingresá como lo buscas." id='lapsoBuscado'/>
    
    <button id = 'ingresar'>Consultar ahora!</button>


*/






/*

let $calcular = document.querySelector("#calcular")


function calcularSalarioMensual(salarioAnual) {
    return salarioAnual / 12}

$calcular.onclick = function () {
    
    console.log("me hicieron click")

    let sueldoResultado
    let salarioAnual = Number(document.querySelector('#salarioAnual').value)
    let salarioMensual 
    //document.querySelector('#salarioMensual').value.innerText 
    //sueldoResultado= calcularSalarioMensual(salarioAnual)
     document.querySelector("#salarioMensual").value=calcularSalarioMensual(salarioAnual)
    //document.querySelector('#salarioMensual').value = sueldoResultado
    return false 

}*/
////////////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////////////


let $calcular = document.querySelector("#calcular")

function calcularSalarioMensual(salarioAnual) {
    return salarioAnual / 12
}



$calcular.onclick = function () {
    let salarioAnual = Number(document.querySelector('#salarioAnual').value)
    let salarioMensual = calcularSalarioMensual(salarioAnual)

    document.querySelector("#salarioMensual").value = salarioMensual

    return false

}

