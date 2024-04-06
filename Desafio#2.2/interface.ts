// Importações
import * as read from 'readline-sync';
import { Validacao } from './validacao';
import { Api } from './api';

// Objetos 
const validar = new Validacao();
const api = new Api();

// Classe Interface
export class Interface {

    async menu() {

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
                    
                    const cotacao = await api.getCotacao(moedaOrigem, moedaDestino);
                    console.log(cotacao);
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