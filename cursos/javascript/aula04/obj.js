const carro = {
    marca: "ford", 
    modelo:"Ka", 
    ano: 2015, 
    placa: "EDE-5874", 
    buzina: function() {
         alert('biiiiiii')
    }, 

    completo: function(){
        return `A marca é ${this.marca} e o ano é ${this.ano}`
    }
};

console.log(carro.completo()); 