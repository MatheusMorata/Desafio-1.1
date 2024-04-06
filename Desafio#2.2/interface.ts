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
                    validar.validarMoedas(moedaOrigem, moedaDestino);
                } else {
                    break;
                }
            }
        } catch (error) {
            console.log(error.message);
            this.menu(); // Chama novamente o método menu após tratar o erro
        }
    }
}