"use strict"

//*** OPERADORES ARITMETICOS

var A = 20;
var B = 10;

//  +
var sum = A + B;
console.log(A +' + '+ B +' = ', sum);

//  -
var rest = A - B;
console.log( A +' - '+ B +' = ', rest);

// *
var mult = A * B;
console.log( A +' * '+ B +' = ', mult);

//  /
var div = A / B;
console.log( A +' / '+ B +' = ', div);

// MODULO O RESIDUO %
var mod = A % B;
console.log('El módulo o residuo de '+ A +' % '+ B +' = ', mod);

// INCREMENTO ++
var incr = A;
incr++;

//incr = incr+1
console.log('El incremento ++ de '+ A +' = ', incr);


// DECREMENTO --
var decr = A;
decr--;

//decr = decr -1
console.log('El decremento -- de '+ A +' = ', decr); 


//--------------------- **OPERADORES RELACIONALES**-----------------

// MAYOR QUE >
var mayorQue = A > B;
console.log( A +' > '+ B, mayorQue);

// MENOR QUE <
var menorQue = A < B;
console.log( A +' < '+ B, menorQue);

// MAYOR O IGUAL QUE >=
var mayorOigualQue = A >= B;
console.log( A +' >= '+ B, mayorOigualQue);

// MENOR O IGUAL QUE <=
var menorOigualQue = A <= B;
console.log( A +' <= '+ B, menorOigualQue);

// IGUAL QUE ==
var igualQue = A == B;
console.log( A +' == '+ B,igualQue);

// DISTINTO DE !=
var distinto = A != B;
console.log( A +' != '+ B, distinto);


//---------------------*** OPERADORES LOGICOS**-----------------

// OPERADOR Y o AND - &&
var and=(A>10 && B>10);
console.log('Elrsultado de la evalucion es: ', and);

//OPERADOR O U OR - ||
var or=(A>10|| B>10);
console.log("El resultado de la evaluacion es :",or);

//OPERADOR DE NEGACION O  NOT - !
var not=!(A>10);
console.log("El resultado de la evaluacion NOT es :",not);


//---------------------*** OPERADORES ASIGNACION**-----------------


// ASIGNACIÓN SIMPLE
var igual = A;
console.log("El resultado de la asignación simple es: "+ igual);

// SUMAR Y ASIGNAR
var masIgual = 10;

masIgual += A;
//masIgual = masIgual + datoA;
console.log("El resultado de la asignación += es: "+ masIgual)



// RESTAR Y ASIGNAR
var menosIgual = 10;
menosIgual -= A;
console.log("El resultado de la asignación -= es: "+ menosIgual)


// MULTIPLICAR Y ASIGNAR
var porIgual = 10;
porIgual *= A;
console.log("El resultado de la asignación *= es: "+ porIgual)

// DIVIDIR Y ASIGNAR
var entreIgual = 20;

entreIgual /= A;

console.log("El resultado de la asignación /= es: "+ entreIgual)


//---------------------*** OPERADOR DE CONCATENACION**-----------------


var nombre = "Jose";
var apellido = "Manuel";

// CONCATENACIÓN DE NÚMEROS
var concatNumeros = A + B;
console.log("Los números "+ A +" y "+ B +" usados como números concatenados hacen una suma igual a: ", concatNumeros);



// CONCATENACIÓN DE CADENAS DE TEXTO
var concatTexto = nombre + " " + apellido ;
console.log("Los textos "+ nombre +" y "+ apellido +" se unen para formar: ", concatTexto);



// CONCATENACIÓN DE NÚMEROS COMO TEXTO
var concatNumComoTxt  = "2"+"8" ;
console.log("Los números 2 y 8 usados como texto se unen para formar: ", concatNumComoTxt);



// CONCATENACIÓN DE TEXTO Y NUMERO
var concatTxtNum = A + "8" ;
console.log("El número "+ A +" usado como número y 8 como texto se unen para formar: ", concatTxtNum);



//---------------------*** OPERADOR TERNARIO O CONDICIONAL **-----------------
 
//Condicion true : false
var resultado = A>B ?"si es mayor":"no es mayor";
console.log("el resutado es :", resultado);


//---------------------*** OPERADOR de tipo de datos **-----------------

var datoA = A; //(a=10) Número

var nombre1 = nombre; //(nombre=jose) Cadena de texto

var activo = true // Boleano

var persona = {
	edad: 34, // Número
	deporte: 'Correr' // Cadena de texto
} // Objeto

console.log(typeof datoA);
console.log(typeof nombre1);
console.log(typeof activo);

console.log(typeof persona);

console.log(typeof persona.edad);
console.log(typeof persona.deporte);
