let selectAno = document.getElementById('ano');
const anoAtual = new Date().getFullYear();



for (ano = anoAtual; ano >=  1900; ano--) {
    selectAno.innerHTML += "<option value = '"+ ano +"'>" + ano + "</option>";
}


const carro = ["Gol", "Fusca", "Brasilia", "Del Rey", "Chevette"];

var tamanho = carro.length;

for (i = 0; i < tamanho; i++){
    document.getElementById('teste').innerHTML += carro[i]+ " - ";
}
