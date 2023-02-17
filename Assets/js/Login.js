// Assim que usuário clicar no olho que está no input da senha, eu mostro ela como input text e vice versa
function mostrarSenha(){
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


function FazerLogin() {
  let inputUsuario = document.querySelector("#usuario-input");
  let senhaUsuario = document.querySelector("#password-input");
  let labelSenhaUsuario = document.querySelector("#label-password");
  
  // div msg erro
  let msgError = document.querySelector("#msg-erro");
  
  // Lista de usuarios
  let listaUsuario = [];

  // campos que vou pegar do local storage
  let usuariosValidos = {
    nome: '', 
    usuario: '',
    senha: ''
  }

  // Pegando o campo listaUsuario
  listaUsuario = JSON.parse(localStorage.getItem('listaUsuario'))

  // Se o input com o nome do usuario, for igual aos nomes que tem dentro da lista que esta no local storage
  listaUsuario.forEach(element => {
    if(inputUsuario.value == element.nome && senhaUsuario.value == element.senha){
      usuariosValidos = {
        nome: element.nome,
        usuario: element.usuario,
        senha: element.senha
      }
    }
  });

  let form = document.querySelector("#form-login");

  // Se usuario for correto, vou mandar pra rota Kanban
  if(inputUsuario.value == usuariosValidos.nome && senhaUsuario.value == usuariosValidos.senha){
    window.location.href = 'Assets/html/Kanban.html';
  }
  else{
    msgError.classList.remove('hide');
    labelSenhaUsuario.setAttribute('style','color: red');
    inputUsuario.focus();
    window.location.href = '\index.html';
  }
}



