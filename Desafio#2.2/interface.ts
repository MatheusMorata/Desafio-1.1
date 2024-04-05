import * as read from 'readline-sync';
export class Interface{

    menu(){
        let moedaOrigem: string = "";
        let moedaDestino: string = "";

        while(true){
            moedaOrigem = read.question("Moeda origem: ");
        if(moedaOrigem !== ""){
            moedaDestino = read.question("Moeda destino: ");
        }else{
            break;
        }
        }
    }

}