class Paciente{
    #cpf;
    #nome;
    #dataNascimento;
    
    constructor(cpf,nome,dia,mes,ano){
        if (cpf.length !== 11) {
            throw new Error('O CPF deve ter 11 dígitos.');
        }
        if(nome.length < 5){
            throw new Error('Nome deve ter mais de 5 dígitos. ');
        }
        if(dia > 30 || dia < 1){
            throw new Error('Dia deve está no intervalo (1 até 30)');
        }
        if(mes > 12 || mes < 1){
            throw new Error('Mes deve está no intervalo (1 até 12)');
        }
        if(ano > 2011 || ano < 1940){
            throw new Error('Ano deve está no intervalo (1940 até 2011)');
        }
        if(this.validaCPF(cpf) == false){
            throw new Error('CPF inválido. ');
        }
        this.#cpf = cpf;
        this.#nome = nome;
        this.#dataNascimento = dia + "/" + mes + "/" + ano;
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
    
        if (primeiroDigitoVerificador === digito1 && segundoDigitoVerificador === digito2) {
            return true; 
        } else {
            return false;
        }
    }

    
}
module.exports = Paciente;