class Triangulo{
    //Vértices 
    #v1;
    #v2;
    #v3;

    //Método para verificar se os vértices formam um triângulo válido
    eTriangulo(v1, v2, v3) {
        const lado1 = v1.distancia(v2);
        const lado2 = v2.distancia(v3);
        const lado3 = v3.distancia(v1);

        return (lado1 + lado2 > lado3) && (lado2 + lado3 > lado1) && (lado3 + lado1 > lado2);
    }

    //Método construtor
    constructor(v1, v2, v3) {
        //Verifica se os vértices formam um triângulo
        if (!this.eTriangulo(v1, v2, v3)) {
            throw new Error("Os vertices nao formam um triangulo valido.");
        }

        this.#v1 = v1;
        this.#v2 = v2;
        this.#v3 = v3;
    }

    //getters
    get v1(){
        return this.#v1;
    }

    get v2(){
        return this.#v2;
    }

    get v3(){
        return this.#v3;
    }


}