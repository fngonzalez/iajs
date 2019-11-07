// Preguntarle al usuario su nombre.
// Si el nombre del usuario es el mismo que  el  de ustedes
// Imprimir "Hola, Tocayo! Yo también me llamo " y su nombre.
// Elijan otro nombre, puede ser de un pariente, amigo, conocido.
// Si el nombe del usuario es el mismo que el que nombre que eligieron
// Imprimir "Hola " y el nombre, " te llamás igual que mi ..."
// Si no, simplemente imprimir "Hola " + nombre!
/*
let nombreUSuario = prompt('Hola! Por favor decime tu nombre: ');

if (nombreUSuario == 'Federico') {
    console.log('Hola, Tocayo! Tenemos el mismo nombre!')
} else if (nombreUSuario == 'Hugo') {
    console.log('Hola, Hugo! Te llamás igual que mi viejo!')
} else (console.log(`Hola ${nombreUSuario}, ¿cómo estás?`));
*/

//Tarea 2:
// Preguntar la edad del usuario
// Hacerle saber si tiene más, menos ó la misma edad que nosotros.
/*
let edadUsuario = Number(prompt('¡Hola! Por favor, ingresa tu edad: '));

if (edadUsuario == 21) {
    console.log('Hola! Tenemos la misma edad, que coincidencia!');
} else if (edadUsuario < 21) {
    console.log('Hola. Sos menor que yo!');
} else if ( edadUsuario > 21){
    console.log('Hola! Sos mas grande que yo. Espero poder llegar con tu sabiduría')
} else (console.log('Éste programa solamente admite números'))
*/

//Tarea 3:
// Preguntarle al usuario si tiene documento, y que conteste con "si" o "no".
// Si dice si, preguntarle la edad.
// Si la edad es mayor a 18, dejarlo entrar al bar.
// Si la edad es menor a 18, no dejarlo entrar al bar.
// Si no tiene documento, no dejarlo entrar al bar.
// Si no entendemos la respuesta, le decimos que no entendimos la respuesta.
// Punto bonus: SI, NO, Si, No, si, no.
/*
let consultaUsuario = prompt('Hola, ¿tenés documento?')

if (consultaUsuario.toLowerCase().toUpperCase() == 'si') {
    let mayoriaDeEdad = prompt('Por favor, ingresá tu edad:')
    if (mayoriaDeEdad >= 18) {
        console.log('Muy bien, podes pasar.')
    } else if (mayoriaDeEdad < 18) {
        console.log('En éste lugar no podes pasar.')
    } else (console.log('Por favor, ingresa tu edad en numeros.'))
}else if (consultaUsuario.toLowerCase().toUpperCase() == 'no'){
    console.log ('Anda a buscar tu documento')
}else (console.log('Disculpame, no entendí'))  
*/


/*



const edadMadre = 52
const edadCreador = 21

function compararEdades(edadUsuario) {
    if (edadUsuario = (edadUsuario.trim().length() == 0) || '') {
        console.log('No ingresaste nada')
    } else if (edadUsuario = edadCreador) {
        console.log('¡Tenemos la misma edad!')
    } else if (edadUsuario < edadCreador) {
        console.log('Sos más chico que yo!')
    } else if (edadUsuario > edadCreador) {
        console.log ('Sos mayor que yo. Espero llegar igual que vos!')
    }
}

const edadMinimaBar = 18
const puedeEntrar = 'Bienvenido al bar'

function edadMinimaBar (edadUsuario)
*/

//////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////




