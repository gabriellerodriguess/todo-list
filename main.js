const btnAdd = document.querySelector('#btnAdd')
const inputText = document.querySelector('#inputText').value

let banco = [
    {'tarefa':'Estudar'},
    {'tarefa':'Assistir'},
    {'tarefa':'fazer compras'}
]

const createElement = (tarefa) =>{
    const item = document.createElement("li")
    item.innerHTML = `
    <li>${tarefa}<span><i class="fa-solid fa-trash-can"></i></span></li>
    `
    document.querySelector('#todoList').appendChild(item
    )
}

const atualizaTela = () => {
    banco.forEach(item => createElement(item.tarefa)) //o banco está sendo lido e passado para a função createElement
}

atualizaTela()