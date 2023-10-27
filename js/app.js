// Comentarios Aquí está la alerta

// alert('alerta desde archivo externo')

// alert("string es un texto")

// console.log("esta es la consola 💿");
// console.log('tambien es un string');
// console.log(20);
// console.log("20");
// console.log(20.6);
// console.log(20, 6);

// console.log(true)
// console.log(false)

// console.log("false")

// let nombreUsuario = "Raúl";
// let edadUsuario = 33;
// console.log(nombreUsuario);
// console.log(edadUsuario);


// let nombreUsuario = "Raúl";
// let edad = 33
// console.log("mi nombre es:" + nombreUsuario + " " + edad)

// let numeroUno = "33";
// let numeroDos = 55;
// console.log(numeroDos + numeroUno);

// let numeroUno = prompt("ingrese un numero");
// console.log(numeroUno)

// let numeroUno = parseInt(prompt("ingrese un numero 1"));
// let numeroDos = parseInt(prompt("ingrese un numero 2"));


// let resultado = numeroUno + numeroDos;
// console.log(resultado);

// let resultado = 10.5 % 20;
// console.log(resultado)

// let resultado = !false;
// console.log(resultado)


// let stringUsuario = prompt('Escriba "Javascript"')

// if (stringUsuario === "Javascript") {

//     console.log('correcto')
// }
// else {
//     console.log('falso')
    
// }

// let numUsuario = parseInt(prompt("Ingrese un número del 1 al 10"));

// if (numUsuario <= 10) {
//     console.log('perfecto!!')
// }
// else {
//     console.log('mal, era del 1 al 10')
// };


// let opcionUsuario = prompt(`
// Elija una opción:
// 1: Libros
// 2: Películas
// 3: Juegos
// `);

// console.log(opcionUsuario)


// switch (opcionUsuario) {
//     case '1':
//         console.log('Lee el principito')
//     break;
//     case '2':
//         console.log('ve Matrix')
//     break;
//      case '3':
//         console.log('Juega a Need For Speed')
//      break;
//     default:
//         console.log('Opción no válida')
//      break;
// }


// let numero = 1;

// while (numero <= 10) {
//     console.log(numero)
//     // numero = numero + 1
//     numero ++
// };

// console.log('fin numero' + ' ' + numero);

// // JUEGO GUESS THE NUMBER
// let numeroMaquina = Math.floor(Math.random() * (10 - 1) + 1);
// console.log(numeroMaquina);

// let vidas = 3;

// let numeroUsuario = parseInt(prompt('Adivine el numero del 1 al 10'));

// while (numeroMaquina !== numeroUsuario && vidas >= 1) {

//     let mensaje = (numeroMaquina > numeroUsuario) ? 'El numero máquina es mayor' : 'El número máquina es menor';

//     console.log('Te equivocaste!' + ' ' + 'vidas ' + vidas + ' ' + mensaje)
//     numeroUsuario = parseInt(prompt('Numero del 1 al 10'));
//     vidas --;
// }

// if (numeroMaquina === numeroUsuario) {
//     console.log('Ganaste 😎');
// }else {
//     console.log('Perdiste 😤');
// };



    

// let frutas = ["melon", "sandia", "pera", "castañas"];
// console.log(frutas);
// console.log(frutas.length);

// console.log(frutas[0]);
// console.log(frutas[1]);
// console.log(frutas[2]);
// console.log(frutas[3]);
// console.log(frutas[4]);

// for (let i = 0; i < frutas.length; i++){
//     console.log(frutas[i])
// };


// // for of. Forma simplificada de for
// for (let fruta of frutas) {
//     console.log(fruta)
// };

// // for in. Forma simplificada de for para iterar el indice
// for (let fruta in frutas) {
//     console.log(fruta)
// };

// let nombreUsuario = "Raul"
// for (let letra of nombreUsuario) {
//     // console.log(letra);
// };



// FUNCIONES

// function saludar(nombreUsuario) {
//     return ("¡Bienvenido! " + nombreUsuario);
//     console.log("¡Bienvenido! " + nombreUsuario);
// };

// console.log(saludar("Raúl"));


// function sumar(n1, n2) {
//     return parseInt(n1) + parseInt(n2);
// }

// let numUno = prompt("Ingrese primer Numero");
// let numDos = prompt("Ingrese Segundo Numero");

// console.log(sumar(numUno, numDos));

// let nombreUsuario = "Raúl";
// console.log('Bienvenido: \n' + nombreUsuario);


// interpolación
// let nombreUsuario = "Raúl";
// let estado = false;

// console.log(`Bienvenido:
// ${nombreUsuario.toUpperCase()}`);

// //operador ternario
// console.log(`${estado ? 'en linea' : 'offline'}`);


// var vs let vs const

// var nombreUsuario = "Raúl";
// var nombreUsuario = "Cordero";

// console.log(nombreUsuario);



// let nombreUsuario = "Raúl";
// let nombreUsuario = "Cordero";

// console.log(nombreUsuario);



// var estado = true

// if (estado){
    
//     console.log('entró al if');
//     var estado = false;
// }

// console.log(estado)

// let estado = true

// if (estado){
    
//     console.log('entró al if');
//     let estado = false;
//     console.log(estado)
// }

// console.log(estado)


// let scope
// for (let i = 1; i < 10; i++) {
//     console.log(i)
// };

// console.log(i);




// const estado = true;
// estado = false;


// for (const i = 0; i < 5; i++){
//     console.log(i);
// }


// const estado = true;
// if (estado) {
//     const estado = false;
//     console.log(estado);
// }
// console.log(estado);


// const frutas = [];
// frutas[0] = "sandía";

// console.log(frutas);


// Array (push, pop, shift, unshift)

// const frutas = ["sandía", "pera", "banana"];

// frutas.push("fresa");

// console.log(frutas)


// const frutas = ["sandía", "pera", "banana"];

// const frutaEliminada = frutas.pop();

// console.log(frutas);
// console.log(frutaEliminada);


const frutas = ["sandía", "pera", "banana"];

const frutaEliminada = frutas.shift();

console.log(frutas);
console.log(frutaEliminada);

