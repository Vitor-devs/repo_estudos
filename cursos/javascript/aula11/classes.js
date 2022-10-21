class Carro{
    constructor(valor1, valor2, valor3){
        this.marca = valor1;
        this.modelo = valor2;
        this.ano = valor3;
    }
}


concessionaria = [new Carro("Fiat", "Uno", 2001), new Carro("Volkswagen", "Gol", 2013)];

console.log(concessionaria[0], concessionaria[1]);
