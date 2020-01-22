"use strict"
//***************DOM and BOM  */

var boton=document.getElementById("boton");

boton.addEventListener("click", function(){
//console.log(window.location.href);

window.location.href="http://google.com";

});

//***********************propiedades y metodos del DOM */

var todosp=document.getElementsByTagName("p");//[] de las etiquetas p
var principal=document.getElementsByClassName("pricipal")[0];//[] de las clases pricipal  .textContent

var foto= document.createElement("img");
foto.src="foto1.jpg";
foto.name="foto1";
foto.width=400;
document.body.appendChild(foto);

foto.addEventListener("click",function(){//esta funcion cambia la imagen
 if(this.name==="foto1"){
     this.src="foto2.jpg";
     this.name="foto2";
 } else{
    this.src="foto1.jpg";
    this.name="foto1";
 }
});

boton.addEventListener("click", function(){ //cambia el css del boton 
    boton.style.backgroundColor="green";
    boton.style.color="white";
    boton.style.width="200px";
})

//***********************propiedades y metodos del BOM */

console.log("innerHeight",window.innerHeight);
console.log("innerHeight",window.innerWidth);

localStorage.setItem("contenido","codigo y cafe es una gran combinacion.");
//var contenido=localStorage.getItem("contenido");

boton.addEventListener("click",function(){

    var contenido = localStorage.getItem("contenido");
    principal.innerHTML=contenido;

    window.history.forward();// avanzar
    window.history.back();// regresar
    window.history.go(3);// mover a trvez del historico
});