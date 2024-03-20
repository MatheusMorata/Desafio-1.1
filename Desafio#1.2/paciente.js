class Paciente {
    #cpf;
    #nome;
    #dataNascimento;

    constructor(cpf, nome, data) {
        if (!cpf || cpf.length !== 11) {
            throw new Error('Erro: O CPF deve ter 11 dígitos.');
        }
        if (nome.length < 5) {
            throw new Error('Erro: Nome deve ter mais de 5 caracteres.');
        }
        const dataRegex = /^(\d{2})\/(\d{2})\/(\d{4})$/;
        if (!dataRegex.test(data)) {
            throw new Error('Erro: Data deve estar no formato DD/MM/AAAA.');
        }
        if (!this.validaCPF(cpf)) {
            throw new Error('Erro: CPF inválido.');
        }
        this.#cpf = cpf;
        this.#nome = nome;
        this.#dataNascimento = data;
    }

    // GETTERS
    get cpf() {
        return this.#cpf;
    }

    get nome() {
        return this.#nome;
    }

    get dataNascimento() {
        return this.#dataNascimento;
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