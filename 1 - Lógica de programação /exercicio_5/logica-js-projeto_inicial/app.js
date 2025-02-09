let ponto = parseInt(prompt("Quantos pontos você conseguir?"));

if (ponto >= 75) {
    alert(`Você alcançou ${ponto} pontos! Parabéns, você foi aprovado.`);
} else {
    alert(`Você só conseguiu ${ponto} pontos!\nPrecisava de 75 para passar. Tente novamente.`);
}