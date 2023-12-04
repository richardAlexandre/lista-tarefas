let caixa1 = document.querySelector("#cx1");
let bnt1 = document.querySelector("#btn1");
let listaCompleta = document.querySelector('.list-tasks')

let adicionarItem = [];

function pegar() {
  adicionarItem.push(caixa1.value);
  console.log(adicionarItem);

  mostrarLista();
}

function mostrarLista() {
  let novaLi = "";

  adicionarItem.forEach((item) => {
    novaLi = novaLi +`
        <li class="task">
        <img src="./img/checked.png" alt="check-na-tarefa">
        <p>${item}</p>
        <img src="./img/trash.png" alt="tarefa-feita">
    </li>
        `;
  });

  listaCompleta.innerHTML = novaLi
}

bnt1.addEventListener("click", pegar);
