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


function Login(){
  let inputUsuario = document.querySelector("#usuario-input").value;
  let labelLoginUsuario = document.querySelector("#label-login");

  let inputSenhaUsuario = document.querySelector("#password-input").value;
  let labelSenhaUsuario = document.querySelector("#label-password");
  
  // div msg erro
  let msgError = document.querySelector("#msg-erro");
  
  // Lista de usuarios
  let listaUsuario = [];
  
  // campos que vou pegar do local storage
  let usuariosValidos = {
    nome: null, 
    usuario: null,
    senha: null
  };
  
  // Pegando o campo listaUsuario
  listaUsuario = JSON.parse(localStorage.getItem('listaUsuario'));

  // Se o input com o nome do usuario, for igual aos nomes que tem dentro da lista que esta no local storage
  listaUsuario.forEach(element => {
    if(inputUsuario == element.nome && inputSenhaUsuario == element.senha){
      usuariosValidos = {
        nome: element.nome,
        usuario: element.usuario,
        senha: element.senha
      }
    }
  });

  if(inputUsuario == usuariosValidos.nome && inputSenhaUsuario == usuariosValidos.senha){
    window.location.href = './Kanban.html';
  }
  else{
    window.location.href = '../../index.html';
    labelLoginUsuario.setAttribute('style', 'color: red')
    labelSenhaUsuario.setAttribute('style', 'color: red')
    msgError.classList.remove('hide');
  }

}


