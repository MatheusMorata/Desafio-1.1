export class Validacao{
    
    // Moeda de origem e de destino devem ter exatamente 3 caracteres.
    validarLengthCaracteres(str){
        if(str.length != 3 && str.length != 0){
            throw new Error("ERRO: A string deve ter exatos 3 caracteres. ");
        }
    }

    // Moeda origem ≠ moeda destino.
    validarMoedas(str1,str2){
        if(str1 == str2){
            throw new Error("ERRO: Não é possível fazer conversão da mesma moeda");
        }
    }

    // O valor deve ser númerico.
    validarValor(valor: any){
        // Verifica se o valor não é um número ou se não é um valor de ponto flutuante
        if (isNaN(valor) || typeof valor !== 'number') {
            throw new Error('O valor não é um número de ponto flutuante.');
        }
    }

}