const fs = require('fs');
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
}catch(error){
    console.log("ERRO: Não passou o caminho do arquivo.");
}


for(let i = 0; objetoJSON.length > i; i++){
    console.log("Nome: "+objetoJSON[i].nome);
    console.log("CPF: "+objetoJSON[i].cpf);
    console.log("Data de nascimento: "+objetoJSON[i].dt_nascimento);
    console.log("");
}