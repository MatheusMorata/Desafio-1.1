const read = require('readline-sync');

class Pessoa{
    #nome;
    #CPF;
    #nascimento;
    #renda;
    #estado_civ;
    #dependentes;

    constructor(n,cpf,nasc,renda,est,depen){
        this.validarDependentes(depen);
        this.validarCPF(cpf);
        this.validarEstadoCivil(est);
        this.validarRenda(renda);
        this.validarNome(n);
        this.validarDataNascimento(nasc);

        this.#nome = n;
        this.#CPF = cpf;
        this.#nascimento = nasc;
        this.#renda = renda;
        this.#estado_civ = est.toUpperCase();
        this.#dependentes = depen;
    }


    validarDependentes(dependentes) {
        if (dependentes < 0 || dependentes > 10) {
            throw new Error("O número de dependentes deve estar entre 0 e 10.");
        }
    }

    validarCPF(cpf) {
        if (cpf.length !== 11 || !/^\d+$/.test(cpf)) {
            throw new Error("CPF inválido. Deve conter apenas números e ter tamanho igual a 11.");
        }
    }

    validarEstadoCivil(estado_civil) {
        if (!estado_civil || !/^[C|S|V|D]$/i.test(estado_civil)) {
            throw new Error("Estado civil inválido. Deve ser 'C', 'S', 'V' ou 'D' (maiúsculo ou minúsculo).");
        }
    }

    validarRenda(renda){
        if(renda < 0){
            throw new Error("Renda não pode ser negativa.");
        }
    }

    validarNome(nome){
        if(nome.length < 5){
            throw new Error("Nome deve ter pelo menos 5 caracteres.");
        }
    }

    validarDataNascimento(nascimento) {
        if (!nascimento || !/\d{2}\/\d{2}\/\d{4}/.test(nascimento)) {
            throw new Error("Data de nascimento inválida. Deve estar no formato DD/MM/AAAA.");
        }

        const partesData = nascimento.split('/');
        const dia = parseInt(partesData[0], 10);
        const mes = parseInt(partesData[1], 10);
        const ano = parseInt(partesData[2], 10);

        const dataNascimento = new Date(ano, mes - 1, dia);
        const dataAtual = new Date();
        const idade = dataAtual.getFullYear() - dataNascimento.getFullYear();

        if (dataAtual.getMonth() < dataNascimento.getMonth() || 
            (dataAtual.getMonth() === dataNascimento.getMonth() && dataAtual.getDate() < dataNascimento.getDate())) {
            idade--;
        }

        if (idade < 18) {
            throw new Error("O cliente deve ter pelo menos 18 anos na data atual.");
        }
    }

}

let nome = read.question("Digite o nome: ");
let CPF = read.question("Digite o CPF: ");
let nascimento = read.question("Digite a data de nascimento: ");
let renda = read.question("Digite a renda mensal: ");
let estado_civ = read.question("Digite o estado civil: ");
let dependentes = read.question("Digite o numero de dependentes: ");

