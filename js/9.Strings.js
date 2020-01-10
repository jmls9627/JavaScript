"use strict"
/********************Creando cadenas de texo */

var pais = "Cuba";
var comida = new String("Ceviche");

/********************Medir cadenas de texto */

var mensaje="Estoy Aprendiendo javascript";
console.log("el mensaje tiene " + mensaje.length + " letras");

/***********Metodos de busquedas PART 1*********** */

var result;

//indexof -> encuentra el 1ro
result = mensaje.indexOf("aprendiendo");

//lastIndexOf -> encuentra la ultima
result = mensaje.lastIndexOf("aprendiendo");

//search -> funciona igual que el indexof
result = mensaje.search("aprendiendo");

//search
result = mensaje.search(/ja/i);

console.log(result);

/***********Metodos de busquedas PART 2*********** */

//match
//result = mensaje.match(/aprendiendo/gi);

//substr
//result = mensaje.substr(6.11);

//substring
//result = mensaje.substring(6,17);

//charAt
//result=mensaje.charAt(0);

console.log(result);

/***********Metodos de busquedas PART 3*********** */

//startwith
//result=mensaje.startsWith("es");

//var textoEn= mensaje.indexOf("javascript");
//result= mensaje.startsWith("ja", textoEn);

//endwith
//result=mensaje.endsWith("Javascript");

//includes
//result = mensaje.includes("Javascript",6);

/***********Metodos de generacion reemplazo y separacion*********** */

 //repeat
 //result=mensaje.repeat(200);

 //replace
 //resultado=mensaje.replace("Javascript", " a programar");

 //slice
 //result=mensaje.slice(6);
 //result=mensaje.slice(6,16);

 //split
 //result= mensaje.split(" ");

 //trim
  //resultado=mensaje.trim();

  console.log(result);

  /**************************Metoodos de transformacion******** */

  var mensaje0="Estoy Aprendiendo javascript";
  var mensaje1="y programacion";
  var total=123456;

  var res;

  res=total.toString();
  res=mensaje0.toLowerCase();
  res=mensaje0.toUpperCase();
   

  res=mensaje0.concat(mensaje1,"y tengo muchas ideas");
  
  
  /****************************plantillas y literales */
   
  var len="javascript";
  var len0="HTML";
  var msg=`Me gusta ${len} y su integracion con ${len0}`

  //****multilinea

  var msgmult=`
  hola mundo,
  estoy aprendiendo
  ${len} y me gusta
  como se integra con Html y Css`
  
  /******* */