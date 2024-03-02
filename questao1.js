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