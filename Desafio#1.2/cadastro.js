const Paciente = require('./paciente');

class Cadastro {
    #contador;
    constructor() {
        this.pacientes = [];
        this.#contador = 0;
    }

    //GETTERS
    get contador(){
        return this.#contador;
    }

    set contador(c){
        this.#contador = c;
    }

    adicionar(paciente){
        const p = this.pacientes;
        p[this.contador + 1] = paciente; // Ajuste aqui
        this.pacientes = p; // Ajuste aqui
        this.contador = this.contador + 1; // Ajuste aqui
    }
}
module.exports = Cadastro;