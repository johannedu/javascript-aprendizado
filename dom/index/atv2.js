// Mostre no console cada parágrado do site

// Mostre o texto dos parágrafos no console

// const paragrafosSite = document.querySelectorAll ('p')

// paragrafosSite.forEach(function(item, index){
//     console.log (item.innerText, index)
// });



// // Como corrigir os erros abaixo:
// const imgs = document.querySelectorAll('img');

// imgs.forEach((item, index) => {
//     console.log(item, index)
// });

// let i = 0;
// imgs.forEach(() => {
//   console.log(i++)
// });

// imgs.forEach(() => i++);


// const menu = document.querySelector ('.menu');

// menu.classList.add('ativo');
// menu.classList.remove('azul');
// menu.classList.toggle('azul');


// const animais = document.querySelector ('.animais');

// animais.attributes;

// animais.attributes [0];

// const img = document.querySelector('img');

// img.getAttribute('src');


// Adicione a classe ativo a todos os itens do menu

const ativo = document.querySelectorAll ('.menu a');

ativo.forEach(function(menu){
    menu.classList.add("ativo")
})

// Remove a classe ativo de todos os itens do menu e mantenha apenas no primeiro

ativo.forEach (function(img){
    img.classList.remove('ativo')
})

ativo[0].classList.add('Ativo')


// Verifique se as imagens possuem o atributo alt

const imgs = document.querySelectorAll('img');

imgs.forEach(function(item){
    const tens = item.hasAttribute('alt')
    console.log(item)
})

// Modifique o href do link externo no menu



