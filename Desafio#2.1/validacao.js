const Leitura = require('./leitura');
const caminho = process.argv[2]; 
const leitor = new Leitura();

const objeto = leitor.lerJSON(caminho);
console.log(objeto);