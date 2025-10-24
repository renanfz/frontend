let btnAddTask = document.getElementById('btnAddTask')
let listTasks = document.getElementById('listTasks')
let arrTasks = []

function createCardTask(arr, list, field) {
    arr.push(field)
    let card = document.createElement('div')
    card.setAttribute('data-index', arr.indexOf(field))
    card.className = `grid grid-cols-[25px_4fr_1fr] w-full place-content-between items-center p-2 border-1 border-gray-400 rounded-md mb-1`
    card.innerHTML = `<input class="h-5" type="checkbox" id="checkTask">
                         <p class="pl-2.5" data-index="">${arr[arr.length-1]}</p>
                         <button class="bg-gray-300 rounded-md" id="btnRemove">Remover</button>`
    list.appendChild(card)                
}

function remove(index) {
    let btnRemove = document.getElementById('btnRemove')
}

// Events
btnAddTask.addEventListener('click', () => {
    let fieldValue = document.getElementById('fieldTask')
    if(fieldValue.value.trim() !== '') {
        createCardTask(arrTasks, listTasks, fieldValue.value)
        fieldValue.value = ''
        fieldValue.focus()
        alert(arrTasks)
    } else {
        fieldValue.placeholder = 'Ops! Preencha esse campo primeiro' 
        fieldValue.style.color = 'red'
    }
})

document.getElementById('fieldTask').addEventListener('keyup', function() {
    this.style.color = 'black'
    this.placeholder = 'Sua tarefa'
})
//

listTasks.addEventListener('click', (event) => {
  const div = event.target.closest('div[data-index]');
  const index = div.dataset.index
  if (div) {
    div.remove
    alert(index)
  }
});

