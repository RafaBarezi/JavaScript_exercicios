let moedaReal = parseFloat(prompt("Quantos reais você vai investir na compra de outra moeda?"));

function cotacaoDolar(moedaReal) {
    return moedaReal / 5.76; // Convertendo Real para Dólar
}

function cotacaoEuro(moedaReal) {
    return moedaReal / 5.99; // Convertendo Real para Euro
}

alert(`Com R$ ${moedaReal.toFixed(2)}, você pode comprar US$ ${cotacaoDolar(moedaReal).toFixed(2)} ou € ${cotacaoEuro(moedaReal).toFixed(2)}`);