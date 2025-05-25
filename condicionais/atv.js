// Verifique se a sua idade é maior do que a de algum parente

var minhaIdade = 19;
var idadeMae = 40;

if (minhaIdade > idadeMae){
    console.log("Mais velho!");
}   else if (minhaIdade === idadeMae){
    console.log("Mesma idade");
}   else {
    console.log("Parente é mais velho que eu.")
}


// Qual valor é retornado na seguinte expressão?
var expressao = (5 - 2) && (5 - ' ') && (5 - 2);
console.log ("Nessa expressão, a primeira se torna um resultado verdadeiro, a segunda também e a terceira também, então pegamos o último resultado verdadeiro, como não houve um false")
console.log(3)

// Verifique se as seguintes variáveis são Truthy ou Falsy
var nome = 'Andre';
var idade = 28;
var possuiDoutorado = false;
var empregoFuturo;
var dinheiroNaConta = 0;

console.log (!!nome, !!idade, !!possuiDoutorado, !!empregoFuturo, !!dinheiroNaConta)
console.log ("String verdadeira, numero verdadeiro, false, não há resposta então é undefined = false, 0 igual a false")

// Compare o total de habitantes do Brasil com China (valor em milhões)
var brasil = 207;
var china = 1340;

if (brasil > china){
    console.log ("Brasil com população maior que a da china")
}   else {
    console.log ("População menor que a da china")
}

// O que irá aparecer no console?
if(('Gato' === 'gato') && (5 > 2)) {
  console.log('Verdadeiro');
} else {
  console.log('Falso');
}

console.log ("false pois na primeira condição já vemos que as iniciais não batem")

// O que irá aparecer no console?
if(('Gato' === 'gato') || (5 > 2)) {
  console.log('Gato' && 'Cão');
} else {
  console.log('Falso');
}

console.log ("Nessa condicional o resultado sera cão, pois a primeira condição é falsa, pula para uma verdadeira, e na execução do if, temos outra condição dentro ad resposta")