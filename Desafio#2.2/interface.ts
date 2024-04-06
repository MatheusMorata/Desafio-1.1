// Importações
import * as read from 'readline-sync';
import { Validacao } from './validacao';


// Objetos 
const validar = new Validacao();


// Classe Interface
export class Interface {

    menu() {

        // Variáveis
        let moedaOrigem: string = "";
        let moedaDestino: string = "";
        let valor: number; 

        try {
            while (true) {
                moedaOrigem = read.question("Moeda origem: ");
                validar.validarLengthCaracteres(moedaOrigem);
                
                if (moedaOrigem !== "") {

                    moedaDestino = read.question("Moeda destino: ");
                    validar.validarLengthCaracteres(moedaDestino);
                    validar.validarMoedas(moedaOrigem, moedaDestino);

                    console.log("");

                    valor = parseFloat(read.question("Valor: "));
                    validar.validarValor(valor);
                    validar.validarNegativo(moedaOrigem,moedaOrigem);
                
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