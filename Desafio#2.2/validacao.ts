export class Validacao{
    
    validarLengthCaracteres(str){
        if(str.length != 3 && str.length != 0){
            throw new Error("ERRO: A string deve ter exatos 3 caracteres. ");
        }
    }

    validarMoedas(str1,str2){
        if(str1 == str2){
            throw new Error("ERRO: Não é possível fazer conversão da mesma moeda");
        }
    }
}