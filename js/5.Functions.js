"use strict"
//***************estructura basica ****************
/*function saludar(){
    var saludo="hola";
   // console.log("... "+saludo);
    return saludo;
}*/

//***************Parametros ****************

function saludar1(nombre, edad){
   
   console.log("nombre ",nombre);
   console.log("edad ",edad);
   var resultado=nombre + " tiene "+edad+" anos";
  // console.log(resultado);
   return resultado;
}

//console.log(saludar1("jose",23));
 var result=saludar1("jose",23);
console.log(result);

//***************inicializacion de parametros****************
 function contar(cant=20){// por default sale 20 si no se declara la cant
     console.log("total: " ,cant);

 }
 contar(100);

 //***************Parametros Rest****************
 function cocinar(ingr1, ingr2, ...masingr){
     console.log("ingrediente1 ",ingr1 );
     console.log("ingrediente2 ",ingr2);
     console.log("demas ingredientes",masingr);
 }
 cocinar("pollo","tomate","malanga","arroz","agua");