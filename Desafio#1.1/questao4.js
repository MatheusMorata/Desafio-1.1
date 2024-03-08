class Aluno {
    #matricula;
    #nome;
    #p1;
    #p2;

    constructor(m, n, p1, p2) {
        if (m.trim() === '' || n.trim() === '') {
            throw new Error('A matrícula e o nome não podem estar vazios.');
        }

        if (!/^[a-zA-ZÀ-ú\s]+$/.test(n)) {
            throw new Error('O nome deve conter apenas letras.');
        }

        if (p1 < 0 || p1 > 10 || p2 < 0 || p2 > 10) {
            throw new Error('As notas devem estar no intervalo de 0 a 10.');
        }

        this.#matricula = m;
        this.#nome = n;
        this.#p1 = p1;
        this.#p2 = p2;
    }

    // SETTER
    set p1(p1) {
        this.#p1 = p1;
    }

    set p2(p2) {
        this.#p2 = p2;
    }

    get matricula() {
        return this.#matricula;
    }

    get nome() {
        return this.#nome;
    }

    get p1() {
        return this.#p1;
    }

    get p2() {
        return this.#p2;
    }
}

class Turma {
    #alunos;

    constructor(alunos) {
        this.#alunos = alunos || [];
    }

    adicionar(aluno) {
        this.#alunos.push(aluno);
    }

    deletar(matricula) {
        const indice = this.#alunos.findIndex(aluno => aluno.matricula === matricula);
        if (indice !== -1) {
            this.#alunos.splice(indice, 1);
            console.log(`Aluno com matrícula ${matricula} deletado.`);
        } else {
            console.log(`Aluno com matrícula ${matricula} não encontrado.`);
        }
    }

    imprimirAlunos() {
        // Ordenar alunos por nome
        const alunosOrdenados = this.#alunos.sort((a, b) => a.nome.localeCompare(b.nome));

        console.log("-------------------------------------------------");
        console.log("Matricula   Nome             P1    P2    NF");
        console.log("-------------------------------------------------");

        alunosOrdenados.forEach(aluno => {
            let notaFinal;
            if (aluno.p1 >= 0 && aluno.p2 >= 0) {
                notaFinal = ((aluno.p1 + aluno.p2) / 2).toFixed(1);
            } else if (aluno.p1 >= 0) {
                notaFinal = (aluno.p1 / 2).toFixed(1);
            } else if (aluno.p2 >= 0) {
                notaFinal = (aluno.p2 / 2).toFixed(1);
            } else {
                notaFinal = "0.0";
            }

            const p1 = aluno.p1 >= 0 ? aluno.p1.toFixed(1) : "-";
            const p2 = aluno.p2 >= 0 ? aluno.p2.toFixed(1) : "-";

            console.log(`${aluno.matricula.padEnd(11)} ${aluno.nome.padEnd(16)} ${p1.padEnd(5)} ${p2.padEnd(5)} ${notaFinal}`);
        });
        console.log("-------------------------------------------------");
    }
}

const a1 = new Aluno("12345", "Ana de Almeida", 8.0, 9.5);
const a2 = new Aluno("23456", "Bruno Carvalho", 7.0);
const a3 = new Aluno("34567", "Fernanda Abreu");
const a4 = new Aluno("45678", "Joao Santos");

let alunos = [a1, a2, a3, a4];

// Lançando notas que faltam
a3.p2 = 8.5;

try {
    let turma = new Turma(alunos);
    turma.imprimirAlunos();
} catch (error) {
    console.error(error.message);
}