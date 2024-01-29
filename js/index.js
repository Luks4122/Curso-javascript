

let loginAlert = alert("¿Estás registrado? Iniciá sesión!")

let userLogin = prompt("Nombre de usuario");

let password = prompt("Por favor, ingresá tu contraseña");

if (userLogin === "Lucas123" && (password === "123")) {
    console.log("Bienvenido de nuevo, Lucas!");
}
else {
    console.log("Nombre de usuario o contraseña incorrectos");
}


//! ---------------------------- Prueba calculadora ------------------------------

/* Funciones, suma, resta, etc */

function sumar(a, b) {
    return a + b;
}

function restar(a, b) {
    return a - b;
}

function multiplicar(a, b) {
    return a * b;
}


function dividir(a, b) {
    return a / b;
}

let continuar = true;
while (continuar) {
    let operacion = prompt("Ingrese la operación (+, -, *, /)");
    if (operacion.toLowerCase() === 'salir') {
        continuar = false;
        continue;
    }    
    let num1 = parseFloat(prompt("Ingrese el primer número:"));
    let num2 = parseFloat(prompt("Ingrese el segundo número:"));
    let resultado;
    switch (operacion) {
        case '+':
            resultado = sumar(num1, num2);
            break;
        case '-':
            resultado = restar(num1, num2);
            break;
        case '*':
            resultado = multiplicar(num1, num2);
            break;
        case '/':
            if (num2 !== 0) {
                resultado = dividir(num1, num2);
            } else {
                resultado = "No se puede dividir por cero";
            }
            break;
        default:
            resultado = "Operación no válida";
    }
    console.log(`El resultado de ${num1} ${operacion} ${num2} es: ${resultado}`);
}


//! funcion flecha


/* const resta = (a, b) => a - b;

console.log (resta(24, 20));

const suma = (a, b) => a + b;

console.log (suma(24, 20)); */

/* let suma = 0;
let continuar;

do{
    const NUMERO = parseFloat(prompt("Ingresar el número a sumar"));

    if(!isNaN(NUMERO)){
        SUMA += NUMERO;
        continuar = prompt ("¿Quiere ingresar otro número? (Sí o No)").toLowerCase();
    }
    else{
        alert ("Ingresamos un número válido");
        continuar = "Sí";
    }
} while(continuar === "Sí");

console.log ("La suma total es:" + suma) */
/* let contador = 1;

while(contador <=5){
    console.log("numero:" + contador);
    contador++
}

console.log ("bucle completado")

let segundos = 10;

while(segundos >= 0){
    console.log("cuenta regresiva" + " " + segundos);
    segundos--;
}

console.log ("tiempo cumplido");
 */
//* --------------------------- Tablas ---------------------------------------------------

/* const NUMERO = 5;

for (let i = 0; i<=10; i++){
    const resultado = NUMERO * i;
    console.log (NUMERO + " x " + i + " " + "=" + " " + resultado);
}  */


/* const NUMERO = 7;

for (let i = 0; i<=10; i++){
    const resultado = NUMERO * i;
    console.log (NUMERO + " x " + i + " " + "=" + " " + resultado);
} 
 */



/* let y = 0;
do{
    console.log ("Ciclo número " + z);
    z++;
} while (y < 5); */

/* let inicioSesion = prompt ("¿Iniciar sesión? Sí o No");

if (inicioSesion === "No") {
    console.log ("Por favor, inicia sesión");
}
else{
    console.log ("Bienvenido de nuevo!")
} */

/* let userName = prompt ("Por favor, ingresá tu nombre de usuario");

let password = prompt ("Por favor, ingresá tu contraseña");

if (userName === "Pepe123" && (password === "123" || password === "321")){
    console.log ("Iniciaste sesión");
}
else{
    console.log ("");
}

 */