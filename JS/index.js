var nombre = "Faber Ordoñez";
var estatura =165;

// document.write(nombre + " " + estatura);
function imprimir() {
    var datos = document.getElementById("datos");
    datos.innerHTML = nombre + " " + estatura;
    datos.innerHTML += "<h1> Soy: " + nombre + "</h1>";/* Concatena con ek HTML ya existente */
}