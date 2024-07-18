// Solicitar 5 números
let numero1 = parseFloat(prompt("Ingrese el primer número:"));
let numero2 = parseFloat(prompt("Ingrese el segundo número:"));
let numero3 = parseFloat(prompt("Ingrese el tercer número:"));
let numero4 = parseFloat(prompt("Ingrese el cuarto número:"));
let numero5 = parseFloat(prompt("Ingrese el quinto número:"));

// Calcular la suma de todos los números
let suma = numero1 + numero2 + numero3 + numero4 + numero5;

// Calcular el promedio de los 5 números
let promedio = suma / 5;

// Mostrar resultados en el documento
document.write(`Suma de los números: ${suma}<br>`);
document.write(`Promedio de los números: ${promedio}<br>`);
