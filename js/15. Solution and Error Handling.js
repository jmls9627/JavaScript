"use strict"
/*** Manejo de errores*/

try {
    // var array = new Array(10000000000);
    // var x = y;
    
    decodeURIComponent("http://%ominio.com");
} 
catch (error) {
     console.log(error.message);
     console.log(error.name);
}

/*** Errores personalizadoss **************/

var valor1 = 10;
var valor2 = 20;

try {
    if (valor1 > valor2) {
        console.log(`Mensaje de validación: ${valor1} si es mayor que ${valor2}`);
    } else {
        throw new Error(`${valor1} no es mayor que ${valor2} :(`)
    }

} catch (error) {
    console.log(error);
}

