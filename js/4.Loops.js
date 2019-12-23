"strict mode"
//**************FOR ****************
var productos =5;

for(let i=0; i<productos; i++){
    console.log("elproducto#",i);
    debugger;
}
//***************Condicion While ****************

while(productos>0){
    console.log("producto vendido");
    productos--;
    debugger;
}
//***************do-while ****************

do{
    console.log("producto vendido");
    productos--;
    debugger
}
while(productos>=1)

//***************Control de ciclos ****************

var cont=0;
var cuenta=0;

for(contador=0; contador<=20; contador++){
    if(contador==5){
        break;
    }
    if( contador%2==0){
        continue;
    }
    cuenta++;
    debugger;
}
console.log("hay"+cuenta+"numeros impares");