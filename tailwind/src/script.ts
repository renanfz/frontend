let fieldTask = document.getElementById('fieldTask') as HTMLInputElement
let btnAddTask = document.getElementById('btnAddTask') as HTMLButtonElement
let listTasks = document.getElementById('listTasks') as HTMLDivElement
let arrTasks = []

function addTask(value: string, arr: string[]): string[] {
     arr.push(value)
     return arr
}

function createCardTask(arr: string[]) {
     
}