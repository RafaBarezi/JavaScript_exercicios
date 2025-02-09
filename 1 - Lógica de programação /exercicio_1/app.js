alert("Bem vindo(a) ao jogo!");
let numMaximo = 10
//let armazena entrada 
let numeroSecreto = parseInt(Math.random() * numMaximo + 1); // Gera um número entre 1 e 10
// Os números aleatórios gerados sempre são decimais entre 0 e 1, por isso é preciso multiplicar por 10 neste caso 
// parseInt arredonda para int

//console só aparece para o desenvolvedor
console.log("Jogo do número secreto");

//prompt armazena saída
let chute;
let tentativas = 1;

//while serve para não enecerrar o jogo até acertar

while (chute != numeroSecreto) {
    chute = prompt(`Escolha um número entre 1 e ${numMaximo}`);

    //alert serve para informar e interagir, é uma caixa de diálogo
    if (chute == numeroSecreto) {
        break; // parar se acertar
    } else {
        if (numeroSecreto > chute) {
            alert(`O numero secreto é maior que ${chute}`); //para concatenar, se usa ASPAS e $
        } else {
            alert(`O numero secreto é menor que ${chute}`);
        }
        // tentativas = tentativas + 1 é = tentativas ++
        tentativas++;
    }
}

let palavraTentativa = tentativas > 1 ? "tentativas" : "tentativa";
alert(`Você acertou o numero secreto  ${numeroSecreto} com ${tentativas} ${palavraTentativa}.`);

// if (tentativas>1){
//     alert(`Você acertou o numero secreto  ${numeroSecreto} com ${tentativas} tentativas!`);
// }else {
//     alert(`Você acertou o numero secreto  ${numeroSecreto} com ${tentativas} tentativa!`);
// }

//Para que o código atuaalize sozinho, usamos a extensão live server