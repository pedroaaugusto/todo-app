const input = document.querySelector('#text')

let x = 0


input.addEventListener("keydown", function (event) {
    var tecla = event.keyCode
    if (tecla == 13) 
    {
        createTodo()
    }
})


function createTodo() {
    console.log('fui clicado')
    
    let divNumber = x + 1
    x = divNumber
    
    let newDiv = document.createElement('div')
    newDiv.id = 'div' + divNumber
    let contentNewDiv = document.createTextNode(input.value)
    newDiv.appendChild(contentNewDiv)
    console.log(newDiv)
}