// Importações 
import * as read from 'readline-sync';
import {Validacao} from './validacao';

// Variáveis
const validar = new Validacao();

export class Interface{

    menu(){
        let moedaOrigem: string = "";
        let moedaDestino: string = "";

        while(true){
            try{
                moedaOrigem = read.question("Moeda origem: ");
                validar.validarLengthCaracteres(moedaOrigem);    
            }catch(error){
                console.log(error.message);
            }
        if(moedaOrigem !== ""){
            moedaDestino = read.question("Moeda destino: ");
        }else{
            break;
        }
        }
    }

}