class Paciente {
    cpf;
    nome;
    dataNascimento;

    constructor(cpf, nome, data) {
        this.cpf = cpf;
        this.nome = nome;
        this.dataNascimento = data;
    }

    validaCPF(cpf) {
        let j = 10;
        let soma1 = 0;
        let soma2 = 0;
        const digito1 = parseInt(cpf[9]);
        const digito2 = parseInt(cpf[10]);

        for (let i = 0; i < (cpf.length - 2); i++) {
            soma1 += parseInt(cpf[i]) * j;
            j--;
        }
        const restoDivisao1 = soma1 % 11;
        const primeiroDigitoVerificador = (restoDivisao1 < 2) ? 0 : 11 - restoDivisao1;

        j = 11;
        for (let i = 0; i < (cpf.length - 1); i++) {
            soma2 += parseInt(cpf[i]) * j;
            j--;
        }
        const restoDivisao2 = soma2 % 11;
        const segundoDigitoVerificador = (restoDivisao2 < 2) ? 0 : 11 - restoDivisao2;

        return primeiroDigitoVerificador === digito1 && segundoDigitoVerificador === digito2;
    }
}

module.exports = Paciente;