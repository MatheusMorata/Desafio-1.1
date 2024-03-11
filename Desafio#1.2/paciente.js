class Paciente{
    #cpf;
    #nome;
    #dataNascimento;

    constructor(cpf,nome,dia,mes,ano){
        this.#cpf = cpf;
        this.#nome = nome;
        this.#dataNascimento = dia + "/" + mes + "/" + ano;
    }
}