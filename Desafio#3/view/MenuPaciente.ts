import * as read from 'readline-sync';

export class MenuPaciente{

    ExibirCadastrarPaciente(){
        console.log("CADASTRO");
        const cpf: string = read.question("Digite o CPF: (XXXXXXXXXXX)");
        const nome: string = read.question("Digite o nome: ");
        const dataNascimento: string = read.question("Digite a data de nascimento: (DD/MM/AAAA)");
        console.clear();
    }

    ExibirExcluirPaciente(){
        console.log("EXCLUIR");
        const cpf: string = read.question("Digite o CPF: ");
        console.clear();
    }

    Menu():void{

        let ativo: number = 0;
        while(ativo != 5){
            console.log("Menu do cadastro de Pacientes");
            console.log("1-Cadastrar novo paciente");
            console.log("2-Excluir paciente");
            console.log("3-Listar pacientes (ordenado por CPF)");
            console.log("4-Listar pacientes (ordenado por nome)");
            console.log("5-Voltar p/ menu principal");
            ativo = parseInt(read.question(''));
            console.clear();
            
            if(ativo == 1){
                this.ExibirCadastrarPaciente();
            }else if(ativo == 2){
                this.ExibirExcluirPaciente();
            }else if(ativo == 3){
                console.log("Listar por");
            }else if(ativo == 4){
                console.log("Listar por nome");
            }else if(ativo == 5){
                console.clear();
            }else{
                console.log("Entrada inválida... ");
            }
        }
    }

}