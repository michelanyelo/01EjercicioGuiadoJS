// Solicitar la cantidad de días
let totalDias = parseInt(prompt("Ingrese la cantidad de días:"));

// Calcular años, semanas y días
let años = Math.floor(totalDias / 365);
let semanas = Math.floor((totalDias % 365) / 7);
let días = totalDias % 365 % 7;

// Mostrar resultados en el documento
document.write(`${totalDias} días equivalen a:<br>`);
document.write(`${años} año(s)<br>`);
document.write(`${semanas} semana(s)<br>`);
document.write(`${días} día(s)<br>`);
