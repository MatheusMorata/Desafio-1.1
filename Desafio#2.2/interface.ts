// Importações 
import * as read from 'readline-sync';
import {Validacao} from './validacao';

// Objeto da classe validação
const validar = new Validacao();

export class Interface{

    menu(){
        
        // Variáveis
        let moedaOrigem: string = "";
        let moedaDestino: string = "";

        while(true){
            moedaOrigem = read.question("Moeda origem: ");
            validar.validarLengthCaracteres(moedaOrigem);   
            if(moedaOrigem !== ""){
                moedaDestino = read.question("Moeda destino: ");
            }else{
                break;
            }
        }
    }

    
}