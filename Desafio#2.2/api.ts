import axios from 'axios';

export class Api{
    
    async getCotacao(moedaOrigem, moedaDestino) {

        // Variáveis do método
        const minha_key = '0a5f91d54f839d23fd76fd6e';
        const rota = 'https://v6.exchangerate-api.com/v6/'+minha_key+'/latest/'+moedaOrigem;

        try {
            const response = await axios.get(rota);
            const valor = response.data['conversion_rates'][moedaDestino];
            console.log(valor);
            
        } catch (error) {
            console.error('ERRO: ao obter a taxa de câmbio:', error);
        }
    }

} 