



let btnCadastro = document.querySelector("#button-cadastrar");

btnCadastro.addEventListener('click', () => {
  let form = document.querySelector("#form-cadastro");
  let div = document.createElement('div');

  div.classList.add("c-loader");

  const interval = setInterval(() => {
    //Faz alguma coisa
    form.appendChild(div);
  },1000)

  setTimeout(function(){
    clearTimeout(interval);
    div.classList.remove("c-loader");

    window.location.href = "../../Assets/html/Kanban.html";
  }, 2000)


  




})