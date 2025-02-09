// Direcionando o pedaço do HTML do código para criar uma variável:
let titulo = document.querySelector("h1");
titulo.innerHTML = "Oi!"

let paragrafo = document.querySelector("p");
paragrafo.innerHTML = "Para começar, digite seu nome e confirme: "

function verificarClique() {
    console.log("Que nome bonito!");
    alert("Que nome bonito!");
}
