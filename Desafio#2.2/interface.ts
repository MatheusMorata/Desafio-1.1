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

        try{
            while(true){
                moedaOrigem = read.question("Moeda origem: ");
                validar.validarLengthCaracteres(moedaOrigem);   
                if(moedaOrigem !== ""){
                    moedaDestino = read.question("Moeda destino: ");
                }else{
                    break;
                }
                validar.validarMoedas(moedaOrigem,moedaDestino);
            }
        }catch(error){
            console.log(error.message);
        }
    }

}