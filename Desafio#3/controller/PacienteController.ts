import { Paciente } from '../model/paciente'; 

export class PacienteController {
    async cadastrarPaciente(cpf: string, nome: string, dataNascimento: string): Promise<Paciente | null> {
        try {
            const paciente = await Paciente.create({ cpf, nome, dataNascimento });
            return paciente;
        } catch (error) {
            console.error('Erro ao cadastrar paciente:', error);
            return null;
        }
    }

    async deletarPaciente(cpf: string): Promise<number> {
        try {
            const deletar = await Paciente.destroy({ where: { cpf } });
            return deletar;
        } catch (error) {
            console.error('Erro ao deletar paciente:', error);
            return 0;
        }
    }
}