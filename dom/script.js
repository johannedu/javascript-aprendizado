const href = window.location.href;

console.log(href)

const h1 = document.querySelector ('h1');

const h1Class = h1.classList;

function callbackh1(){
    console.log ('CLicou em ' + h1.outerHTML);
}


h1.addEventListener ('click', callbackh1);




