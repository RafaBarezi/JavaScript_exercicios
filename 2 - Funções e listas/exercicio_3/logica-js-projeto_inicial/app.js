alert("Vamos testar seu IMC!");
let peso = parseInt(prompt("Quanto você pesa?"));
let altura = parseInt(prompt("Qual é a sua altura?"));

function calculoIMC(altura, peso) {
    //
    return (peso / (altura * altura)) * 10000;
}

// valor retornado com apenas duas casas: 
alert(`Seu IMC é ${calculoIMC(altura, peso).toFixed(0)}`);