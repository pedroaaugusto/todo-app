const input = document.querySelector('#text')
const chores = document.querySelector('.newChores')

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
    
    console.log(newDiv)
}