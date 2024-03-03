const Vertice = require('./questao1.js'); // Importação da classe Vertice

class Poligono {
    // Atributo -> Lista de objetos da classe Vertice
    #vertices;

    constructor(vertices) {
        if (!Array.isArray(vertices) || vertices.length <= 2) {
            throw new Error("Os vertices devem ser fornecidos como uma lista com pelo menos 3 elementos.");
        }
        

        this.#vertices = vertices;
    }

    // getters
    get vertices() {
        return this.#vertices;
    }

    get qtdVertices(){
        return this.#vertices.length;
    }

    get perimetro() {
        let perimetro = 0;
        
        // Percorre todos os vértices
        for (let i = 0; i < this.#vertices.length; i++) {
            // Obtém o vértice atual e o próximo vértice
            const verticeAtual = this.#vertices[i];
            const proximoVertice = this.#vertices[(i + 1) % this.#vertices.length]; // O próximo vértice pode ser o primeiro, se estivermos no último vértice
            
            // Calcula a distância entre os vértices atual e próximo
            const distanciaEntreVertices = verticeAtual.distancia(proximoVertice);
            
            // Adiciona a distância ao perímetro total
            perimetro += distanciaEntreVertices;
        }
        
        return perimetro;
    }

    // Métodos
    addVertice(novoVertice) {
        for (const vertice of this.#vertices) {
            if (vertice.equals(novoVertice)) {
                return false;
            }
        }
        this.#vertices.push(novoVertice);
        return true;
    }
}

module.exports = Poligono; // Exportação classe Poligono