const todoList = document.querySelector('#todoList')


let dataBase = [
    {'tarefa':'Estudar'},
]

const createElement = (tarefa) =>{
    let listItem = `
    <li>${tarefa}<span><i class="fa-solid fa-trash-can"></i></span></li>
    `
    todoList.innerHTML += listItem
}

const insertList = () => {
        let inputText = document.querySelector('#inputText').value
        if(inputText.length != 0){
            dataBase.push({'tarefa': `${inputText}`})
            updateList()  
        } else{
            alert('Digite uma tarefa.') //criar um snackbar para aparecer o erro
        }
       
}

const clearItemList = () => {
    while(todoList.firstChild){
        todoList.removeChild(todoList.lastChild)
    }
}

const clearAllList = () => {
    todoList.innerHTML = ''
}

const updateList = () => {
    clearItemList()
    dataBase.forEach(item => createElement(item.tarefa)) //o banco está sendo lido e passado para a função createElement
}

document.querySelector('#btnAdd').addEventListener('click', () => insertList())
document.querySelector('#btnClear').addEventListener('click', () => clearAllList())
