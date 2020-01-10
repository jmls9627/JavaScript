"use strict"
/***********************Alert******************************/
const video = document.querySelector('.bostonVideo');

/*video.addEventListener('ended',function(){
    alert("Mensaje \n  Se ha terminado el video");
});
/***********************Confirmation window******************************/

video.addEventListener('ended',function(){
    let res=confirm("desea ver e video de nuevo");
    console.log(res);
    if(res){
        video.play();
    } else{
        window.location="http://www.google.com";
    }
});
/**************************ventana ingreso de datos********** */

video.addEventListener('ended',function(){
    let email=prompt("escriba su correo", "data@info.com");
    
    if(email==null||email==""){
        console.log("sin datos")
    } else{
        console.log(email);
    }
});