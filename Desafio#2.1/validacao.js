const Arquivo = require('./arquivo');

try {
    const caminho = process.argv[2];
    if (!caminho) {
        throw new Error('Caminho do arquivo não fornecido.');
    }
    const teste = Arquivo.lerJSON(caminho);
    const resultado = Arquivo.criarDados(teste);
    console.log(resultado);
} catch (error) {
    console.log("ERRO:", error.message);
}