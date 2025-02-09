let numEscolhido = parseFloat(prompt("Escolha um número:"));

function tabuada(numEscolhido) {
    let resultado = ""; // Criando uma string para armazenar a tabuada

    for (let i = 1; i <= 10; i++) {
        resultado += `${numEscolhido} x ${i} = ${numEscolhido * i}\n`; // Adiciona cada linha da tabuada
    }

    return resultado; // Retorna a tabuada como uma string formatada
}

alert(`Tabuada do ${numEscolhido}:\n ${tabuada(numEscolhido)}`);
