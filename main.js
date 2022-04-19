const inputText = document.querySelector('#inputText').value
const todoList = document.querySelector('#todoList')


let dataBase = [
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

const insertList = () => {
}

const clearList = () => {
    todoList.innerHTML = ''
}

const updateList = () => {
    dataBase.forEach(item => createElement(item.tarefa)) //o banco está sendo lido e passado para a função createElement
}
document.querySelector('#btnAdd').addEventListener('click', () => insertList())
document.querySelector('#btnClear').addEventListener('click', () => clearList())

updateList()

