let numA = parseInt(prompt("Por favor, digite um número:"));
let numB = parseInt(prompt("Digite outro número:"));

function MaiorNumero() {
    (numA > numB) ? alert(`O primeiro número digitado é maior: ${numA} é maior que ${numB}.`): alert(`O segundo número digitado é maior: ${numB} é maior que ${numA}.`);
}

MaiorNumero();
