// Retorne no console todas as imagens do site

const mostrarImagens = document.querySelectorAll ('img')

console.log (mostrarImagens);


// Retorne no console apenas as imagens que começaram com a palavra imagem

const mostrarImagem = document.querySelectorAll ('img[src^="images/imagem"]')

console.log (mostrarImagem)

// Selecione todos os links internos (onde o href começa com #)

const linksInternos = document.querySelectorAll ('[href^="#"]');

console.log (linksInternos)

// Selecione o primeiro h2 dentro de .animais-descricao

const primeiroH2 = document.querySelector ('.animais-descricao h2')

console.log (primeiroH2.innerHTML)

// Selecione o último p do site

const ultimoPe = document.querySelectorAll ('p');

console.log(ultimoPe[ultimoPe.length - 1])

