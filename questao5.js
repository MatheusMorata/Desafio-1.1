const read = require('readline-sync');

class Pessoa{
    #nome;
    #CPF;
    #nascimento;
    #renda;
    #estado_civil;
    #dependentes;

    constructor(n,cpf,dia,mes,ano,renda,est,depen){
        this.validarEstadoCivil(est);
        this.validarRenda(renda);
        this.validarNome(n);

        this.#nome = n;
        this.#CPF = cpf;
        this.#nascimento = dia+'/'+mes+'/'+ano;
        this.#renda = renda;
        this.#estado_civil = est.toUpperCase();
        this.#dependentes = depen;
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

    toString(){
        console.clear();
        const saida = 'Nome: '+this.#nome+
                      '\nCPF: '+this.#CPF+
                      '\nData de nascimento: '+this.#nascimento+
                      '\nRenda Mensal: '+this.#renda+
                      '\nEstado cívil: '+this.#estado_civil+
                      '\nDependentes: '+this.#dependentes;
        return saida;
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
    console.log(p.toString());
}catch(error){
    console.error(error.message);
}