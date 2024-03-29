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
    
        // Faça o que você quiser com o objeto JSON
        console.log('Conteúdo do arquivo JSON:', objetoJSON);
    });
}catch(error){
    console.log("ERRO: Não passou o caminho do arquivo.");
}

