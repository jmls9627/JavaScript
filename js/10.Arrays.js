"use strict"
/**********creando arreglos***** */

var platillos=["veviche","tacos","pasta"];
var bebidas= new Array("cerveza","agua","soda") ;

c

/*********** medir acceder a un arr*/

var cant= platillos.length ;

console.log("hay "+ cant + "platillos");

var platillo= platillos[2];
var platillo1= platillos[platillos.length-1];

/***************************************arreglos multidimesionales | arreglo de arreglos */
var menu=[platillos, bebidas];
console.log(menu[1][0]); //cerveza

/************************operaciones basica de un arreglo */

platillos.push("tostada");//ingresa elemento
platillos.pop();//extrae el ultimo elemento
var mes= platillos.join();
console.log(mes);

/*********************** generacion de arreglos con split() from() y of()*/
var mens= "veviche, tacos, pasta";
var platillos2=mens.split(', ');

var platilloshtml=Array.from(document.querySelectorAll(".platillos p"));
var plat= platilloshtml.map(platill =>platill.textContent);

var platillos1= Array.of("veviche", "tacos", "pasta")

/****************************ordenando un arreglo** */

platillos.sort();
platillos.reverse();

/****************************desestructuracion de arreglos** */
//var pla1= platillos[1];
//var pla2= platillos[2];
//var pla3= platillos[3];

var [pla1,pla2,pla3]=platillos; //se esta asignando a cada uno, un elemento del arreglo