var pessoa = {
    nome: 'Johann',
    idade: 18,
    profissao: "Web-Designer",
    possuiFaculdade: true,
}



console.log (Math.PI);

console.log (Math.random());



var height = 120;
var menu = {
  width: 800,
  height: 50,
  metadeHeight() {
    return this.height / 2;      //this retorna dentro da funcao a variavel
  }
}

menu.metadeHeight()