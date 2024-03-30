const Arquivo = require('./arquivo');
const arq = new Arquivo();
try {
    const caminho = process.argv[2];
    if (!caminho) {
        throw new Error('Caminho do arquivo não fornecido.');
    }
    const teste = arq.constructor.lerJSON(caminho);
} catch (error) {
    console.log("ERRO:", error.message);
}
