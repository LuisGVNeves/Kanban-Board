
// Verifico qual usuario tem na lista do JSON
const usuarioLogado = JSON.parse(localStorage.getItem("usuarioLogado"));

const logado = document.querySelector("#logado");
logado.innerHTML = `Olá ${usuarioLogado.nome}`;

/*

function sair(){
  localStorage.removeItem("usuarioLogado");
  window.location.href = "./Assets/html/Login.html";
}
*/