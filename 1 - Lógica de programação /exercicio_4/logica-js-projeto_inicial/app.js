let numDigitado = parseFloat(prompt("Por favor, digite um número"));

if (numDigitado > 0) {
    alert(`${numDigitado} é um número positivo`);
} else if (numDigitado == 0) {
    alert("Você digitou zero!");
} else {
    alert(`${numDigitado} é um número negativo`);
}