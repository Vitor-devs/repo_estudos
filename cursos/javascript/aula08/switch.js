function verificaCor(){
    cor = document.getElementById('cor').value;
    p = document.getElementById('teste')
    switch (cor) {
        case "azul":
            document.body.style.backgroundColor = "blue";
            p.innerHTML = ""
            break;
        case "vermelho":
            document.body.style.backgroundColor = "red";
            p.innerHTML = ""
            break;
        case "amarelo":
            document.body.style.backgroundColor = "yellow"
            p.innerHTML = ""
            break;
        default:
            document.body.style.backgroundColor = "white"
            p.innerHTML = "Digite algo"
    }
}