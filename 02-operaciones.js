// Solicitar dos números
let numero1 = parseInt(prompt("Ingrese el primer número mayor a cero:"));
let numero2 = parseInt(prompt("Ingrese el segundo número mayor a cero:"));

// Realizar operaciones
let suma = numero1 + numero2;
let resta = numero1 - numero2;
let multiplicacion = numero1 * numero2;
let division = numero1 / numero2;
let modulo = numero1 % numero2;

// Concatenar resultados en una sola cadena
let resultados = `
    Números ingresados: ${numero1} y ${numero2}<br>
    Suma: ${suma}<br>
    Resta: ${resta}<br>
    Multiplicación: ${multiplicacion}<br>
    División: ${division}<br>
    Módulo: ${modulo}<br>
`;

// Mostrar resultados en el documento
document.write(resultados);
