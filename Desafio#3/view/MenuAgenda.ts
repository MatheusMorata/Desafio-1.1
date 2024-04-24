import * as read from 'readline-sync';

export function menuAgenda(): void{
    let ativo: number = 0;
    while(ativo != 4){
        console.log("Agenda");
        console.log("1-Agendar consulta");
        console.log("2-Cancelar agendamento");
        console.log("3-Listar agenda");
        console.log("4-Voltar p/ menu principal");

        ativo = parseInt(read.question(''));
        console.clear();

        if(ativo == 1){ 
            console.clear();
        }else if(ativo == 2){
            console.clear
        }else if(ativo == 3){
            console.clear();
        }else if(ativo == 4){
            console.clear();
        }else{
            console.log("Opcao invalida. ");
        }
    }
}