const btnAdd = document.querySelector('#btnAdd')
const inputText = document.querySelector('#inputText').value
const todoList = document.querySelector('#todoList')

let banco = [
    {'tarefa':'Estudar'},
    {'tarefa':'Comprar'},
    {'tarefa':'Assistir tv'}
]

const createElement = (tarefa) =>{
    let listItem = `
    <li>${tarefa}<span><i class="fa-solid fa-trash-can"></i></span></li>
    `
    todoList.innerHTML += listItem
}

const atualizaTela = () => {
    banco.forEach(item => createElement(item.tarefa)) //o banco está sendo lido e passado para a função createElement
}

atualizaTela()