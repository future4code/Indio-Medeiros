//EXERCICIOS

function criarPost() {

    //criação da unidade de postagem
    const informacoesDoPost = {

            titulo: document.getElementById("titulo-post").value,
            autor: document.getElementById("autor-post").value,
            conteudo: document.getElementById("conteudo-post").value,
            foto: document.getElementById("image-post").value
        }
        //limpar as entradas de texto
    const todasEntradasDeTexto = document.getElementsByClassName("entrada-de-texto");
    todasEntradasDeTexto[0].value = " "
    todasEntradasDeTexto[1].value = " "
    todasEntradasDeTexto[2].value = " "
    todasEntradasDeTexto[3].value = " "
        //conjunto de postagens
    let conjuntoDePost = [informacoesDoPost];

    //guardar a postagem no storage
    let postFInal = `<h1>${conjuntoDePost[0].titulo}</h1> <br> <h3>${conjuntoDePost[0].autor}</h3> <br> <p>${conjuntoDePost[0].conteudo}</p> <bt> <img src=${conjuntoDePost[0].foto}>`
    localStorage.setItem("postagem", postFinal)

}
//postar na outra página
function carregando() {
    const areaPostagem = document.getElementById("container-de-posts")
    const postagem = localStorage.getItem("postagem")
    areaPostagem.innerHTML += postagem
}