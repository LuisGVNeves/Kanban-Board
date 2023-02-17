// Botão que adiciona task no kanban
let btnAddTask = document.querySelector("#addTaks");

// Container que acopla o formulario
let formContainer = document.querySelector("#form-container");

// Assim que clicar no botão de adicionar task, vou fazer ele aparecer na tela
btnAddTask.addEventListener('click', () => {
  // Formulario aparece
  formContainer.setAttribute('style', 'display: block;');
})



function movimentarTasks(){
  // Método de movimentar tasks: https://github.com/WilliamDosSantos/Drag-and-Drop-JavaScript/blob/main/script.js, resto do código é meu =)

  const columns = document.querySelectorAll(".column");

  document.addEventListener("dragstart", (e) => {
    e.target.classList.add("dragging");
  });
  
  document.addEventListener("dragend", (e) => {
    e.target.classList.remove("dragging");
  });
  
  columns.forEach((item) => {
    item.addEventListener("dragover", (e) => {
      const dragging = document.querySelector(".dragging");
      const applyAfter = getNewPosition(item, e.clientY);
  
      if (applyAfter) {
        applyAfter.insertAdjacentElement("afterend", dragging);
      } else {
        item.prepend(dragging);
      }
    });
  });
  
  function getNewPosition(column, posY) {
    const cards = column.querySelectorAll(".item:not(.dragging)");
    let result;
  
    for (let refer_card of cards) {
      const box = refer_card.getBoundingClientRect();
      const boxCenterY = box.y + box.height / 2;
  
      if (posY >= boxCenterY) result = refer_card;
    }
  
    return result;
  }
}
movimentarTasks();







// Coluna task nao iniciada
let colunaTaskNaoIniciada = document.querySelector('#task-nao-iniciada');



// Calcula a qtd de x clicada no botao pra adicionar as tasks
let cliquesBotao = 0; 


// Botão concluido do formulario que envia a task
let btnConcluido = document.querySelector('#form-container #btnConcluido');
btnConcluido.addEventListener('click', () => {
  
  cliquesBotao++;
  
  // Titulo da task
  let tituloTask;
  
  // Conteudo da task
  let conteudoTask;
  
  // Criar uma div
  let divTaskNaoIniciada;

  let data;

  for(let i =0; i < cliquesBotao; i++){
    tituloTask = document.querySelector('#tituloTask');
    conteudoTask = document.querySelector('#conteudoTask');
    data = document.querySelector('#dataTask');

    // Cria uma nova div a cada clique
    divTaskNaoIniciada = document.createElement('div');

    // Adicionar a classe item para pegar estilizacao do scss
    divTaskNaoIniciada.classList.add('item');


    // Deixar ela como draggable permite a manipulação dela
    divTaskNaoIniciada.draggable = true;

    // Nova task recebe o conteudo, data, e titulo
    divTaskNaoIniciada.innerHTML = `<p><strong>Titulo: </strong> ${tituloTask.value}</p>
    <br>
    <strong>Conteúdo: </strong>
    <p>${conteudoTask.innerHTML}</p> 
    <br>
    <strong>Data: </strong>
    <p>${data.value}</p> `;
    
    // Após a task ser inclusa, se o  conteudoTask.innerHTML ultrapassar os limites da borda, eu deixo invisivel
    divTaskNaoIniciada.setAttribute('style', 'overflow: hidden;  white-space: nowrap;')
  }

  // Adiciono na coluna a task não iniciada
  colunaTaskNaoIniciada.appendChild(divTaskNaoIniciada);


  // Assim que botao concluido for clicado, o "modal" container vai sumir
  formContainer.setAttribute('style', 'display: none');
});
