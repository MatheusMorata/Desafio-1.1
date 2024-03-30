const fs = require('fs');
class LeitorJSON {
    static lerArquivoJSON(caminhoArquivo) {
        try {
            const dados = fs.readFileSync(caminhoArquivo, 'utf8');
            const objetoJavaScript = JSON.parse(dados);
            return objetoJavaScript;
        } catch (erro) {
            console.error('Ocorreu um erro ao ler o arquivo JSON:', erro);
            return null;
        }
    }
}