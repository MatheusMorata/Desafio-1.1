import axios, { AxiosResponse } from 'axios';

export class Api {
    
    async getCotacao(moedaOrigem: string, moedaDestino: string): Promise<number> {

        // Variáveis do método
        const minha_key: string = '0a5f91d54f839d23fd76fd6e';
        const rota: string = `https://v6.exchangerate-api.com/v6/${minha_key}/latest/${moedaOrigem}`;

        try {
            const response: AxiosResponse = await axios.get(rota);
            const valor: number = parseFloat(response.data['conversion_rates'][moedaDestino]);
            return valor;
            
        } catch (error) {
            console.error('ERRO: ao obter a taxa de câmbio:', error);
            throw error; // Propaga o erro para quem chamou o método
        }
    }

}
