"use strict"
/******************** For .... in **********/
var platillos=["ceviche","tacos","pasta"];

for(let i in platillos){
//console.log(platillos[i]);
}

/******************** forEach **********/

//platillos.forEach(platillo => console.log(platillo) )

platillos.forEach( (platillo,i) => console.log( i,platillo) )

/******************** Buscando datos en un arr **********/

//var plateleg = platillos.find(platillo => platillo == "pasta"); //retorna el elemento


var menu = [{
        nombre: "ceviche",
        precio:20,
        pais: "peru"
     },
     {
        nombre: "tacos", 
        precio:10, 
        pais: "mexico"
     },
     {
        nombre: "pasta",
        precio:50 ,
        pais: "Italia"
     },
     {
        nombre: "wacamole",
        precio:50 ,
        pais: "mexico"
     },
];

var plateleg = menu.find(platillo => platillo.nombre =='tacos');
//console.log(plateleg);

/******************** Busqueda de indice de elementos **********/

//var numplat = platillos.findIndex(platillo => platillo=="tacos"); retorna el indice del elemento
  var numplat = menu.findIndex(platillo => platillo.nombre =='tacos');

//console.log("platillo numero: ", numPlatillo);

//********************filtrar arreglo */
var result1=null;

//result = menu.find(platillo => platillo.pais == "Mexico");

result1 = menu.filter(platillo => platillo.pais == "Mexico"); // todos los .pais==meixo
//console.log(result);

//************************* validacion de elemto del un arreglo */

var result2 = menu.some(platillo => platillo.precio == 20);
//console.log("Hay platillos por debajo de 20$?", result2);

var result2 = menu.every(platillo => platillo.precio == 20);
console.log("todos los platillos cuetan menos de 10", result2);