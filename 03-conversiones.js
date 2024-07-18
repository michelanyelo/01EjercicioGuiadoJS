// Solicitar la temperatura en grados Celsius
let celsius = parseFloat(prompt("Ingrese la temperatura en grados Celsius: "));

// Convertir a Kelvin y Fahrenheit
let kelvin = celsius + 273.15;
let fahrenheit = (celsius * 9 / 5) + 32;

// Mostrar resultados en el documento
document.write(`Temperatura en grados Celsius: ${celsius}°C<br>`);
document.write(`Temperatura en grados Kelvin: ${kelvin} K<br>`);
document.write(`Temperatura en grados Fahrenheit: ${fahrenheit} °F<br>`);
