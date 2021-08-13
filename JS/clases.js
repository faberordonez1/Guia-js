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

//Heredando Autobus de la clase coche
class Autobus extends Coche {
    constructor( marca, velocidad, modelo ) {
        super( marca, velocidad, modelo );  //Invoca al constructor de la clase padre
        this.altura = 6;  //Define un nuevo atributo a la clase heredada 
    }

    mostrarAltura() {
        console.log("La altura del Autobus es " + this.altura);
    }
}
 //Definiendo un objeto con la clase heredada
 var autobus1 = new Autobus ("Mercedez",100,2019);

 autobus1.aumentarVelocidad(); //Ejecuta el método heredado
 autobus1.mostrarAltura();  //Ejecutando el nuevo método de la clase hereda
 console.log(autobus1.velocidad);  //imprime un atributo