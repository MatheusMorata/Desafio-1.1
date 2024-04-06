export class validacao{
    
    validarLengthCaracteres(str){
        if(str.length != 3){
            throw new Error("ERRO: A string deve ter exatos 3 caracteres. ");
        }
    }

}