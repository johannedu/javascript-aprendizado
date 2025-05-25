function areaQuadrado (lado) {
    return lado * lado;
}

console.log(areaQuadrado(2));

function imc (peso, altura) {
    var imc = peso /( altura * altura);
    return imc;
}

console.log (imc(80, 1.8));

function corFavorita (cor){
    if (cor==="Vermelho"){
        return "Eu gosto do céu";
    }   else if (cor === "Verde"){
        return "eu gosto de mato";
    }   else {
        return "EU não gosto de cores"
    }
}

console.log (corFavorita());

addEventListener ('click', function(){console.log("Oi")});

