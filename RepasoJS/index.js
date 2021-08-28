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

console.log(2+4)//

//Promesas
var saludar = new Promise((resolve, reject) => {  /*resolve=> resultado   reject=>error, no hay resultado */

    setTimeout(() => { /*Espera segundos a que algo se ejecute */ 

        let saludo = false;

        if(saludo){
            resolve(saludo);
        }else{
            reject('no hay saludo disponible')
        }

    },2000)  
})

/*Procesando el resultado de la promesa */
saludar.then(resultado =>{
    alert(resultado);
})
.catch(error =>{    //captura el posible error
    alert(error);
});

sc