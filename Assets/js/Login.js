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

// Inputs
let inputUsuario = document.querySelector("#usuario-input");
let inputSenhaUsuario = document.querySelector("#password-input");


// Ao clicar no botão, vai checar se localStorage está vazio e direcionar pro login
let btnEntrar = document.querySelector("#button-entrar");
btnEntrar.addEventListener('click', () => {
  // Caso o local storage esteja vazio, não é possivel entrar na pagina kanban
  if(localStorage.getItem('listaUsuario') == null){
    showAlert();
  } 
  else if(inputUsuario.value == "" && inputSenhaUsuario.value == ""){
    showAlert();
  }
  else{
    Login();
  }
})

// Função que realiza o login do usuario no local storage
function Login(){
  // Lista de usuarios
  let listaUsuario = [];
  
  // campos que vou pegar do local storage
  let usuariosValidos = {
    nome: "", 
    usuario: "",
    senha: ""
  };
  
  // Pegando o campo listaUsuario
  listaUsuario = JSON.parse(localStorage.getItem('listaUsuario'));

  // Se o input com o nome do usuario, for igual aos nomes que tem dentro da lista que esta no local storage
  listaUsuario.forEach(element => {
    if(inputUsuario.value == element.nome && inputSenhaUsuario.value == element.senha){
      usuariosValidos = {
        nome: element.nome,
        usuario: element.usuario,
        senha: element.senha
      }
    }
  });

  // Se os inputs preenchidos estiverem corretos, usuario vai ser mandado pra rota kanban
  if(inputUsuario.value == usuariosValidos.nome && inputSenhaUsuario.value == usuariosValidos.senha){
    window.location.href = './Kanban.html';
  }
  else{
    showAlert();
  }
}

// Alert personalizado biblioteca sweetalert
function showAlert(){
  Swal.fire({
    title: 'Usuário não encontrado',
    showClass: {
      popup: 'animate__animated animate__fadeInDown',
    },
    hideClass: {
      popup: 'animate__animated animate__fadeOutUp'
    },
  })
  
}

