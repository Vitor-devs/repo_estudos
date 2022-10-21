
/*
const carro = {
    marca: "Fiat",
    modelo: "Uno",
    motor: ["1.6", "1.4", "1.0"]
}

//Converteu para texto JSON
let texto = JSON.stringify(carro);

//Inseriu o texto convertido em JSON no HTML
document.getElementById('area').innerHTML = texto;

//Converteu para objeto JSON
let obj = JSON.parse(texto)

//Colocou o objeto em JSON no HTML
document.getElementById('area').innerHTML = obj.motor[0];

*/

/*
const ajax = new XMLHttpRequest();
ajax.open('GET', 'https://viacep.com.br/ws/01001000/json/');
ajax.send();

ajax.onload = function(){
    document.getElementById('area').innerHTML = this.responseText;
    let objAjax = JSON.parse(this.responseText);
    document.getElementById('area').innerHTML = objAjax.uf;
}
*/

function buscarCEP() {
    let input = document.getElementById('CEP').value;

    const ajax = new XMLHttpRequest();
    ajax.open('GET', 'https://viacep.com.br/ws/' + input + '/json/');
    ajax.send();

    ajax.onload = function () {
        document.getElementById('texto').innerHTML = this.responseText;

        //Transformou o texto em objetos
        let obj = JSON.parse(this.response);

        //Peguei os valores que eu queria
        let logradouro = obj.logradouro;
        let cidade = obj.localidade;
        let estado = obj.uf;

        document.getElementById('texto').innerHTML = `Logradouro: ${logradouro} <br> Cidade: ${cidade} <br> Estado: ${estado} <br> Obrigado por utilizar nossos serviços!`
    }

}