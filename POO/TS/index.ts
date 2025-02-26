// POO

interface IPessoa{ // usado para adicionar os atributos na classe
    nome: string;
    idade: number;
    altura: number;
    dormir: () => void; 
}

class Pessoa implements IPessoa{ //Definindo a abstração de uma pessoa

    // Atributos: Caracteristicas da class (variaveis)
    nome: string;
    idade: number;
    altura: number;
    private _cpf: string;

    // Metododos: Ação da classe (funcoes)

    constructor(nome: string, idade: number, altura: number, cpf: string) {

        this.nome = nome;
        this.idade = idade
        this.altura = altura;
        this._cpf = cpf;
    }

    dormir(){
        console.log(`${this.nome} está dormindo zzzZZzzZ`)
    }

    // acssessor: get
    get cpf(): string {
        return this._cpf;
    }


    // acssessor: setter
    set cpf(newCPF: string) {
        if (newCPF.length !== 14) {
            throw new Error("CPF's length is not corrected!")
        }
        this._cpf = newCPF
    }
}

class Professor extends Pessoa implements IPessoa {
    codigo: number;

    constructor(nome: string, idade: number, altura: number, cpf:string, codigo: number) {
        super(nome, idade, altura, cpf)
        this.codigo = codigo
    }

    ensinar() {
        console.log("Ensinando...")
    }
}

// Criando/instanciando um objeto referente a classe mae

const pessoa1 = new Pessoa("Eduardo", 21, 1.70, "000.000.000-00")
const pessoa2 = new Pessoa("Giovana", 18, 1.65, "000.000.000-01")
const pessoa3 = new Pessoa("GiovanNa", 18, 1.65, "000.000.000-03")

console.log(pessoa1)
pessoa2.dormir()

pessoa1.nome = "Edu"

console.log(pessoa2.cpf)

pessoa1.cpf = "000.000.000.04"

console.log(pessoa1)


let professor1 = new Professor("Jose", 64, 1.63, "333.333.333-33", 333)

// Polimorfismo

console.log(pessoa1 instanceof Pessoa);
console.log(pessoa1 instanceof Professor);
console.log(professor1 instanceof Pessoa);
console.log(professor1 instanceof Professor);