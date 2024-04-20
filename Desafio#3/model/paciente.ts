export class Paciente {

    // Atributos
    private _cpf: string;
    private _nome: string;
    private _dataNascimento: string;

    // Método construtor
    constructor(cpf: string, nome: string, data: string) {
        this._cpf = cpf;
        this._nome = nome;
        this._dataNascimento = data;
    }

    // GETTERS E SETTERS
    get cpf(): string {
        return this._cpf;
    }

    get nome(): string {
        return this._nome;
    }

    get dataNascimento(): string {
        return this._dataNascimento;
    }

    set cpf(cpf: string) {
        if (this.validaCPF(cpf) == true) {
            this._cpf = cpf;
        } else {
            throw new Error('ERRO: CPF inválido');

        }
    }

    set nome(nome: string){
        if(nome.length >= 5){
            this._nome = nome;
        }else{
            throw new Error('ERRO: Nome deve ter pelo menos 5 caracteres. ');
        }
    }

    set dataNascimento(data: string){
        this._dataNascimento = data;
    }

    // Métodos de classe
    validaCPF(cpf: string): boolean {
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