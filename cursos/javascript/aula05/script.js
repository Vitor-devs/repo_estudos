function eventoClick(){
    document.body.style.backgroundColor = "yellow";
    document.getElementById("texto").style.color = "green";
}

function eventoDblClick(){
    document.body.style.background = "blue";
}

function viraVermelho(){
    let div = document.getElementById("teste");
    div.style.backgroundColor = "red"   ;
}

function viraAzul(){
    document.getElementById("teste").style.backgroundColor = "blue";
}

function adicionaTexto(){
    let p = document.getElementById("texto");
}

function mudou(){
    console.log('mudou');
}

function teclaPressionada(){
    let input = document.getElementById("campoTexto").value;
    console.log(input);
}
