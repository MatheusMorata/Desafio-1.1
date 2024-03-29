const fs = require('fs');

class LeitorJSON {
    lerJSON(caminhoArquivo) {
        try {
            const conteudoArquivo = fs.readFileSync(caminhoArquivo, 'utf8');
            const objetoJavaScript = JSON.parse(conteudoArquivo);
            return objetoJavaScript;
        } catch (error) {
            console.error('Erro ao ler o arquivo:', error);
            return null;
        }
    }
}

module.exports = LeitorJSON;