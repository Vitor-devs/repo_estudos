var hora = new Date().getHours();

if (hora < 12){
    console.log('bom dia');
} else if (hora < 18) {
    console.log('boa tarde');
} else {
    console.log('boa noite');
}


function verificar(){
    let nome = document.getElementById('nome').value;

    if (nome == "" || nome == null){
        document.getElementById('teste').innerHTML = "O campo não pode ser vazio"
    }


}