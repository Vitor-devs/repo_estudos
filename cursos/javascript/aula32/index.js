//Criando Promise 
const myPromise = new Promise((resolve, reject) => {

    const nome = "Vitor"

    if (nome === "Vitor") {
        resolve('Usuário Vitor encontrado');
    } else {
        reject("Usuário Vitor não foi encontrado");
    }
});


myPromise.then((data) => {
    console.log(data)
});

// Encadeamento de then's
const myPromise2 = new Promise((resolve, reject) => {

    const nome = "Vitor"

    if (nome === "Vitor") {
        resolve('Usuário Vitor encontrado');
    } else {
        reject("Usuário Vitor não foi encontrado");
    }
});


myPromise2
    .then((data) => {
        return data.toLowerCase()
    })
    .then((stringDiferente) => {
        console.log(stringDiferente)
    })

//Retorno do Catch

const myPromise3 = new Promise((resolve, reject) => {

    const nome = "João"

    if (nome === "Vitor") {
        resolve('Usuário Vitor encontrado');
    } else {
        reject("Usuário Vitor não foi encontrado");
    }
});


myPromise3
    .then((data) => {
        console.log(data)
    }).catch((erro) => {
        console.log(`Aconteceu esse erro: ` + erro)
    })

//Resolver várias promessas
const p1 = new Promise((resolve, reject) => {
   setTimeout(() => {
    resolve("P1 funcionando")
   }, 3000)
})

const p2 = new Promise((resolve, reject) => {
    resolve("P2 OK")
})

const p3 = new Promise((resolve, reject) => {
    resolve("P3 OK")
})

const resolveAll = Promise.all([p1, p2, p2]).then((data) => {
    console.log(data)
})


//Fetch API do Github

const userName = 'Vitor-devs';

fetch(`https://api.github.com/users/${userName}`, {
    method: 'GET',
    headers: {
        Accept: 'application/vnd.github.v3+json',
    }
}).then ((response) => {
    return response(json)
}).then((data) => {
    console.log(data)
})