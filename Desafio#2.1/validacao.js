const Arquivo = require('./arquivo');
const caminho = process.argv[2];

const arq = new Arquivo();
const teste = arq.constructor.lerJSON(caminho);

console.log(teste);