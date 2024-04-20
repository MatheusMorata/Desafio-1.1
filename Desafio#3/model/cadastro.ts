import { Paciente } from './paciente';

export class Cadastro {
    // Atributo
    private _lista: Paciente[];

    // Construtor
    constructor() {
        this._lista = []; 
    }

    // Métodos
    adicionarPaciente(paciente: Paciente): void {
        this._lista.push(paciente);
    }

    get lista(): Paciente[] {
        return this._lista;
    }

}