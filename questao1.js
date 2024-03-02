class Vertice{
    //Atributos privados -> #
    #x;
    #y;

    //Método construtor
    constructor(x, y){
        this.#x = x;
        this.#y = y;
    }

    //Getters
    get x(){
        return this.#x;
    }

    get y(){
        return this.#y;
    }

    get distancia() {
        return function(outroVertice) {
            const deltaX = outroVertice.x - this.#x;
            const deltaY = outroVertice.y - this.#y;
            return Math.sqrt(deltaX * deltaX + deltaY * deltaY);
        }
    }

    //Método move
    move(x,y){
        this.#x = x;
        this.#y = y;
    }

    //Método equals
    equals(outroVertice) {
        if (this.#x === outroVertice.x && this.#y === outroVertice.y){
            return "Sao iguais"; 
        }else{
            return "Sao diferentes";
        }
    }
}

//Leitura de 3 vértices
const v1 = new Vertice(1,1);
const v2 = new Vertice(4,5);
const v3 = new Vertice(3,2);

console.log("Distancia de v1 e v2: ", v1.distancia(v2));

console.log("v2 e v3 sao: ",v2.equals(v3));

v3.move(4,5);

console.log("v2 e v3 sao: ",v2.equals(v3));
