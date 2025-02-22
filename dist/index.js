"use strict";
// POO
class Pessoa {
    // Metododos: Ação da classe (funcoes)
    constructor(nome, idade, altura, peso) {
        this.nome = nome;
        this.idade = idade;
        this.altura = altura;
        this.peso = peso;
    }
    dormir() {
        console.log(`${this.nome} está dormindo zzzZZzzZ`);
    }
}
// Criando/instanciando um objeto referente a classe mae
const pessoa1 = new Pessoa("Eduardo", 21, 1.70, 10);
const pessoa2 = new Pessoa("Giovana", 18, 1.65, 10);
console.log(pessoa2);
pessoa1.dormir();
