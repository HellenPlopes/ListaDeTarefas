const button = document.querySelector('.button-taks')
const input = document.querySelector('.input-task')
const listaCompleta = document.querySelector('.list-taks')

let minhaListaDeItens = []


function adicionarNovaTarefa(){
    minhaListaDeItens.push({
        tarefa: input.value,
        concluida: false
    })

    input.value = ''


    mostrarTarefas()
}

function mostrarTarefas(){

    let novaLi = ''

    minhaListaDeItens.forEach( (item, posicao) => {
        novaLi = novaLi + ` 
        
        <li class="taks ${item.concluida && "done"}">
        <img src="./img/checked.png" alt="cheack-na-tarefa" onclick="concluirTarefa(${posicao})">
        
        <p>${item.tarefa}</p>
        
        
        <img src="./img/trash.png" alt="track-na-tarefa" onclick="deletarItem(${posicao})">
        </li>

        `
    })

    listaCompleta.innerHTML = novaLi

    localStorage.setItem('lista', JSON.stringify(minhaListaDeItens))
}



function concluirTarefa(posicao){
    minhaListaDeItens[posicao].concluida = !minhaListaDeItens[posicao].concluida

    mostrarTarefas();
}




function deletarItem(posicao){
    minhaListaDeItens.splice(posicao, 1); 
    console.log(posicao);

    mostrarTarefas();

}

function recarregarTerefas(){
    const tarefasDoLocalStorege = localStorage.getItem('lista')

    if(tarefasDoLocalStorege){
    minhaListaDeItens = JSON.parse(tarefasDoLocalStorege)
    }
    
    mostrarTarefas()
}

recarregarTerefas()
button.addEventListener('click', adicionarNovaTarefa)