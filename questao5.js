const read = require('readline-sync');

class Pessoa{
    #nome;
    #CPF;
    #nascimento;
    #renda;
    #estado_civil;
    #dependentes;

    constructor(n,cpf,dia,mes,ano,renda,est,depen){
        // Validações
        this.validarEstadoCivil(est);
        this.validarRenda(renda);
        this.validarNome(n);
        this.validarCPF(cpf);
        this.validarDia(dia);
        this.validarMes(mes);
        this.validarAno(ano);
        this.validarDependentes(depen);


        this.#nome = n.toString();
        this.#CPF = cpf;
        if(mes > 9){
            this.#nascimento = dia+'/'+mes+'/'+ano;
        }else{
            this.#nascimento = dia+'/0'+mes+'/'+ano;
        }
        this.#renda = renda;
        this.#estado_civil = est.toUpperCase();
        this.#dependentes = Number(depen);
    }

    // GETTER
    get nome(){
        return this.#nome;
    }

    get nascimento(){
        return this.#nascimento;
    }

    get renda(){
        return this.#renda;
    }

    get estado_civil(){
        return this.#estado_civil;
    }

    get dependentes(){
        return this.#dependentes;
    }

    // Métodos
    validarEstadoCivil(estado_civil) {
        if (!estado_civil || !/^[C|S|V|D]$/i.test(estado_civil)) {
            throw new Error("Estado civil inválido. Deve ser 'C', 'S', 'V' ou 'D' (maiúsculo ou minúsculo).");
        }
    }

    validarCPF(cpf){
        if(cpf.length != 11){
            throw new Error("CPF deve ter 11 dígitos.");
        }
    }

    validarDependentes(dep){
        if(dep < 0 || dep > 10){
            throw new Error("O número de dependentes deve está entre o intervalo 0 e 10.");
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

    validarDia(dia){
        if(dia > 30 || dia <= 0){
            throw new Error("Um mês tem apenas 30 dias");
        }
    }

    validarMes(Mes){
        if(Mes > 12 || Mes <= 0){
            throw new Error("Um ano tem apenas 12 meses");
        }
    }

    validarAno(ano){
        if(ano > 2024 || ano <= 1900){
            throw new Error("Somente anos dentro do intervalo de 1900 a 2024 são aceitos.");
        }
    }

    formatarCPF() {
        const numerosCPF = this.#CPF.replace(/\D/g, '');
        const cpfFormatado = numerosCPF.replace(/(\d{3})(\d{3})(\d{3})(\d{2})/, "$1.$2.$3-$4");
        return cpfFormatado;
    }

}

let nome = read.question("Digite o nome: ");
let CPF = read.question("Digite o CPF: ");
let dia = read.question("Digite o dia de nascimento: ");
let mes = read.question("Digite o mes de nascimento: ");
let ano = read.question("Digite o ano de nascimento: ")
let renda = read.question("Digite a renda mensal: ");
let estado_civ = read.question("Digite o estado civil: ");
let dependentes = read.question("Digite o numero de dependentes: ");

try{
    const p = new Pessoa(nome,CPF,dia,mes,ano,renda,estado_civ,dependentes);
    console.log("Nome: "+p.nome);
    console.log("CPF: "+p.formatarCPF());
    console.log("Data de Nascimento: "+p.nascimento);
    console.log("Renda: R$"+p.renda);
    console.log("Estado civil: "+p.estado_civil);
    console.log("Dependentes: "+p.dependentes);
}catch(error){
    console.error(error.message);
}