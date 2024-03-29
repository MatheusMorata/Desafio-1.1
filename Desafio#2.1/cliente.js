class Cliente{
    #nome;
    #cpf;
    #nascimento;
    #renda;
    #est_civil;

    Cliente(n,cpf,nasc,r = 0,est = ''){
        this.#nome = n;
        this.#cpf = cpf;
        this.#nascimento = nasc;
        this.#renda = r;
        this.#est_civil = est;
    }


}