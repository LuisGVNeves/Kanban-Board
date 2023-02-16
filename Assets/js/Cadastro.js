// Validação do nome do usuario
let nomeUsuario = document.querySelector("#nome-input");
function validaNome(){
  let nomeUsuarioLabel = document.querySelector("#label-login");

  //Validação do input nome
  nomeUsuario.addEventListener('keyup', () => {
    if(nomeUsuario.value.length <= 2){
      nomeUsuarioLabel.setAttribute('style', 'font-size: 12px');
      nomeUsuarioLabel.innerHTML = "<strong>Insira no minimo 3 caracteres</strong>";
    }
    else{
      nomeUsuarioLabel.setAttribute('style', 'color: green');
      nomeUsuarioLabel.innerHTML = "Nome";
    }
  })
}
validaNome();

// Validação do input senha
let senhaUsuario = document.querySelector("#password-input");
function validaSenha(){
  let senhaUsuarioLabel = document.querySelector("#label-password");
  
  senhaUsuario.addEventListener('keypress', (e) => {
    if(senhaUsuario.value.length <= 4){ 
      senhaUsuarioLabel.setAttribute('style', 'font-size: 12px;');
      senhaUsuarioLabel.innerHTML = "Minimo 5 caracteres";
    }
    else{
      senhaUsuarioLabel.setAttribute('style', 'font-size: 20px;');
      senhaUsuarioLabel.innerHTML = "Senha";
    }
  })
}
validaSenha();


window.addEventListener('load', () => {
  let btnCadastro = document.querySelector("#button-cadastrar");
  let form = document.querySelector("#form-cadastro");

  btnCadastro.addEventListener('click', () => {

    if(nomeUsuario.value.length <= 2 && senhaUsuario.value.length == 0 || nomeUsuario.value.length <= 2 && senhaUsuario.value.length <= 4){
      window.location.href = "./Cadastro.html";
    }
    /*
    if(senhaUsuario.value.length <= 4){
      window.location.href = "./Cadastro.html";
    }
    */

    let div = document.createElement('div');
    const interval = setInterval(() => {
      
      div.classList.add("c-loader");
      
      form.appendChild(div);
    },1000);
    
    setTimeout(function(){
      clearTimeout(interval);
      div.classList.remove("c-loader");
      
      window.location.href = "../../Assets/html/Kanban.html";
    }, 2000);
    
    e.target.removeEventListener();
  });
  
  

  
  


})










