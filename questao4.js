class Aluno {
    // Atributos privados
    #matricula;
    #nome;
    #p1;
    #p2;
    
    // Método construtor
    constructor(m, n, p1, p2) {
        if ((typeof m !== 'string' || m.trim() === '') || (typeof n !== 'string' || n.trim() === '')) {
            throw new Error("Matrícula e nome devem ser strings não vazias.");
        }
        
        this.#matricula = m;
        this.#nome = n;
        this.#p1 = p1;
        this.#p2 = p2;
    }

    // GETTERS
    get matricula(){
        return this.#matricula;
    }

    get nome(){
        return this.#nome;
    }

    get p1(){
        return this.#p1;
    }

    get p2(){
        return this.#p2;
    }

    // SETTERS
    set matricula(m){
        this.#matricula = m;
    }

    set nome(n){
        this.#nome = n;
    }

    set p1(p1){
        this.#p1 = p1;
    }

    set p2(p2){
        this.#p2 = p2;
    }

}

class Turma{
    // Lista de objetos da classe aluno
    #aluno;
    
    constructor(a){
        this.#aluno = a;
    }
    
}