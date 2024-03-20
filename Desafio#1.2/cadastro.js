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
            if (this.pacientes[i] && this.pacientes[i].cpf === cpf) {
                index = i;
                break;
            }
        }
        if (index !== -1) {
            this.pacientes.splice(index, 1);
            this.contador--;
            console.log(`Paciente com CPF ${cpf} excluído com sucesso.`);
        } else {
            console.log(`Paciente com CPF ${cpf} não encontrado.`);
        }
    }
    
    
    printCPF() {
        const pacientesOrdenados = this.pacientes.slice().sort((a, b) => a.cpf.localeCompare(b.cpf));
        pacientesOrdenados.forEach(paciente => {
            console.log("CPF:", paciente.cpf);
            console.log("Nome:", paciente.nome);
            console.log("Data de Nascimento:", paciente.dataNascimento);
            console.log("----------------------------");
        });
    }

    printNome() {
        const pacientesOrdenados = this.pacientes.slice().sort((a, b) => a.nome.localeCompare(b.nome));
        pacientesOrdenados.forEach(paciente => {
            console.log("Nome:", paciente.nome);
            console.log("CPF:", paciente.cpf);
            console.log("Data de Nascimento:", paciente.dataNascimento);
            console.log("----------------------------");
        });
    }

    verificarExistenciaCPF(cpf) {
        return this.pacientes.some(paciente => paciente.cpf === cpf);
    }

}
module.exports = Cadastro;