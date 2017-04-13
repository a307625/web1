let todos1= [
        {id: 'topbar'}
    ]

let todos2= [
        {id: 'logo'},
        {id: 'select'},
        {id: 'link'}
    ]

let todos3= [
        {url: '../../../pic/test.png', link: 'home()', id: 'pic', width: '200px', height:'100px' }
    ]

let todos4= [
        {text: 'NEWS', id: 'news'},
        {text: 'CONCEPT', id: 'concept'},
        {text: 'PRODUCT', id: 'product'},
        {text: 'SERVICE', id: 'service'},
        {text: 'STORES', id: 'stores'},
        {text: 'CONTACT', id: 'contact'}
    ]
function renderTodoList_I() {
          todos1.map(function(el){
                $('body').append(new $(`<div id = ${el.id}></div>`))
          })
          todos2.map(function(el){
                $('#topbar').append(new $(`<div id = ${el.id}></div>`))
          })
          todos3.map(function(el){
                $('#logo').append(new $(`<img src = '${el.url}' height = '${el.height}' width = '${el.width}' onClick = '${el.link}' id = '${el.pic}'>`))
          })
          todos4.map(function(el){
                $('#select').append(new $(`<a id = ${el.id} href = '../../../html/page/home.html'><b>${el.text}</b></a>`))
          })
        }

renderTodoList_I()

let todosA= [
        {id: 'content'}
    ]
function renderTodoList_II() {
          todosA.map(function(el){
                $('body').append(new $(`<div id = ${el.id}><h1>CONTENT</h1></div>`))
          })

        }

renderTodoList_II()

let todosI= [
        {id: 'bottombar'}
    ]
function renderTodoList_III() {
          todosI.map(function(el){
                $('body').append(new $(`<div id = ${el.id}><h1>BOTTOM BAR</h1></div>`))
          })

        }

renderTodoList_III()

function home () {
  window.location.assign('../../../html/page/home.html')
}
