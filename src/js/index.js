const botaoAlterarTema = document.getElementById("botao-alterar-tema");

const body = document.querySelector("body");

const imagemBotaoTrocaDeTemas = document.querySelector(".imagen-botao");

botaoAlterarTema.addEventListener("click", () => {
    const modoEscuroEstaAtivo = body.classList.contains("modo-escuro");

    body.classList.toggle("modo-escuro")

    if (modoEscuroEstaAtivo) {
        imagemBotaoTrocaDeTemas.setAttribute("src", "./src/imagens/sun.png");

    } else {
        imagemBotaoTrocaDeTemas.setAttribute("src", "./src/imagens/moon.png");

    }

});