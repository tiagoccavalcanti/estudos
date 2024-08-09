class Conta {
    public numero:number;
    public titualar:string;
    constructor(titular:string){
        this.numero=this.gerarNumeroConta()
        this.titualar=titular;
    }
    gerarNumeroConta():number{
        return Math.floor(Math.random()*100000)+1
    }
}

class ContaPF extends Conta{
    cpf:number;
    // se nao usasse o constructor aqui, o codigo funcionaria tranquilamente de modo que o constructor de Conta processaria dos dados, quando crio um constructor aquio processamento dos atributos das instancias de conta PF é feito aqui.
    constructor(cpf:number, titular:string){
        // quando isso acontece se faz necessaria a criação de um SUPER() e entram como parametros os atributos que classe que nao estao nesse constructor mas, no constructor "PAI", esses parametros vao ate o constructor pai e entrao oara os parametros pai.
        super(titular)
        this.cpf=cpf
    }
}

class ContaPJ extends Conta{
    cnpj:number;
    constructor(cnpj:number, titular:string){
        super(titular);
        cnpj=cnpj
    }
}

const cont1 = new ContaPF(12345678910,"tiago");
const cont2 = new ContaPJ(123,"CFBCursos");

console.log(cont1.titualar);
console.log(cont1.numero);