"use strict"
//***************Condicion IF - ELSE - IF ****************
var x= 50;
var y= 20;
var c= 5;
var result="No data";
var edad=30;
var resultado="";

if ( x > y ) {
    result = "x es mayor q y";
}
 else if(y > x){
     result="y es mayor q x"
 }

else {
result="Son iguales"
}
console.log("La evaluacion es :" ,result );

//***************Condiciones anidadas ****************


if ( x > y ) {   //if (x > y && x > c)
    result= "x es mayor q y"
    
    if( x > c ){
     result = "'x' es mayor q 'y' y 'c'";
    }
}
 else if(y > x){
     result="'y' es mayor que 'x'"
 }

else {
result="Son iguales"
}
console.log("La evaluacion es :" ,result );


//***************Estructura switch ****************
 switch(edad){
     case 10:
         resultado = "la edad es 10"; 
     break;
     case 20:
         resultado = "la edad es 20";
     break;
     case 30:
         resultado = "la edad es 30"
     break;
     default:
         resultado="ningun resultado coincide";
     break;
 }

 console.log("el resultado es :",resultado);

 // EVALUACION EN CADENAS DE TEXTOS

 var prod="TV";

 switch(prod){
    case "TV":
        resultado = "se eligio TV"; 
    break;
    case "radio":
        resultado = "se eligio radio";
    break;
    case "laptop":
        resultado = "Se eligio laptop"
    break;
    default:
        resultado="No se eligio ningun producto";
    break;
}
console.log("el resultado es :", prod);





 


