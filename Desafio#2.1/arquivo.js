const fs = require('fs');

class Arquivo {
    static lerJSON(caminhoArquivo) {
        try {
            // Verifica se o caminho é de fato um arquivo
            const stat = fs.statSync(caminhoArquivo);
            if (!stat.isFile()) {
                throw new Error('O caminho especificado não é um arquivo.');
            }

            // Lê o arquivo JSON
            const dados = fs.readFileSync(caminhoArquivo, 'utf8');
            const objetoJavaScript = JSON.parse(dados);
            return objetoJavaScript;
        } catch (erro) {
            // Altera a mensagem de erro
            throw new Error('O caminho especificado não é um arquivo.');
        }
    }
}

module.exports = Arquivo;