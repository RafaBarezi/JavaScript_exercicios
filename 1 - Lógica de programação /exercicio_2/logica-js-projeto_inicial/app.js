// Mostre um alerta com a mensagem "Bem-vindo ao nosso site!".
alert('Bem-vindo ao site!');

// Use um prompt para perguntar o nome do usuário e armazená-lo na variável nome.
nome = prompt('Por favor, digite o seu nome');

// Peça ao usuário para digitar sua idade usando um prompt e armazene-a na variável idade.
idade = prompt('Agora digite a sua idade');

let mensagemDeErro = 'Erro! Preencha todos os campos';

// Agora, caso a idade seja maior ou igual a 18, exiba um alerta com a mensagem "Pode tirar a habilitação!".
idade >= 18? alert(`Que bom, ${nome}, você já pode tirar carteira de habilitação!`): alert(`Que pena, ${nome}! \n Você ainda não pode tirar carteira de habilitação! \n Faltam ${18 - idade} anos para você ser maior de idade.`);
