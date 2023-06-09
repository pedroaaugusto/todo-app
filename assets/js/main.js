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
const iconSun = document.querySelector('#iconSun')
const iconMoon = document.querySelector('#iconMoon')

const body = document.querySelector('body')
const createTodoCSS = document.querySelector('.createTodo')
const newTodoCSS = document.querySelector('.newTodo active')


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
        if (body.className == "bodyDarkMode") {
            if (newDiv.classList.contains('active')) {
                console.log('todo completed') //apagar dps 
                circleDiv.classList.remove('circle')
                circleDiv.classList.add('circleAtvio')
                newDiv.classList.remove('active')
                newDiv.classList.add('disable')
                textDiv.style.textDecoration = "line-through"
                textDiv.style.color = "var(--darkTodoBoxTextCreating)" 
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
                textDiv.style.color = "var(--darkTodoBoxTextCreated)" 
                let y = divDisable - 1
                divDisable = y
                counterItensLeft()
            }
        } else {
            if (newDiv.classList.contains('active')) {
                console.log('todo completed') //apagar dps 
                circleDiv.classList.remove('circle')
                circleDiv.classList.add('circleAtvio')
                newDiv.classList.remove('active')
                newDiv.classList.add('disable')
                textDiv.style.textDecoration = "line-through"
                textDiv.style.color = "var(--lightTodoBoxTextCreating)" 
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
                textDiv.style.color = "var(--lightTodoBoxTextCreated)" 
                let y = divDisable - 1
                divDisable = y
                counterItensLeft()
            }
        }
        
    }

    iconSun.addEventListener("click", changeThemeToMoon)
    iconMoon.addEventListener("click", changeThemeToSun)

    function changeThemeToMoon() {
    
        iconSun.style.display = "none"
        iconMoon.style.display = "inline"
        body.classList.remove("bodyDarkMode")
        body.classList.add("bodyLightMode")
        createTodoCSS.style.backgroundColor = "var(--lightTodoBox)"
        input.style.backgroundColor = "var(--lightTodoBox)"
        input.style.color = "var(--lightTodoBoxTextCreating)"
        input.style.color.placeholder = "var(--lightTodoBoxTextCreating)"
        newDiv.style.backgroundColor = "var(--lightTodoBox)"
        newDiv.style.color = "var(--lightTodoBoxTextCreated)"
        infTodoDesktop.style.backgroundColor = "var(--lightTodoBox)"
        infTodoDesktop.style.color = "var(--lightTodoBoxText)"
        infTodoMobile.style.backgroundColor = "var(--lightTodoBox)"
        infTodoMobile.style.color = "var(--lightTodoBoxText)"
        selectTodoMobile.style.backgroundColor = "var(--lightTodoBox)"
        selectTodoMobile.style.color = "var(--lightTodoBoxText)"
        
        //Altera cores dos Todo's criados dependo se estão ativos ou não
        if (newDiv.classList.contains('active')) {
            textDiv.style.color = "var(--lightTodoBoxTextCreated)" 
        } else {
            textDiv.style.color = "var(--lightTodoBoxTextCreating)" 
        }
    }
    
    function changeThemeToSun() {
        
        iconMoon.style.display = "none"
        iconSun.style.display = "inline"
        body.classList.remove("bodyLightMode")
        body.classList.add("bodyDarkMode")
        createTodoCSS.style.backgroundColor = "var(--darkTodoBox)"
        input.style.backgroundColor = "var(--darkTodoBox)"
        input.style.color = "var(--darkTodoBoxTextCreating)"
        input.style.color.placeholder = "var(--darkTodoBoxTextCreating)"
        newDiv.style.backgroundColor = "var(--darkTodoBox)"
        newDiv.style.color = "var(--darkTodoBoxTextCreated)"
        infTodoDesktop.style.backgroundColor = "var(--darkTodoBox)"
        infTodoDesktop.style.color = "var(--darkTodoBoxTextCreated)"
        infTodoMobile.style.backgroundColor = "var(--darkTodoBox)"
        infTodoMobile.style.color = "var(--darkTodoBoxTextCreated)"
        selectTodoMobile.style.backgroundColor = "var(--darkTodoBox)"
        selectTodoMobile.style.color = "var(--darkTodoBoxTextCreated)"

        //Altera cores dos Todo's criados dependo se estão ativos ou não
        if (newDiv.classList.contains('active')) {
            textDiv.style.color = "var(--darkTodoBoxTextCreated)" 
        } else {
            textDiv.style.color = "var(--darkTodoBoxTextCreating)" 
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

    if(itensRemaining == 0) {
        infTodoMobile.style.display = "none"
        selectTodoMobile.style.display = "none"
        infTodoDesktop.style.display = "none"
    }
}

function counterItensLeft() {
    let y = divNumber - divDisable
    itensRemaining = y

    itensLeft.forEach(element => {
        element.textContent = itensRemaining 
    })
}

function clearCompletedTodos() {
    let itensDisable = document.querySelectorAll('.disable')

    itensDisable.forEach(element => {
        element.remove()
    })

    showInfoTodo()
}

function showAllTodos() {
    let itensActive = document.querySelectorAll('.active')
    let itensDisable = document.querySelectorAll('.disable')

    itensDisable.forEach(element => {
        element.style.display = 'flex'
    })
    itensActive.forEach(element => {
        element.style.display = 'flex'
    })
}

function showActiveTodos() {
    let itensActive = document.querySelectorAll('.active')
    let itensDisable = document.querySelectorAll('.disable')

    itensDisable.forEach(element => {
        element.style.display = 'none'
    })
    itensActive.forEach(element => {
        element.style.display = 'flex'
    })
}

function showCompletedTodos() {
    let itensActive = document.querySelectorAll('.active')
    let itensDisable = document.querySelectorAll('.disable')

    itensDisable.forEach(element => {
        element.style.display = 'flex'
    })
    itensActive.forEach(element => {
        element.style.display = 'none'
    })
}