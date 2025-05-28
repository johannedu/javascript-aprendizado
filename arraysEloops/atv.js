// Crie uma array com os anos que o Brasil ganhou a copa
// 1959, 1962, 1970, 1994, 2002

var anoCopa = [1959, 1962, 1970, 1994, 2002];

// Interaja com a array utilizando um loop, para mostrar
// no console a seguinte mensagem, `O brasil ganhou a copa de ${ano}`

for (var i = 0; i < anoCopa.length; i++ ){
    console.log (`O Brasil ganhou as copas de ano: ${anoCopa[i]}`);
}


// Interaja com um loop nas frutas abaixo e pare ao chegar em Pera
var frutas = ['Banana', 'Maçã', 'Pera', 'Uva', 'Melância']

for (var i = 0; i < frutas.length; i++){
    console.log (frutas[i]);
    if (frutas[i] === 'Pera'){
        break
    }
}

// Coloque a última fruta da array acima em uma variável,
// sem remover a mesma da array.

var Melancia = frutas[frutas.length - 1];

console.log (Melancia)

var idade = 20;

var podeBeber; 
podeBeber = (idade >= 14) ? 'Pode Beber': 'Não Pode beber';

console.log(podeBeber);

// Some 500 ao valor de scroll abaixo,
// atribuindo o novo valor a scroll
var scroll = 1000;

scroll += 500;

console.log (scroll);

// Atribua true para a variável darCredito,
// caso o cliente possua carro e casa.
// E false caso o contrário.
var possuiCarro = true;
var possuiCasa = true;
var darCredito;

darCredito = (possuiCarro && possuiCasa);

console.log (darCredito)

function mostrarCarro() {
  var carro = 'Fusca';
  console.log(carro);
}

mostrarCarro(); // Fusca no console





