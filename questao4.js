class Aluno{
    #matricula;
    #nome;
    #p1;
    #p2;

    constructor(m,n,p1,p2){
        if (m.trim() === '' || n.trim() === '') {
            throw new Error('A matrícula e o nome não podem estar vazios.');
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