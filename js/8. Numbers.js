"strict mode"
/********************Propiedades NUmericas */

console.log("MAx_VAlue", Number.MAX_VALUE);

console.log("Min_Value", Number.MIN_VALUE);

console.log("NEGATIVE_INFINITY",Number.NEGATIVE_INFINITY);

console.log("POSITIVE_INFINITY", Number.POSITIVE_INFINITY);

console.log("NaN", Number.NaN);

/**************************Metodos NUmericos **********************/

var num="10.381";

console.log("number:", typeof num, typeof Number(num));

console.log("parseInt:", parseInt(num));

console.log("parseFloat:", parseFloat(num));

console.log("isNaN:", isNaN(num));

console.log("isInteger:", Number.isInteger(num));

/**************************Metodos NUmericos de instatcias**********************/

var numero=2.5;

console.log("toExponential: ",numero.toExponential(4));

console.log("tofixed: ", numero.toFixed(2));

console.log("toPrecision: ", numero.toPrecision(6));

console.log("toString: ", typeof numero.toString);