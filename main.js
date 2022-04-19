const inputText = document.querySelector('#inputText')
const todoList = document.querySelector('#todoList')
const peddingTasks = document.querySelector('#peddingTasks')
 
const getLocalStorage = () => JSON.parse(localStorage.getItem('todoList')) ?? []
const setLocalStorage = (database) => localStorage.setItem('todoList', JSON.stringify(database))

const createElement = (task, index) =>{
    let listItem = `
    <li data-index=${index}>${task}
        <span data-index=${index} id='span'>
            <i class="fa-solid fa-trash-can"></i>
        </span>
    </li>
    `
    todoList.innerHTML += listItem
}

const insertList = () => {
        if(inputText.value.length != 0){
            const dataBase = getLocalStorage()
            dataBase.push({'task': `${inputText.value}`})
            setLocalStorage(dataBase)
            updateList()  
        } else{
            alert('Digite uma tarefa.') //criar um snackbar para aparecer o erro
        }    
        clearInput()
}

const updatePeddingTasks = () => {
    const dataBase = getLocalStorage()
    peddingTasks.innerHTML = `Você tem ${dataBase.length} tarefas pendentes.`
    setLocalStorage(dataBase)
}

const clearInput = () => {
    inputText.value = ''
}

const clearLastChildList = () => {
    while(todoList.firstChild){
        todoList.removeChild(todoList.lastChild)
    }
}

const clearAllList = (index) => {
    const dataBase = getLocalStorage()
    dataBase.splice(index)
    setLocalStorage(dataBase)
    updateList()
}

const updateList = () => {
    clearLastChildList()
    const dataBase = getLocalStorage()
    dataBase.forEach((item,index) => createElement(item.task, index)) //o banco está sendo lido e passado para a função createElement
    setLocalStorage(dataBase)
    updatePeddingTasks()
}

const removeItemList = (indice) => {
    const dataBase = getLocalStorage()
    dataBase.splice(indice,1)
    setLocalStorage(dataBase)
    updateList()
}

const iconRemove = (event) => {
    const element = event.target
    if(element.id === 'span'){
       const index = element.dataset.index 
        removeItemList(index)
    }  
}


todoList.onclick = iconRemove
document.querySelector('#btnAdd').addEventListener('click', () => insertList())
document.querySelector('#btnClear').addEventListener('click', () => clearAllList())
