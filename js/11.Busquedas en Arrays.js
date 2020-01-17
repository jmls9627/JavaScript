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

//var plateleg = platillos.find(platillo => platillo == "pasta");


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
     }
];

var plateleg = menu.find(platillo => platillo.nombre =='tacos');
//console.log(plateleg);

/******************** Busqueda de indice de elementos **********/

//var numplat = platillos.findIndex(platillo => platillo=="tacos");
  var numplat = menu.findIndex(platillo => platillo.nombre =='tacos');

console.log("platillo numero: ",numPlatillo);