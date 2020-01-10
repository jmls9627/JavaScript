//*********************EVENTOS DEL MOUSE************* */
const boton=document.querySelector(".boton");

boton.addEventListener('click',function(){
    console.log("se ha pulsado");
})

boton.addEventListener('mouseover',function(){
    console.log("el mouse esta sobre el boton");
})

boton.addEventListener('mouseout',function(){
    console.log("el mouse esta fuera del boton");
})

//*********************EVENTOS DEL TECLADO************* */

window.addEventListener('keydown',function(event){
    console.log("pulsando tecla");
    console.log(event.keyCode);
    console.log(String.fromCharCode(event.keyCode))
})

window.addEventListener('keypress',function(event){
    console.log("tecla pulsada");
})

window.addEventListener('keyup',function(event){
    console.log("tecla liberada");
})

//*********************Carga de documentos************* */

window.addEventListener('load',function(){
    console.log("el contenido de la ventana se ha cargado");
})

//*********************EVENTOS MULTIMEDIA************* */

const video = document.querySelector('.bostonVideo');

video.addEventListener('play',function(){
    console.log("se ha iniciado");
});

video.addEventListener('seeking',function(){
    console.log("se esta buscando en el video", this.currentTime);
});

video.addEventListener('ended',function(){
    console.log("el video ha terminado");
});

/*********************Temporizadores o timers************* */

//setInterval
//setTimeout


var temp=setInterval(function(){ //lo va a realizar muchas veces
   setcolor();
},1000);

/*setTimeout(function(){  //una sola vez
    setcolor();
},3000);*/

function setcolor(){
   var pag=document.body;
   pag.style.backgroundColor = pag.style.backgroundColor =="blue" ? "green" :"blue";
}

function stopchangecolor(){
    clearInterval(temp);
}