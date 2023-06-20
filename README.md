# Todo App

Crie sua propria lista de afazeres!!

## Objetivo

O objetivo deste projeto foi achar uma solução para um desafio do Front-end Mentor <a href="https://www.frontendmentor.io/challenges/todo-app-Su1_KokOW">Todo app</a> onde crio uma lista de afazeres, tendo em mente principalmente aprimorar habilidades em JavaScript, DOM.

## Acesse

<a href="https://ubiquitous-pudding-56fc37.netlify.app">Lista de afazeres</a>

## Tabela de conteúdo 

- [Visão geral](#visão-geral)
  - [O desafio](#o-desafio)
  - [Capturas de tela](#capturas-de-tela)
  - [Links](#links)
- [Meu processo](#meu-processo)
  - [Construido com](#construído-com)
  - [Features](#features)
  - [Próximos passos](#próximos-passos)
  - [Tecnologias utilizadas](#tecnologias-utilizadas)
  - [O que aprendi](#o-que-aprendi)
  - [Status do projeto](#status-do-projeto)
  - [Recursos úteis](#recursos-úteis)
- [Autor](#autor)
- [Licença](#licença)

## Visão geral

### O desafio

Funcionalidades:
- Veja o layout ideal para o aplicativo, dependendo do tamanho da tela do dispositivo
- Veja os estados de foco para todos os elementos interativos na página
- Crie ilimitados Afazeres
- Troque para o modo que preferir sendo claro ou escuro

### Capturas de tela

### Capturas de tela - interface desejada 

#### layout mobile (375px) <br>

<table>
  <tr>
    <td>
      <!-- coluna 1 --> 
      <a href="link_da_imagem1"><img src="https://github.com/pedroaaugusto/todo-app/assets/115605744/c75ea2d1-6664-4f11-8967-71ea2e990c23" alt="Dark layout mobile"></a>
    </td>
    <td>
      <!-- coluna 2 --> 
      <a href="link_da_imagem2"><img src="https://github.com/pedroaaugusto/todo-app/assets/115605744/c10b650d-f13c-4286-be5c-7c5d5ddc4ad0" alt="Light layout mobile"></a>
    </td>
   </tr>
</table>

#### layout desktop (1440px) <br>

![desktop-design-dark](https://github.com/pedroaaugusto/todo-app/assets/115605744/d29ed625-a8fd-49d0-bd0c-17b6489cfd88)

![desktop-design-light](https://github.com/pedroaaugusto/todo-app/assets/115605744/b45eede0-4b06-4526-bc68-f2ca0e8db030)

#### layout active desktop (1440px) <br>

![active-states-dark](https://github.com/pedroaaugusto/todo-app/assets/115605744/cf2b1a30-d6ea-43e5-8641-8f3af831a64b)

![active-states-light](https://github.com/pedroaaugusto/todo-app/assets/115605744/fc251b3e-e82b-437d-a565-61a2895bdd54)

### Capturas de tela - interface obtida 

#### layout mobile (375px) <br>

<table>
  <tr>
    <td>
      <!-- coluna 1 --> 
      <a href="link_da_imagemx"><img src="https://github.com/pedroaaugusto/todo-app/assets/115605744/99a10b44-3ee6-45e4-ad69-4615eb94cee4" alt="Dark layout mobile"></a>
    </td>
    <td>
      <!-- coluna 2 --> 
      <a href="link_da_imagemx"><img src="https://github.com/pedroaaugusto/todo-app/assets/115605744/11b2e5db-a0d0-4504-87e1-cdbb98746c2a" alt="Light layout mobile"></a>
    </td>
   </tr>
</table>

#### layout desktop (1440px) <br>

![2023-06-13-05-19-ubiquitous-pudding-56fc37 netlify app](https://github.com/pedroaaugusto/todo-app/assets/115605744/86544970-707d-40dc-a88f-8dc656eb5034)

![2023-06-13-05-20-ubiquitous-pudding-56fc37 netlify app](https://github.com/pedroaaugusto/todo-app/assets/115605744/b932b3a0-462b-4b50-8380-b4946fcaacf6)

#### layout active desktop (1440px) <br>

![2023-06-13-05-29-ubiquitous-pudding-56fc37 netlify app](https://github.com/pedroaaugusto/todo-app/assets/115605744/55983077-e4e2-4792-adfa-2bd8a2fa43ab)

![2023-06-13-05-30-ubiquitous-pudding-56fc37 netlify app](https://github.com/pedroaaugusto/todo-app/assets/115605744/6b0bf8c6-5b1e-48b4-b6e3-852f75dcee53)

### Links

- URL da solução: [GitHub](https://github.com/pedroaaugusto/todo-app)
- URL do site: [Site](link (ex https))

## Meu processo

### Construído com:

![html5](https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white) ![css3](https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white) ![JavaScript](https://img.shields.io/badge/JavaScript-323330?style=for-the-badge&logo=javascript&logoColor=F7DF1E)

## Features

:hammer_and_wrench: Criação de diversos afazeres ; <br>
:iphone: Manipulação dos afazeres a partir de botões como all, active, completed e clear completed ; <br>
:fountain_pen: Dark e Light mode ; <br>

## Próximos passos 
#### (Completo)

- [X] Criar Html
- [X] Estilizar página com css e utilizando tambem variaveis
- [X] Criar um foco em todos os elementos interativos da página
- [X] Criar lógica por tras da manipulação dos Todo's
- [X] Criar lógica por tras do modo claro e modo escuro

### Tecnologias utilizadas

- Arquitetura de Software
- Unidades relativas
- JavaScript
- Convencional Commits
- FlexBox
- Var CSS
- Mobile-first

### O que aprendi

#### *Aprendi a criar elementos usando JavaScript, no caso que apresento aqui crio as divs dos afazeres conforme especificação que necessitava;
```js
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
```
#### nesse caso a divisão que sera criada tera esse modelo 
```html
<div class="newTodo active" id="div1">
  <div class="circle"></div>
  <p>(afazer que foi escrito)</p>
</div>
```

#### *Aprendi a utilizar as variaveis no css para a finalidade de fazer troca entre os temas light e dark
```css
:root{
    /*imagens de background*/
    --darkBackgroundMobile: url("../img/bg-mobile-dark.jpg");
    --lightBackgroundMobile: url("../img/bg-mobile-light.jpg");
    --darkBackgroundDesktop: url("../img/bg-desktop-dark.jpg");
    --lightBackgroundDesktop: url("../img/bg-desktop-light.jpg");
    /*cores de background*/
    --darkBackgroundColor: hsl(235, 21%, 11%);
    --lightBackgroundColor: hsl(236, 33%, 92%);
    /*cores de box e input*/
    --darkTodoBox: hsl(235, 24%, 19%);
    --lightTodoBox: hsl(0, 0%, 98%);
    /*cores de texto do input -- criando todo*/
    --darkTodoBoxTextCreating: hsl(234, 11%, 52%);
    --lightTodoBoxTextCreating: hsl(233, 14%, 35%);
    /*cores de texto do paragrafo -- todo criado*/
    --darkTodoBoxTextCreated: hsl(234, 39%, 85%);
    --lightTodoBoxTextCreated: hsl(237, 14%, 26%);
    /*cores de texto das ifnformações dos todo`s*/
    --darkInfBoxText: hsl(233, 14%, 35%);
    --hoverInfBoxText: hsl(220, 98%, 61%);
    --activeInfBoxText: hsl(220, 89%, 71%);
}
```

#### *Aprendi que a propriedade background-image pode ser usada de algumas formas diferentes, nesse caso utilizei com uma imagem em si e alem disso com um cor de fundo, no caso um gradiente;
```css
background-image: url(../img/icon-check.svg),
                  linear-gradient(135deg, hsla(192, 100%, 67%, 1) 0%, hsla(280, 87%, 65%, 1) 100%);
```

### Status do projeto

Faltando escrever os tópicos que aprendi com esse projeto no READ.ME e resolver um bug na criação de afazeres no light mode.

### Recursos úteis

- [Curso sobre JavaScript](https://www.cursoemvideo.com/curso/javascript/) - Curso com ótima didática para quem busca dar os primeiros passos em JavaScript.
- [Escopo JavaScript](https://medium.com/weyes/entendendo-o-uso-de-escopo-no-javascript-3669172ca5ba) - Site ótimo para entender como funciona o escopo no JavaScript.
- [Conventional Commits](https://www.conventionalcommits.org/pt-br/v1.0.0/) - Ótimo conteúdo sobre Conventional Commits, importantíssimo para lógica de commits ajuda a melhorar a qualidade do código-fonte, tornando as alterações mais fáceis de entender e rastrear.
- [FlexBox](https://css-tricks.com/snippets/css/a-guide-to-flexbox/) - Ótimo conteúdo sobre FlexBox.

## Autor

- GitHub - [Pedro Alves](https://github.com/pedroaaugusto)
- LinkedIn - [Pedro Alves](https://www.linkedin.com/in/pedroaalves)

## Licença

![GitHub](https://img.shields.io/github/license/pedroaaugusto/age-calculator?style=plastic)
