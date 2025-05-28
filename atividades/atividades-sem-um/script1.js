let idade = 17

if (idade >= 18){
    console.log (`Você tem ${idade}, pode beber`);
}   else {
    console.log( `Você tem ${idade}, não pode beber`);
}

for (let i = 1; i <= 10; i++){
    console.log (i)
}

let j = 1;

while (j <= 10) {
  console.log(j);
  j++;
}

const pessoa =  {
    nome : 'André',
    idade : 22,
    temCarteira : true
}

function podeDirigir (){
    if (pessoa.idade >= 18 && pessoa.temCarteira){
        return `Ana pode dirigir`;
    }   else {
        return `Ana não pode dirigir`
    }
}

console.log (podeDirigir());


let numero1 = 5;
let numero2 = 10;

const soma = numero1+=numero2
const divisao = numero1/=numero2

console.log(soma + " " + divisao)

let compras = ['PAO','LEITE','BOLO','TOMATE','PICLES']

for (i = 0; i <= compras; i++ ){
    compras[i]
}

console.log (compras)