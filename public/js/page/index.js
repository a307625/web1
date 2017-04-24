
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
let todosII= [
        {id: 'bottomP1'},
        {id: 'bottomP2'},
        {id: 'bottomP3'},
        {id: 'bottomP4'},
        {id: 'bottomP5'},
        {id: 'bottomP6'},
        {id: 'bottomP7'},
    ]

let todosIII= [
        {text: 'NEWS' , href: '#/news/', id: 'bottomP1_a'},
        {text: 'CONCEPT' , href: '#/concept/', id: 'bottomP1_b'},
        {text: 'SERVICE' , href: '#/service/', id: 'bottomP1_c'},
        {text: 'STORES' , href: '#/stores/', id: 'bottomP1_d'},
    ]

let todosIV= [
        {text: 'PRODUCT' , href: '#/product/', id: 'bottomP2_a'},
        {text: '- product1' , href: '#/concept/', id: 'product1'},
        {text: '- product2' , href: '#/service/', id: 'product2'},
        {text: '- product3' , href: '#/stores/', id: 'product3'},
    ]
let todosV= [
        {text: '&nbsp' , id: 'blank1'},
        {text: '- product4' , href: '#/stores/', id: 'product4'},
        {text: '- product5' , href: '#/stores/', id: 'product5'},
        {text: '- product6' , href: '#/stores/', id: 'product6'},
    ]

let todosVI= [
        {text: '&nbsp' , id: 'blank1'},
        {text: '- product7' , href: '#/stores/', id: 'product7'},
        {text: '- product8' , href: '#/stores/', id: 'product8'},
        {text: '- product9' , href: '#/stores/', id: 'product9'},
    ]

let todosVII= [
        {text: 'PRIVACY POLICY' , href: '#/stores/', id: 'bottomP5_a'},
        {text: 'FACEBOOK' , href: '#/stores/', id: 'bottomP5_b'},
        {text: 'CONTACT' , href: '#/contact/', id: 'bottomP5_c'},
    ]

let todosVIII= [
        {text: '@2017 SHIZU HAMONO CO.，LTD. ALL Rights Reserved. Design by EARLYBIRDS' , href: '#/stores/', id: 'bottomP1_5_1'},
    ]

function renderTodoList_III() {
          todosI.map(function(el){
                $('body').append(new $(`<div id = ${el.id}></div>`))
          })
          todosII.map(function(el){
                $('#bottombar').append(new $(`<div id = ${el.id}></div>`))
          })
          todosIII.map(function(el){
                $('#bottomP1').append(new $(`<ul><a id = ${el.id} href = '${el.href}'>${el.text}</a></ul>`))
          })
          todosIV.map(function(el){
                $('#bottomP2').append(new $(`<ul ><a id = ${el.id} href = '${el.href}'>${el.text}</a></ul>`))
          })
          todosV.map(function(el){
                $('#bottomP3').append(new $(`<ul><a id = ${el.id} href = '${el.href}'>${el.text}</a></ul>`))
          })
          todosVI.map(function(el){
                $('#bottomP4').append(new $(`<ul><a id = ${el.id} href = '${el.href}'>${el.text}</a></ul>`))
          })
          todosVII.map(function(el,index){
                $('#bottomP5').append(new $(`<ul><a id = ${el.id} href = '${el.href}'>${el.text}</a></ul>`))
          })
          todosVIII.map(function(el,index){
                $('#bottomP6').append(new $(`<ul id = ${el.id}>${el.text}</ul>`))
          })
          // todosVI.map(function(el,index){
          //       $('#bottomP1_4').append(new $(`<ul id = ${el.id}><a href = '${el.href}'>${el.text}</a></ul>`))
          // })
          // todosVII.map(function(el,index){
          //       $('#bottomP1_5').append(new $(`<ul id = ${el.id}><a href = '${el.href}'>${el.text}</a></ul>`))
          // })
          // todosVIII.map(function(el,index){
          //       $('#bottomP1_6').append(new $(`<ul id = ${el.id}><a href = '${el.href}'>${el.text}</a></ul>`))
          // })
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
}, 640, function() {
    // Animation complete.
  });

//左右橫移//#srchPic{position:absolute;}
  $( "#srchPic" ).animate({
  "left": "-=87px"
}, 500, function() {
    // Animation complete.
  });

}
