class Validacao {
    valida_nome(n) {
        if (n.length >= 5 && n.length <= 60) {
            return true;
        } else {
            throw new Error('ERRO: Nome inválido.');
        }
    }

    valida_cpf(cpf) {
        if (cpf.length !== 11 || /^(.)\1+$/.test(cpf)) {
            throw new Error('ERRO: CPF inválido.');
        }

        let soma = 0;
        for (let i = 0; i < 9; i++) {
            soma += parseInt(cpf.charAt(i)) * (10 - i);
        }
        
        let resto = 11 - (soma % 11);
        if (resto === 10 || resto === 11) {
            resto = 0;
        }
        
        if (resto !== parseInt(cpf.charAt(9))) {
            throw new Error('ERRO: CPF inválido.');
        }

        soma = 0;
        for (let i = 0; i < 10; i++) {
            soma += parseInt(cpf.charAt(i)) * (11 - i);
        }
        
        resto = 11 - (soma % 11);
        if (resto === 10 || resto === 11) {
            resto = 0;
        }
        
        if (resto !== parseInt(cpf.charAt(10))) {
            throw new Error('ERRO: CPF inválido.');
        }

        return true; 
    }

    validaNascimento(nasc){
        const dataNascimento = new Date(nasc);
        const hoje = new Date();
        const idade = hoje.getFullYear() - dataNascimento.getFullYear();
        const mes = hoje.getMonth() - dataNascimento.getMonth();

        if (mes < 0 || (mes === 0 && hoje.getDate() < dataNascimento.getDate())) {
            idade--;
        }

        if (idade < 18) {
            throw new Error('ERRO: Idade inferior a 18 anos.');
        }

        return true;
    }

    validaRenda(renda){
        if(renda >= 0){
            return true;
        }else{
            throw new Error('ERRO: Renda negativa.');
        }
    }

    valida_estado_civil(est_civil) {
        if (est_civil === 'C' || est_civil === 'S' || est_civil === 'V' || est_civil === 'D') {
            return true;
        } else {
            throw new Error('ERRO: Estado civil inválido.');
        }
    }
}