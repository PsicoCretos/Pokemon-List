const botaoAlterarTema = document.getElementById("botao-alterar-tema");

const body = document.querySelector("body");
// console.log(body);

botaoAlterarTema.addEventListener("click", () => {
  // console.log("cgffbbbtytt");
  // PROX TROCA DE TEMA
  const modoEscuroEstaAtivo = body.classList.contains("modo-escuro");

  const imagemBotaoTrocaDeTema = document.querySelector(".imagem-botao");

  body.classList.toggle("modo-escuro");

  if (modoEscuroEstaAtivo) {
    // body.classList.remove("modo-escuro");
    imagemBotaoTrocaDeTema.setAttribute("src", "./src/imagens/sun.png");
  } else {
    // body.classList.add("modo-escuro");
    imagemBotaoTrocaDeTema.setAttribute("src", "./src/imagens/moon.png");
  }
});
