class Paciente{
    #cpf;
    #nome;
    #dataNascimento;

    constructor(cpf,nome,dia,mes,ano){
        if(cpf.length != 11){
            throw new Error('O CPF deve ter 11 dígitos. ');
        }
        if(nome.length < 5){
            throw new Error('Nome deve ter mais de 5 dígitos. ');
        }
        if(dia > 30 || dia < 1){
            throw new Error('Dia deve está no intervalo (1 até 30)');
        }
        if(mes > 12 || mes < 12){
            throw new Error('Mes deve está no intervalo (1 até 12)');
        }
        if(ano > 2011 || ano < 1940){
            throw new Error('Ano deve está no intervalo (1940 até 2011)');
        }
        this.#cpf = cpf;
        this.#nome = nome;
        this.#dataNascimento = dia + "/" + mes + "/" + ano;
    }

    validarCPF(){

    }
}