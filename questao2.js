class Triangulo{
    //Vértices 
    #a;
    #b;
    #c;

    //Método para verificar se os vértices formam um triângulo válido
    eTriangulo(a, b, c) {
        const lado1 = a.distancia(b);
        const lado2 = b.distancia(c);
        const lado3 = c.distancia(a);

        return (lado1 + lado2 > lado3) && (lado2 + lado3 > lado1) && (lado3 + lado1 > lado2);
    }

    //Método construtor
    constructor(a, b, c) {
        //Verifica se os vértices formam um triângulo
        if (!this.eTriangulo(a, b, c)) {
            throw new Error("Os vertices nao formam um triangulo valido.");
        }

        this.#a = a;
        this.#b = b;
        this.#c = c;
    }

    //getters
    get a(){
        return this.#a;
    }

    get b(){
        return this.#b;
    }

    get c(){
        return this.#c;
    }


}