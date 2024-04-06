// Importações
import * as read from 'readline-sync';
import { Validacao } from './validacao';

// Objeto 
const validar = new Validacao();

// Classe Interface
export class Interface {

    menu() {

        let moedaOrigem = "";
        let moedaDestino = "";

        try {
            while (true) {
                moedaOrigem = read.question("Moeda origem: ");
                validar.validarLengthCaracteres(moedaOrigem);
                
                if (moedaOrigem !== "") {
                    moedaDestino = read.question("Moeda destino: ");
                } else {
                    break;
                }

                validar.validarMoedas(moedaOrigem, moedaDestino);
            }
        } catch (error) {
            console.log(error.message);
            this.menu(); // Chama novamente o método menu após tratar o erro
        }
    }
}