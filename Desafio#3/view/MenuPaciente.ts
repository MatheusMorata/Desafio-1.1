import * as read from 'readline-sync';

export class MenuPaciente{

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
                console.log('');
            }else if(ativo == 2){
                console.log('');
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