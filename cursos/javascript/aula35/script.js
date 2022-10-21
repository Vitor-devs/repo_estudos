//Sintaxe 

/*
function primeiraFuncao(){
    return new Promise((resolve) =>{
        setTimeout(()=>{
            console.log("Esperou isso aqui!");
            resolve();
        }, 1000);
    })
}

async function segundaFuncao(){
    console.log("Iniciou");

    await primeiraFuncao();

    console.log("Terminou")
}

segundaFuncao()
*/

function getUser(id){
    return fetch(`https://reqres.in/api/users?id=${id}`)
        .then((data) => data.json())
}

async function showUserName(id){
    const user = await getUser(id)
    console.log(`O nome do usuário é igual a ${user.data.first_name}`)
}


showUserName(5)

