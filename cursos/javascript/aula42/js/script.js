const url = 'https://jsonplaceholder.typicode.com/posts';
//Nessa api é retornado um array de objetos com os elementos: userId, id, title e body

const loadingElement = document.querySelector('#loading');
const postsContainer = document.querySelector('#post-container');

const postPage = document.querySelector("#post");
const PostContainer = document.querySelector('#post-container');
const commentContainer = document.querySelector('#comments-container');

const commentForm = document.querySelector('#comment-form');
const emailInput = document.querySelector('#email');
const bodyInput = document.querySelector('#body');

//Pegando id da url
//Um objeto que serve para achar os paramêtros da url
const urlSearchParams = new URLSearchParams(window.location.search);
//Pegando a id do post via urlSearchParams
const postId = urlSearchParams.get("id");
console.log(postId);


//Pegar todos os posts
//Fazendo async pq ela so executa após resposta do await
async function getAllPosts() {

    //Resposta da api com tudo que ela retorna
    const response = await fetch(url);
    console.log(response);

    //const data é a resposta do que está sendo retornado
    //O await response serve para aguardar a resposta em FORMATO Json
    const data = await response.json();
    console.log(data);

    //Quando tudo chegar na página via API adiciona a Classe Hide que tem display none
    loadingElement.classList.add('hide');

    //Aqui ele passa por cada post da api (Que contem 100) e em cada ele faz algo
    data.map((post) => {
        //Chama cada vez que retorna algo da API, cada bloco, de post

        //Criando elementos para colocar textos das API dentro
        const div = document.createElement('div');
        const title = document.createElement('h1');
        const body = document.createElement('p');
        const link = document.createElement('a');

        //Aqui adiciona no elemento h1 criado o conteudo do valor da chave de cada post
        title.innerText = post.title;

        //Aqui adiciona no elemento p criado o conteudo do valor da chave de cada post
        body.innerText = post.body;

        //Aqui adiciona no elemento a criado o conteudo do link com o nome Ler e em seguida passa o href
        link.innerText = "Ler";
        link.setAttribute("href", `/post.html?id=${post.id}`);

        div.appendChild(title);
        div.appendChild(body);
        div.appendChild(link);

        //Adiciona na div de id post container todos os elementos que foi adicionado acima
        postsContainer.appendChild(div)
    });
}
//Função para pegar o post individual com o id passado como paramêtro
async function getPost(id) {

    //Funçãopara pegar o que a API retorna tanto como o post individual como os comentários
    const [responsePost, responseComments] = await Promise.all([
        fetch(`${url}/${id}`), 
        fetch(`${url}/${id}/comments`)
    ])

    //Dois arrays de objeto, um para o post individual outro para os comentários
    const dataComments = await responseComments.json();
    const dataPost = await responsePost.json();

    //Tira a tela de loading quando carregada
    loadingElement.classList.add('hide');


    //Quando a tela de loading sai ele entra    
    postPage.classList.remove('hide');

    const title = document.createElement('h1');
    const body = document.createElement('p');

    //No h1 vai adicionar o que veio do dataPost na chave title
    title.innerText = dataPost.title;

    //No p vai adicionar o que veio do dataPost na chave body
    body.innerText = dataPost.body;

    PostContainer.appendChild(title);
    PostContainer.appendChild(body);

    //Cria o comentário com os valores passados na função abaixo 
    dataComments.map((comment) => {
        createComment(comment)
    });
}

//Função de criar o comentário
function createComment(comment) {

    //Cria uma div
    const div = document.createElement('div');

    //Cria um h3
    const email = document.createElement('h3');

    //Cria a tag p que vai adicionar o comentário
    const commentBody = document.createElement('p');

    //Na tag email (h3) adiciona o comment na tag email
    email.innerText = comment.email;

    //Na tag commentBody (p) adiciona o comment na tag body
    commentBody.innerText = comment.body;

    div.appendChild(email);
    div.appendChild(commentBody);

    commentContainer.append(div)
}

//Postar um comentário
async function postComment(comment){
    //Configurando requisição
    //Pega as urls e o caminho para aonde vai ser postado o comentário
    //Sendo method a maneira (PUT, DELETE, GET E PIRIRI PORORO)
    //Body o que vai ser adicionado
    //Headers o que vai ser passado de info adicional
    const response = await fetch(url, {
        method: "POST",
        body: comment,
        headers: {
            "Content-type": "application/json",
        },
    });

    const data = await response.json();
    createComment(data)
}



if (!postId) {
    getAllPosts();
} else {
    getPost(postId)

    //Adicionando evento de colocar o comentário no site
    commentForm.addEventListener("submit", (e)=>{
        e.preventDefault();

        let comment = {
            email: emailInput.value,
            body: bodyInput.value,
        }

        comment = JSON.stringify(comment);

        postComment(comment)
    });
}