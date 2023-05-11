const input = document.querySelector('#text')
const chores = document.querySelector('.newChores')
const infTodoMobile = document.querySelector('.infTodoMobile')
const selectTodoMobile = document.querySelector('.selectTodoMobile')
const infTodoDesktop = document.querySelector('.infTodoDesktop')
const itensLeft = document.querySelector('#itensLeft')

let x = 0


input.addEventListener("keydown", function (event) {
    var tecla = event.keyCode
    if (tecla == 13) 
    {
        createTodo()
    }
})


function createTodo() {
    console.log('enter for apertado')
    
    let divNumber = x + 1
    x = divNumber
    
    const newDiv = document.createElement('div')
    newDiv.classList.add('newTodo')
    
    newDiv.innerHTML =
    `
    <div class="new" id="div${divNumber}">

        <div class="circle"></div>
        <p>${input.value}</p>

    </div>
    `
    chores.appendChild(newDiv)
    
    console.log(newDiv) //apagar dps

    showInfoTodo()
}

function showInfoTodo() {

    let windowWidth = window.innerWidth

    if (windowWidth < 600) {
        infTodoMobile.style.display = "flex"
        selectTodoMobile.style.display = "flex"

        infTodoDesktop.style.display = "none"
    } else {
        infTodoDesktop.style.display = "flex"

        infTodoMobile.style.display = "none"
        selectTodoMobile.style.display = "none"
    }
}