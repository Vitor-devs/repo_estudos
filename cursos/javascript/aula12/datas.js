let data = new Date();

let ano = data.getFullYear();


const mesesAno = ["Jan", "Fev", "Mar", "Abr", "Mai", "jun", "jul", "ago"];

let mesEscrito = mesesAno[data.getMonth()];




const diaSem = ["Domingo", "Segunda", "Terça", "Quarta", "Quinta", "Sexta", "Sábado"];

let nomeSem = diaSem[data.getDay()];



d = new Date();
diaMes = d.getDate();
mes = d.getMonth()+1;
ano = d.getFullYear();

function addZero(x) { return x < 10 ? '0' + x : '' + x };

dataPadraoBR = addZero(diaMes) + "/" + addZero(mes) + "/" + ano;

console.log(dataPadraoBR);

//Comparar datas

var hoje = new Date();

var vencimento = new Date(2022, 0, 15);

if(hoje > vencimento){
    console.log("Sua conta venceu");
} else{
    console.log("Ainda nao venceu")
}