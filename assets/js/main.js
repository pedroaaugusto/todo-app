const input = document.querySelector('#text')
const chores = document.querySelector('.newChores')
const infTodoMobile = document.querySelector('.infTodoMobile')
const selectTodoMobile = document.querySelector('.selectTodoMobile')
const infTodoDesktop = document.querySelector('.infTodoDesktop')
const itensLeft1 = document.querySelector('#itensLeft1')
const itensLeft2 = document.querySelector('#itensLeft2')
const circle = document.querySelectorAll('.circle')

let x = 0
let divsArray = [x]


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
    console.log(circleDiv) //apagar dps
    
    //Diz que div do circulo é filha da div do novo todo
    newDiv.appendChild(circleDiv)
    
    //Cria div do texto do todo e adiciona texto escrito por usuario para a mesma
    let textDiv = document.createElement('p')
    textDiv.innerHTML = input.value
    console.log(textDiv) //apagar dps
    
    //Diz que div do texto é filha da div do novo todo
    newDiv.appendChild(textDiv)
    
    divCounter() //Conta números de divs e diz que input tem valor vazio para ser colocado outro to-do
    
    showInfoTodo() //Mostra informações de divs conforme tamanho de dispositivo
    
    //Função que marca e desmarca todo's
    function ableOrDisableTodo() {
    
        if (newDiv.classList.contains('active')) {
            console.log('oi caralho')
            circleDiv.classList.remove('circle')
            circleDiv.classList.add('circleAtvio')
            newDiv.classList.remove('active')
            newDiv.classList.add('disable')
        } else {
            console.log('aiinnnn')
            circleDiv.classList.add('circle')
            circleDiv.classList.remove('circleAtvio')
            newDiv.classList.remove('disable')
            newDiv.classList.add('active')
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

function divCounter() {
    itensLeft1.textContent = x
    itensLeft2.textContent = x
    input.value = ""
}