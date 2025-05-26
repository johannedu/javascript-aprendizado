// Verifique se a sua idade é maior do que a de algum parente

// var minhaIdade = 19;
// var idadeMae = 40;

// if (minhaIdade > idadeMae){
//     console.log("Mais velho!");
// }   else if (minhaIdade === idadeMae){
//     console.log("Mesma idade");
// }   else {
//     console.log("Parente é mais velho que eu.")
// }


// // Qual valor é retornado na seguinte expressão?
// var expressao = (5 - 2) && (5 - ' ') && (5 - 2);
// console.log ("Nessa expressão, a primeira se torna um resultado verdadeiro, a segunda também e a terceira também, então pegamos o último resultado verdadeiro, como não houve um false")
// console.log(3)

// // Verifique se as seguintes variáveis são Truthy ou Falsy
// var nome = 'Andre';
// var idade = 28;
// var possuiDoutorado = false;
// var empregoFuturo;
// var dinheiroNaConta = 0;

// console.log (!!nome, !!idade, !!possuiDoutorado, !!empregoFuturo, !!dinheiroNaConta)
// console.log ("String verdadeira, numero verdadeiro, false, não há resposta então é undefined = false, 0 igual a false")

// // Compare o total de habitantes do Brasil com China (valor em milhões)
// var brasil = 207;
// var china = 1340;

// if (brasil > china){
//     console.log ("Brasil com população maior que a da china")
// }   else {
//     console.log ("População menor que a da china")
// }

// // O que irá aparecer no console?
// if(('Gato' === 'gato') && (5 > 2)) {
//   console.log('Verdadeiro');
// } else {
//   console.log('Falso');
// }

// console.log ("false pois na primeira condição já vemos que as iniciais não batem")

// // O que irá aparecer no console?
// if(('Gato' === 'gato') || (5 > 2)) {
//   console.log('Gato' && 'Cão');
// } else {
//   console.log('Falso');
// }

// console.log ("Nessa condicional o resultado sera cão, pois a primeira condição é falsa, pula para uma verdadeira, e na execução do if, temos outra condição dentro ad resposta")

// function faltamViajar (unidade){
//   var paisesExistentes = 193;
//   return `Faltam ${paisesExistentes - unidade} países para conhecer`
// }

// console.log (faltamViajar (12));

// Crie uma função para verificar se um valor é Truthy

function valorTruthy (valor){
  if (!!valor){
    return `Esse valor que voce retornou é truthy ${valor}`
  } else {
    return `Esse valor é false`
  }
}

console.log (valorTruthy(NaN))

// Crie uma função matemática que retorne o perímetro de um quadrado
// lembrando: perímetro é a soma dos quatro lados do quadrado

function quatroLadosQuadrado (valor){
  var calculo = valor * 4;
  return `${valor +  " * " + 4} = ${calculo}`
}

console.log (quatroLadosQuadrado(2))

// Crie uma função que retorne o seu nome completo
// ela deve possuir os parâmetros: nome e sobrenome

function retornarNome (nome, sobrenome) {
  var juncao = nome + " " + sobrenome;
  return `Seu nome é ${juncao}`;
}

console.log (retornarNome("Johann", "Eduardo"))

// Crie uma função que verifica se um número é par

function numeroPar (numero){
  var ePar = numero % 2 === 0;
  if (ePar) {
    return `O número que você escolheu foi: ${numero} e ele é Par`;
  } else {
    return `Esse número que você escolheu foi: ${numero} e ele é Impar`
  }
}

console.log (numeroPar(15))

// Crie uma função que retorne o tipo de
// dado do argumento passado nela (typeof)

function typeOff (){
  var tipoDado = 2;
  return `O dado que voce solicitou é do tipo: ${typeof tipoDado}`;
}

console.log (typeOff());


// addEventListener é uma função nativa do JavaScript
// o primeiro parâmetro é o evento que ocorre e o segundo o Callback
// utilize essa função para mostrar no console o seu nome completo
// quando o evento 'scroll' ocorrer.

addEventListener ('click', function(){
  console.log("Johann");
});

// Corrija o erro abaixo

  var totalPaises = 193;

function precisoVisitar(paisesVisitados) {

  return `Ainda faltam ${totalPaises - paisesVisitados} países para visitar`;
}
function jaVisitei(paisesVisitados, totalPaises) {
  return `Já visitei ${paisesVisitados} do total de ${totalPaises} países`;
}

console.log(precisoVisitar(20));       
console.log(jaVisitei(20, 193));

