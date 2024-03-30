const fs = require('fs');
class Arquivo {
    static lerJSON(caminhoArquivo) {
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

module.exports = Arquivo;