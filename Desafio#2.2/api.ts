import axios, { AxiosResponse } from 'axios';

export class Api {
    
    async getCotacao(moedaOrigem: string, moedaDestino: string): Promise<number> {

        // Variáveis do método
        const minha_key: string = '';
        const rota: string = 'https://v6.exchangerate-api.com/v6/'+minha_key+'/latest/'+moedaOrigem;
        let valor: number;

        try {
            const response: AxiosResponse = await axios.get(rota);
            valor = parseFloat(response.data['conversion_rates'][moedaDestino]);
            return valor;
            
        } catch (error) {
            console.error('ERRO: ao obter a taxa de câmbio:', error);
            throw error; // lançando novamente o erro para que o chamador possa lidar com ele
        }
    }

    resultado(moedaOrigem: string, moedaDestino: string, valor: number, taxa: number){
        const conversao:number = valor*taxa;
        console.log(moedaOrigem+" "+valor+" => "+moedaDestino+" "+conversao.toFixed(2));
        console.log("Taxa: "+taxa.toFixed(6));
    }

}