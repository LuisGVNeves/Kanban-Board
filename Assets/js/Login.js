'use strict';

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

