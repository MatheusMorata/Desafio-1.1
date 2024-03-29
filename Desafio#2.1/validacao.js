const Leitura = require('./leitura');
const leitor = new Leitura();
const caminho = process.argv[2]; 
const objeto = leitor.lerJSON(caminho);
