"use strict"
//**********************Obteniendo datos con fetch */
var boton = document.getElementById();
var contenedor= document.getElementById();
var posts=null;

boton.addEventListener("click",function(){

    fetch("http:// url que quieras cargar datos")
    .then(data => data.json())
    .then(data=>{
        posts=data
        mostrardatos(posts)
    })


});

function mostrardatos(posts){
    posts.map((post,i)=>{
        let titulo=document.createElement("h1");
        let contenido=document.createElement("p");

        titulo.innerHTML=(i+1) + "-" + post.title;
        contenido.innerHTML= post.body;

        contenedor.appendChild(titulo);
        contenedor.appendChild(contenido);
    })
}