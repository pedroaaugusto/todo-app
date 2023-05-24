const input = document.querySelector('#text')
const chores = document.querySelector('.newChores')
const infTodoMobile = document.querySelector('.infTodoMobile')
const selectTodoMobile = document.querySelector('.selectTodoMobile')
const infTodoDesktop = document.querySelector('.infTodoDesktop')
const itensLeft1 = document.querySelector('#itensLeft1')
const itensLeft2 = document.querySelector('#itensLeft2')
const newDivActive = document.querySelector('.new')

let x = 0


input.addEventListener("keydown", function (event) {
    var tecla = event.keyCode
    if (tecla == 13 && input.value != "") 
    {
        createTodo()
    }
})

// newDivActive.addEventListener('click', activeTodoCircle)

// function activeTodoCircle() {
//     console.log('1')
// }

// criar uma funcao que consiga identificar que div é e fazera alteracao de classedo circulo para circulo ativo, alternando isso

function createTodo() {
    
    let divNumber = x + 1
    x = divNumber
    

    //cria div do novo todo e adiciona classe newTodo e id unica para a mesma
    const newDiv = document.createElement('div')
    newDiv.classList.add('newTodo')
    newDiv.classList.add('active')
    newDiv.setAttribute('id', 'div'+divNumber)

    chores.appendChild(newDiv)

    //cria div do circulo e adiciona classe circle para a mesma
    let circleDiv = document.createElement('div')
    circleDiv.classList.add('circle')
    console.log(circleDiv) //apagar dps

    //Diz que div do circulo é filha da div do novo todo
    newDiv.appendChild(circleDiv)

    //cria div do texto do todo e adiciona texto escrito por usuario para a mesma
    let textDiv = document.createElement('p')
    textDiv.innerHTML = input.value
    console.log(textDiv) //apagar dps

    //Diz que div do texto é filha da div do novo todo
    newDiv.appendChild(textDiv)

    circleDiv.addEventListener('click', ableDisable)
    
    // newDiv.innerHTML =
    // `
    // <div class="new" id="div${divNumber}">

    //     <div class="circle"></div>
    //     <p>${input.value}</p>

    // </div>
    // `
    // chores.appendChild(newDiv)
    
    divCounter() //Conta números de divs e diz que input tem valor vazio para ser colocado outro to-do

    showInfoTodo() //Mostra informações de divs conforme tamanho de dispositivo


    console.log('enter for apertado') //apagar dps  
    console.log(newDiv) //apagar dps
}

function ableDisable(e) {
    let element = e.taget
    if (element.classList.contains('active')) {
        console.log('oi caralho')
        element.classList.remove('active')
        element.classList.add('disable')
    } else {
        console.log('aiinnnn')
        element.classList.remove('disable')
        element.classList.add('active')
    }
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

function divCounter() {
    itensLeft1.textContent = x
    itensLeft2.textContent = x
    input.value = ""
}