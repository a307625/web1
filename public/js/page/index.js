
let todos1= [
        {id: 'topbar'}
    ]

let todos2= [
        {id: 'logo'},
        {id: 'select'},
        {id: 'search'},
        {id: 'link'}
    ]

let todos3= [
        {url: 'pic/logo.png', href: '#/home/', id: 'home', width:'118.91px' }
    ]

let todos4= [
        {text: 'NEWS', id: 'news', href: '#/news/'},
        {text: 'CONCEPT', id: 'concept' , href: '#/concept/'},
        {text: 'PRODUCT', id: 'product' , href: '#/product/'},
        {text: 'SERVICE', id: 'service' , href: '#/service/'},
        {text: 'STORES', id: 'stores' , href: '#/stores/'},
        {text: 'CONTACT', id: 'contact' , href: '#/contact/'}
    ]
let todos5= [
        {url: 'pic/search.png', function: 'srch()', id: 'srchPic', width:'15.23px'}
    ]
let todos6= [
        {id: 'srchInput'}
    ]
let todos7= [
        {url: 'pic/fb.png', href: 'http://www.facebook.com', id: 'facebook', width:'15.23px'}
    ]
function renderTodoList_I() {
          todos1.map(function(el){
                $('body').append(new $(`<div id = ${el.id}></div>`))
          })
          todos2.map(function(el){
                $('#topbar').append(new $(`<div id = ${el.id}></div>`))
          })
          todos3.map(function(el){
                $('#logo').append(new $(`<a id = '${el.id}' href = '${el.href}'><img  src = '${el.url}' width = '${el.width}' ></a>`))
          })
          todos4.map(function(el){
                $('#select').append(new $(`<a id = ${el.id} href = '${el.href}'>${el.text}</a>`))
          })
          todos5.map(function(el){
                $('#search').append(new $(`<a  onClick = '${el.function}'><img id = '${el.id}' src = '${el.url}' width = '${el.width}' Align=left ></a>`))
          })
          todos6.map(function(el){
                $('#search').append(new $(`<input id = '${el.id}' >`))//id = '${el.id}'
          })
          todos7.map(function(el){
                $('#link').append(new $(`<a id = '${el.id}' href = '${el.href}' target='_blank'><img  src = '${el.url}' width = '${el.width}'></a>`))
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

$('#srchInput').hide()

function srch(){
  event.preventDefault()
  $('#srchInput').show()
  $('#srchInput').width('87px')

  // $("#srchPic").animate({
  //     transform: 'translate(100px,100px)'
  //   });



//左右橫移//#srchInput{position:absolute;}
  $( "#srchInput" ).animate({
  "left": "-=71.82px"
}, 700, function() {
    // Animation complete.
  });

//左右橫移//#srchPic{position:absolute;}
  $( "#srchPic" ).animate({
  "left": "-=87px"
}, 500, function() {
    // Animation complete.
  });

}
