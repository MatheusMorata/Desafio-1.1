const fs = require('fs');

class Leitura{
    ler_arquivo(){
        try{
            const caminho = process.argv[2]; // Acessando o primeiro elemento do array
            fs.readFile(caminho, 'utf8', (err, data) => {
                if (err) {
                    console.error('Erro ao ler o arquivo:', err);
                    return;
                }
                // Converte o conteúdo do arquivo para um objeto JavaScript
                const objetoJSON = JSON.parse(data);
                
            });
            return objetoJSON;
        }catch(error){
            console.log("ERRO: Não passou o caminho do arquivo ou arquivo inexistente.");
        }
    }
}