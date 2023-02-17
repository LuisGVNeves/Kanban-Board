let nickName = document.querySelector("#usuario-input");

let nomeUsuario = document.querySelector("#nome-input");
let nomeUsuarioLabel = document.querySelector("#label-login");
let boolNomeUsuario;

let senhaUsuario = document.querySelector("#password-input");
let senhaUsuarioLabel = document.querySelector("#label-password");
let boolSenhaUsuario;



// Lista para salvar o usuario no local storage, vou adicionar a listaUsuario em formato json no local storage, caso não tenha, vou criar uma lista vazia [] no local estorage
let listaUsuario = JSON.parse(localStorage.getItem('listaUsuario') || '[]');


// Formulario de castro
let form = document.querySelector('#form-cadastro');


// Verifica se nome.length > 5
function validaInputNome(){
  nomeUsuario.addEventListener('keyup', () => {
    if(nomeUsuario.value.length <= 2){
      nomeUsuarioLabel.setAttribute('style', 'font-size: 12px');
      nomeUsuarioLabel.innerHTML = "<strong>Insira no minimo 3 caracteres</strong>";
      boolNomeUsuario = false;
    }
    else{
      nomeUsuarioLabel.setAttribute('style', 'font-size: 12px');
      nomeUsuarioLabel.innerHTML = "";
      boolNomeUsuario = true;
    }
  })
}
validaInputNome();


// Verifica se senha.length > 5
function validaInputSenha(){
  senhaUsuario.addEventListener('keyup', () => {
    if(senhaUsuario.value.length < 5){
      senhaUsuarioLabel.setAttribute('style', 'font-size: 11px');
      senhaUsuarioLabel.innerHTML = "<strong>Minimo 5 caracteres</strong>";
      boolSenhaUsuario = false;
    }
    else{
      senhaUsuarioLabel.setAttribute('style', 'font-size: 20px');
      senhaUsuarioLabel.innerHTML = "";
      boolSenhaUsuario = true;
    }
  })
}
validaInputSenha();


// Clicar no icone de olho, vai mostrar a senha
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


// Ao clicar no botão de cadastrar, chama a função de cadastro
let btnCadastro = document.querySelector("#button-cadastrar");
btnCadastro.addEventListener('click', () => {
  cadastrar();
})
function cadastrar(){
  if(boolNomeUsuario == true && boolSenhaUsuario == true){
    let divLoading = document.querySelector(".spinner-border");
    
    const interval = setInterval(() => {
      divLoading.setAttribute('style', 'display: block');
    },1000);

    setTimeout(function(){
      clearTimeout(interval);
      divLoading.setAttribute('style', 'display: none');

      // Guardar objeto usuario no array
      listaUsuario.push(
        {
          nome: nomeUsuario.value, // nome no localStorage, recebe o nomeUsuario(input)
          usuario: nickName.value,
          senha: senhaUsuario.value
        }
      );

      // Salvar no localStorage => Nome do campo | O que colocar em formato string
      localStorage.setItem('listaUsuario', JSON.stringify(listaUsuario));
      
      window.location.href = "./Login.html";
      
    }, 2000);
  }      
}


  

  












