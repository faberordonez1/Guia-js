#Javascript

##Como iniciar

1. Para trabajar con JS debemos tener un HTML en el cual cargarlo, y acontinuacion tenemos 2 alternativas para integrarlo al HTML
2. Escribir codigo dentro de la etiqueta script de html (No se recomienda)

Enlazar un archivo JS externo con el atributo src de la etiqueta script indicando la ruta relativa del archivo js, es la forma mas recomendada y optima lo ideal es cargarlo al final del archivo, por el orden de lectura del HTML y Javascript.

~~~
var nombre = "faber";
var edad = 165;
var concatenacion = nombre + " " + altura;
document.write(concatenacion); // Esto imprime en el DOM (faber 165)
---
var datos = document.getElementById("datos"); // Se capturan un contenedor HTML con la clase datos
datos.
datos.innerHTML = nombre + " " + estatura; // Esto imprime en el contenedor (faber 165) a este metodo se le llama template string
---
Con el operador (+=) concatenamos el nuevo contenido al ya existente en el contenedor a diferencia de (=) que remplaza todo el contenido
~~~