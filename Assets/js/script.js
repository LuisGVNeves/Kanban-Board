// Se o token do localStorage for igual a nulo, vou redirecionar para pagina de login
if(localStorage.getItem("token") == null){
  alert("Você precisa estar logado para acessar essa página");

  window.location.href = "./Assets/html/Login.html";
}


const usuarioLogado = JSON.parse(localStorage.getItem("usuarioLogado"));


const logado = document.querySelector("#logado");

logado.innerHTML = `Olá ${usuarioLogado.nome}`;



function sair(){
  localStorage.removeItem("token");
  localStorage.removeItem("usuarioLogado");
  window.location.href = "./Assets/html/Login.html";
}