
let btnAddTask = document.querySelector("#addTaks");
let formContainer = document.querySelector("#form-container");


btnAddTask.addEventListener('click', () => {
  formContainer.setAttribute('style', 'display: block');
})


// Botão concluido do formulario que envia a task
let btnConcluido = document.querySelector('#form-container #btnConcluido');
btnConcluido.addEventListener('click', () => {

  // Assim que botao for clicado, o "modal" container vai sumir
  formContainer.setAttribute('style', 'display: none');
});