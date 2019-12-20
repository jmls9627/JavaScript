 "use strict"
/*------------------intro---------------------------*/

//alert("hola desde un archivo externo");
//console.log('hola console');

var name='jose';
  console.log(name);
var x=3.16;
var publicData="hola";

const pi =3.1416;
/*---------------------variables o contenedores------------------------*/

function saludo(){
   let name='yacals';
     console.log(name);
   let edad=32;
     console.log(edad);
}
 
saludo();

/*---------------------tipos de datos especificos------------------------*/

var edad=35;           //numero
var cant="10";         //string
var newcant= Number(cant); //convirtiendo string -> numero

parseInt();
parseFloat();

var bebida="cerveza";
var comida="carne";

var intr ="le platillo es 'carne' ";
var edad=34;
var edadtxt=String(edad); //convirtiendo  numero -> string 

var activo=true;
var estado= Boolean(10<9);//false

var fecha=new Date();

var simbolo1= Symbol();
var simbolo2= Symbol();
var ambiente=Symbol('dev');

//JSON=> javascript object notation...

var persona={ nombre:"sergio",twitter:"yackfx"};

var personas=[
    { nombre:"cris",twitter:"crsitsa"},
    { nombre:"paco",twitter:"ypaca"},
    { nombre:"santo",twitter:"satacla"},
     persona
]

var personaJSON= JSON.stringify(persona);
var nuevapersona=JSON.parse(personaJSON);