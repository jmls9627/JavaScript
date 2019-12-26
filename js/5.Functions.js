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

  //***************Parametros spread****************

  function cocinar1(ingre1, ingre2, ...masingre){
    console.log("ingrediente1 ",ingre1 );
    console.log("ingrediente2 ",ingre2);
    console.log("demas ingredientes",masingre);
}

var ingredientes=["pollo","tomate"];
cocinar(...ingredientes,"malanga","arroz","agua");

//***************FUNCIONES ANONiMAS  ****************
(
    function(){
        var msj="hola";
        console.log(msj);
    }
)()

var sal=function(nombre){
    var msj="hello ", nombre;
    return msj;
}

//***************callbacks  ****************

function calcular(x,y,sumacb,restacb){
    var suma=x+y;
    var resta=x-y;

    sumacb(suma);
    restacb(resta);
}

calcular(3,2,function(result){
console.log("suma",result)
},function(result){
    console.log("resta",result)
})

//***************funcion arrow|fat arrow|lambda ****************

var saludar2=nombre =>"hola"+nombre;
console.log(saludar2("susana"));

var sumar=cant =>cant+10
console.log(sumar(10));

var calc=(a,b) =>a+b
console.log(calc(3,4));

var generar=(a,b) =>{
    var c=5;
    return a+b+c;
}
console.log(generar(10,15));

var validar= () =>{
    return "validacion correcta";
}
console.log(validar());