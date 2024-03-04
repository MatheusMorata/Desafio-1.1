class Aluno{
    #matricula;
    #nome;
    #p1;
    #p2;

    constructor(m, n, p1, p2){
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
    set p1(p1){
        this.#p1 = p1;
    }

    set p2(p2){
        this.#p2 = p2;
    }

}

class Turma{
    #alunos;

    constructor(alunos){
        this.#alunos = alunos;    
    }

}

const a1 = new Aluno();
let lista = [];