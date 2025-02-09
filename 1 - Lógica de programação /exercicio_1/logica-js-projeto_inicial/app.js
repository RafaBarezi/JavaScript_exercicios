alert('Bem-vindo ao site!');

nome = prompt('Por favor, digite o seu nome');
idade = prompt('Agora digite a sua idade');

let mensagemDeErro = 'Erro! Preencha todos os campos';

idade >= 18? alert(`Que bom, ${nome}, você já pode tirar carteira de habilitação!`): alert(`Que pena, ${nome}! \n Você ainda não pode tirar carteira de habilitação! \n Faltam ${18 - idade} anos para você ser maior de idade.`);
