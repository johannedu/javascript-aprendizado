var numero = 9;

var positivoEpar = numero >= 1 || numero % 2=== 0;
var par = numero <= 0 || numero % 2 === 0;
var positivo = numero >= 1 || numero % 2 !== 0;

if (positivoEpar){
    console.log("POSITIVO E PAR")
}   else if (par){
    console.log ("NUmero negativo, porém PAR")
}   else if (positivo){
    console.log ("Numero positivo, porem não é PAR")
}
    else {
        console.log ("NEGATIVO")
    }