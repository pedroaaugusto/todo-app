const input = document.querySelector('#text')
const chores = document.querySelector('.newChores')
const infTodoMobile = document.querySelector('.infTodoMobile')
const selectTodoMobile = document.querySelector('.selectTodoMobile')
const infTodoDesktop = document.querySelector('.infTodoDesktop')
const itensLeft1 = document.querySelector('#itensLeft1')
const itensLeft2 = document.querySelector('#itensLeft2')

let x = 0


input.addEventListener("keydown", function (event) {
    var tecla = event.keyCode
    if (tecla == 13 && input.value != "") 
    {
        createTodo()
    }
})


function createTodo() {
    
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
    
    itensLeft1.textContent = x
    itensLeft2.textContent = x
    input.value = ""

    showInfoTodo()


    console.log('enter for apertado') //apagar dps  
    console.log(newDiv) //apagar dps
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
