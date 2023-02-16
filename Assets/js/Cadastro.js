let nickName = document.querySelector("#usuario-input");

let nomeUsuario = document.querySelector("#nome-input");
let nomeUsuarioLabel = document.querySelector("#label-login");
let boolNomeUsuario;

let senhaUsuario = document.querySelector("#password-input");
let senhaUsuarioLabel = document.querySelector("#label-password");
let boolSenhaUsuario;


let btnCadastro = document.querySelector("#button-cadastrar");


// Lista para salvar o usuario no local storage, vou adicionar a listaUsuario em formato json no local storage, caso não tenha, vou criar uma lista vazia [] no local estorage
let listaUsuario = JSON.parse(localStorage.getItem('listaUsuario') || '[]');



function validaInputNome(){
  nomeUsuario.addEventListener('keyup', () => {
    if(nomeUsuario.value.length <= 2){
      nomeUsuarioLabel.setAttribute('style', 'font-size: 12px');
      nomeUsuarioLabel.innerHTML = "<strong>Insira no minimo 3 caracteres</strong>";
      boolNomeUsuario = false;
    }
    else{
      nomeUsuarioLabel.setAttribute('style', 'font-size: 20px');
      nomeUsuarioLabel.innerHTML = "Nome";
      boolNomeUsuario = true;
    }
  })
}
validaInputNome();

function validaInputSenha(){

  senhaUsuario.addEventListener('keyup', () => {
    if(senhaUsuario.value.length <= 5){
      senhaUsuarioLabel.setAttribute('style', 'font-size: 12px');
      senhaUsuarioLabel.innerHTML = "<strong>Minimo 5 caracteres</strong>";
      boolSenhaUsuarioUsuario = false;
    }
    else{
      senhaUsuarioLabel.setAttribute('style', 'font-size: 20px');
      senhaUsuarioLabel.innerHTML = "Senha";
      boolSenhaUsuario = true;
    }
  })
}
validaInputSenha();

function mostrarSenha(){
  // Assim que usuário clicar no olho que está no input da senha, eu mostro ela como input text e vice versa
  const btnMostrarSenha = document.querySelector("#icon-eye-password");
  btnMostrarSenha.addEventListener('click', () => {
    const inputSenha = document.querySelector("#password-input");  

    if(inputSenha.getAttribute('type') == 'password'){
      inputSenha.setAttribute('type', 'text');
    }
    else{
      inputSenha.setAttribute('type', 'password');
    }
  })

}
mostrarSenha();

function cadastrar(){
  let form = document.querySelector("#form-cadastro");

  if(boolNomeUsuario && boolSenhaUsuario){
  
    let div = document.createElement('div');

    const interval = setInterval(() => {
      div.classList.add("c-loader");
      form.appendChild(div);
    },1000);

    setTimeout(function(){
      clearTimeout(interval);
      div.classList.remove("c-loader");
      window.location.href = "../../Assets/html/Login.html";
    }, 2000);

    // Guardar objeto usuario no array
    listaUsuario.push(
      {
        nome: nomeUsuario.value, // nome no localStorage, recebe o nomeUsuario(input)
        usuario: nickName.value,
        senha: senhaUsuario.value
      }
    );
    // Salvar no localStorage => Nome do campo | O que colocar em formato string
    localStorage.setItem('listaUsuario', JSON.stringify(listaUsuario))
  }      

}

  
  

  











