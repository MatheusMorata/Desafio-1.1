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
        p[this.contador + 1] = paciente; 
        this.pacientes = p; 
        this.contador = this.contador + 1;
    }

    excluir(cpf) {
        let index = -1;
        for (let i = 0; i < this.pacientes.length; i++) {
            if (this.pacientes[i].cpf === cpf) {
                index = i;
                break;
            }
        }
        if (index !== -1) {
            this.pacientes.splice(index, 1);
            this.#contador--;

        } 
    }

    
}
module.exports = Cadastro;