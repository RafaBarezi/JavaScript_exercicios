alert("Vamos testar seu IMC!");
let peso = parseInt(prompt("Qual é o seu peso?"));
let altura = parseInt(prompt("Qual é o sua altura?"));

function calculoIMC(altura, peso) {
    //
    return (peso / (altura * altura)) * 10000;
}

// valor retornado com apenas duas casas: 
alert(`Seu IMC é ${calculoIMC(altura, peso).toFixed(0)}`);