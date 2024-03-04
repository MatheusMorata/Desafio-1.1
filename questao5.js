const read = require('readline-sync');

let nome;
do {
    nome = read.question("Digite o nome: ");
    console.clear();
    if (nome.length < 5 || /\d/.test(nome)) {
        console.log("Erro: O nome deve ter pelo menos 5 caracteres e não deve conter números.");
    }
} while (nome.length < 5 || /\d/.test(nome));

let CPF;
do {
    CPF = read.question("Digite o CPF: ");
    console.clear();
    if (CPF.length !== 11 || /[a-zA-Z]/.test(CPF)) {
        console.log("Erro: O CPF deve conter exatamente 11 dígitos e não deve conter letras.");
    }
} while (CPF.length !== 11 || /[a-zA-Z]/.test(CPF));

CPF = CPF.replace(/(\d{3})(\d{3})(\d{3})(\d{2})/, "$1.$2.$3-$4");

let dia;
do {
    dia = read.question("Digite o dia de nascimento: ");
    console.clear();
    if (isNaN(dia) || parseInt(dia) < 1 || parseInt(dia) > 30) {
        console.log("Erro: O dia de nascimento deve ser um número entre 1 e 30.");
    }
} while (isNaN(dia) || parseInt(dia) < 1 || parseInt(dia) > 30);

let mes;
do {
    mes = read.question("Digite o mes de nascimento: ");
    console.clear();
    if (isNaN(mes) || parseInt(mes) < 1 || parseInt(mes) > 12) {
        console.log("Erro: O mes de nascimento deve ser um número entre 1 e 12.");
    }
} while (isNaN(mes) || parseInt(mes) < 1 || parseInt(mes) > 12);


let ano;
do {
    ano = read.question("Digite o ano de nascimento: ");
    console.clear();
    if (isNaN(ano) || parseInt(ano) < 1920 || parseInt(ano) > 2024) {
        console.log("Erro: O ano de nascimento deve ser um número entre 1920 e 2024.");
    }
} while (isNaN(ano) || parseInt(ano) < 1920 || parseInt(ano) > 2024);

let renda;
do {
    renda = read.question("Digite a renda mensal: ");
    console.clear();
    if (isNaN(renda) || parseFloat(renda) < 0) {
        console.log("Erro: A renda mensal deve ser um número não negativo.");
    }
} while (isNaN(renda) || parseFloat(renda) < 0);
renda = parseFloat(renda).toFixed(2);

let estado_civ;
do {
    estado_civ = read.question("Digite o estado civil: ");
    console.clear();
    estado_civ = estado_civ.toUpperCase(); 
    if (!['C', 'S', 'V', 'D'].includes(estado_civ)) {
        console.log("Erro: O estado civil deve ser C, S, V ou D.");
    }
} while (!['C', 'S', 'V', 'D'].includes(estado_civ));


let dependentes;
do {
    dependentes = read.question("Digite o numero de dependentes: ");
    console.clear();
    if (isNaN(dependentes) || parseInt(dependentes) < 0 || parseInt(dependentes) > 10) {
        console.log("Erro: O numero de dependentes deve ser um numero entre 0 e 10.");
    }
} while (isNaN(dependentes) || parseInt(dependentes) < 0 || parseInt(dependentes) > 10);


// SAÍDA
console.log("Nome:", nome);
console.log("CPF:", CPF);
console.log("Data de nascimento:", dia.padStart(2, '0') + '/' + mes.padStart(2, '0') + '/' + ano);
console.log("Renda mensal:", renda);
console.log("Estado civil:", estado_civ);
console.log("Número de dependentes:", dependentes);
