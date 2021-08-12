var nombre = "Faber Ordoñez";
var estatura =165;

// document.write(nombre + " " + estatura);
function imprimir() {
    var datos = document.getElementById("datos");
    datos.innerHTML = nombre + " " + estatura;
    datos.innerHTML += "<h1> Soy: " + nombre + "</h1>";/* Concatena con ek HTML ya existente */
}
/*Objeto Literal */

var coche = {
    moodelo :2020,
    marca:"mercedes",
    atributo: "valor",

    mostrarDatos(){
        console.log(this.moodelo + " " + this.marca)
    }
};

console.log(coche);
document.write(coche.marca);
coche.mostrarDatos();
