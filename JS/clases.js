class Coche{

    constructor(marca,velocidad,modelo){
        this.marca = marca,
        this.velocidad= velocidad,
        this.modelo = modelo;
    }
    aumentarVelocidad(){
        this.velocidad += 1;
    }
    reducirVelocidad(){
        this.velocidad -=1;    }
}

// Definiendo el objeto con base a la clase
var coche1 = new Coche("BMV",150,2022); 
var coche2 = new Coche("Mazda",200,2020);

coche1.aumentarVelocidad();  //Modificando el valor de los  atributos del objeto

console.log(coche1);  //Muestra el objeto por consola
console.log(coche1.velocidad); //Muestra modelo del coche por consola
document.write(coche1.marca);