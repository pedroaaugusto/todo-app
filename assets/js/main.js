const input = document.querySelector('#text')
const chores = document.querySelector('.newChores')
const infTodoMobile = document.querySelector('.infTodoMobile')
const selectTodoMobile = document.querySelector('.selectTodoMobile')
const infTodoDesktop = document.querySelector('.infTodoDesktop')
const circle = document.querySelectorAll('.circle')
const clearCompleted = document.querySelectorAll('.selectClearCompleted')
const all = document.querySelectorAll('.selectAll')
const active = document.querySelectorAll('.selectActive')
const completed = document.querySelectorAll('.selectCompleted')
const itensLeft = document.querySelectorAll('.itensLeft')

let divNumber = 0
let divDisable = 0
let itensRemaining = 0
let divsArray = [divNumber]

input.addEventListener("keydown", function (event) {
    var tecla = event.keyCode
    if (tecla == 13 && input.value != "") 
    {
        createTodo()
    }
})

clearCompleted.forEach(element => {
    element.addEventListener("click", () => {
        clearCompletedTodos()
    } )
});

all.forEach(element => {
    element.addEventListener("click", () => {
        showAllTodos()
    } )
});

active.forEach(element => {
    element.addEventListener("click", () => {
        showActiveTodos()
    } )
});

completed.forEach(element => {
    element.addEventListener("click", () => {
        showCompletedTodos()
    } )
});


function createTodo() {
    
    //Conta números de divs 
    let x = divNumber + 1
    divNumber = x
    
    //Cria div do novo todo e adiciona classe newTodo, active, adiciona id unica para a mesma e chama função quando clicada
    const newDiv = document.createElement('div')
    newDiv.classList.add('newTodo')
    newDiv.classList.add('active')
    newDiv.setAttribute('id', 'div'+divNumber)
    newDiv.onclick = ableOrDisableTodo
    
    //Faz com que quando criadas as divs dos todos sejam as mesmas adicionadas em um array
    divsArray.push(newDiv) 

    //Diz que as novas divs dos todo's criadas sao filhas de newchores 
    chores.appendChild(newDiv)      

    //Cria div do circulo e adiciona classe circle para a mesma
    let circleDiv = document.createElement('div')
    circleDiv.classList.add('circle')
    
    //Diz que div do circulo é filha da div do novo todo
    newDiv.appendChild(circleDiv)
    
    //Cria div do texto do todo e adiciona texto escrito por usuario para a mesma
    let textDiv = document.createElement('p')
    textDiv.innerHTML = input.value
    
    //Diz que div do texto é filha da div do novo todo
    newDiv.appendChild(textDiv)
    
    counterItensLeft() //Conta itens restantes

    input.value = "" //Diz que input tem valor vazio para ser colocado outro to-do
    
    showInfoTodo() //Mostra informações de divs conforme tamanho de dispositivo
    
    //Função que marca e desmarca todo's e risca texto quando todo foi completo
    function ableOrDisableTodo() {
    
        if (newDiv.classList.contains('active')) {
            console.log('todo completed') //apagar dps 
            circleDiv.classList.remove('circle')
            circleDiv.classList.add('circleAtvio')
            newDiv.classList.remove('active')
            newDiv.classList.add('disable')
            textDiv.style.textDecoration = "line-through"
            textDiv.style.color = "hsl(234, 11%, 52%)" // vai ser necessario fazer funcao para fazer troca de cor relacionado ao tema
            let y = divDisable + 1
            divDisable = y
            counterItensLeft()
        } else {
            console.log('todo active') //apagar dps 
            circleDiv.classList.add('circle')
            circleDiv.classList.remove('circleAtvio')
            newDiv.classList.remove('disable')
            newDiv.classList.add('active')
            textDiv.style.textDecoration = "none"
            textDiv.style.color = "var(--darkTodoBoxTextCreated)" // vai ser necessario fazer funcao para fazer troca de cor relacionado ao tema
            let y = divDisable - 1
            divDisable = y
            counterItensLeft()
        }
    }
    
    console.log('enter for apertado') //apagar dps  
    console.log(newDiv) //apagar dps
    console.log(divsArray) //apagar dps
    
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

function counterItensLeft() {
    let itensRemaining = divNumber - divDisable

    itensLeft.forEach(element => {
        element.textContent = itensRemaining 
    })
}

function clearCompletedTodos() {
    if (newDiv.classList.contains('disable')) {

    }
}

function showAllTodos() {
    alert("all") //apagar dps
}

function showActiveTodos() {
    alert("active") //apagar dps
}

function showCompletedTodos() {
    alert("completed") //apagar dps
}