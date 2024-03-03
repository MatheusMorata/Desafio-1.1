const Vertice = require('./questao1.js');

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

    //Getters
    get a(){
        return this.#a;
    }

    get b(){
        return this.#b;
    }

    get c(){
        return this.#c;
    }

    get perimetro(){
        const lado1 = this.#a.distancia(this.#b);
        const lado2 = this.#b.distancia(this.#c);
        const lado3 = this.#c.distancia(this.#a);

        return lado1 + lado2 + lado3;
    }

    get area() {
        return this.perimetro/2;
    }

    //Métodos
    equals(t) {
        const vertices1 = [this.#a, this.#b, this.#c];
        const vertices2 = [t.a, t.b, t.c];
    
        vertices1.sort((a, b) => a.x - b.x || a.y - b.y);
        vertices2.sort((a, b) => a.x - b.x || a.y - b.y);
    
        for (let i = 0; i < 3; i++) {
            if (vertices1[i].x !== vertices2[i].x || vertices1[i].y !== vertices2[i].y) {
                return false;
            }
        }
    
        return true;
    }

    tipo() {
        const lado1 = this.#a.distancia(this.#b);
        const lado2 = this.#b.distancia(this.#c);
        const lado3 = this.#c.distancia(this.#a);
    
        if (lado1 === lado2 && lado2 === lado3) {
            return "Equilatero"; 
        } else if (lado1 === lado2 || lado1 === lado3 || lado2 === lado3) {
            return "Isosceles"; 
        } else {
            return "Escaleno"; 
        }
    }

    clone() {
        return new Triangulo(this.#a, this.#b, this.#c);
    }

}

module.exports = Triangulo;