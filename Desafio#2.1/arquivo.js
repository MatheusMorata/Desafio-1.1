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


    static validarCPF(cpf) {

        cpf = cpf.replace(/\D/g, '');

        if (cpf.length !== 11) {
            return false;
        }

        if (/^(\d)\1{10}$/.test(cpf)) {
            return false;
        }

        let soma = 0;
        for (let i = 0; i < 9; i++) {
            soma += parseInt(cpf.charAt(i)) * (10 - i);
        }
        let resto = soma % 11;
        let digitoVerificador1 = resto < 2 ? 0 : 11 - resto;

        if (parseInt(cpf.charAt(9)) !== digitoVerificador1) {
            return false;
        }

        soma = 0;
        for (let i = 0; i < 10; i++) {
            soma += parseInt(cpf.charAt(i)) * (11 - i);
        }
        resto = soma % 11;
        let digitoVerificador2 = resto < 2 ? 0 : 11 - resto;

        if (parseInt(cpf.charAt(10)) !== digitoVerificador2) {
            return false;
        }

        return true;
    }

    static validarDataNascimento(dtNascimento) {

        const dataNascimento = new Date(dtNascimento.substr(4, 4), dtNascimento.substr(2, 2) - 1, dtNascimento.substr(0, 2));
        const idade = new Date().getFullYear() - dataNascimento.getFullYear();
        return idade >= 18;
    }

    static validarRendaMensal(rendaMensal) {
        return /^(\d{1,12},\d{2})?$/.test(rendaMensal);
    }

    static validarEstadoCivil(estadoCivil) {
        return /^[CSVDcsvd]?$/.test(estadoCivil);
    }

    static validarDadosCliente(dadosCliente) {
        const erros = [];

        if (!dadosCliente.nome || dadosCliente.nome.length < 5 || dadosCliente.nome.length > 60) {
            erros.push({ campo: 'nome', mensagem: 'O nome deve ter entre 5 e 60 caracteres.' });
        }

        if (!dadosCliente.cpf || !Arquivo.validarCPF(dadosCliente.cpf)) {
            erros.push({ campo: 'cpf', mensagem: 'CPF inválido.' });
        }

        if (!dadosCliente.dt_nascimento || !Arquivo.validarDataNascimento(dadosCliente.dt_nascimento)) {
            erros.push({ campo: 'dt_nascimento', mensagem: 'Data de nascimento inválida ou o cliente não tem pelo menos 18 anos.' });
        }

        if (dadosCliente.renda_mensal && !Arquivo.validarRendaMensal(dadosCliente.renda_mensal)) {
            erros.push({ campo: 'renda_mensal', mensagem: 'Renda mensal inválida.' });
        }

        if (dadosCliente.estado_civil && !Arquivo.validarEstadoCivil(dadosCliente.estado_civil)) {
            erros.push({ campo: 'estado_civil', mensagem: 'Estado civil inválido.' });
        }

        return erros;
    }

    static criarDados(arrayDados) {
        const resultado = [];

        arrayDados.forEach(objeto => {
            const dadosCliente = objeto;
            const erros = Arquivo.validarDadosCliente(dadosCliente);

            resultado.push({ dados: dadosCliente, erros });
        });

        return resultado;
    }
}

module.exports = Arquivo;