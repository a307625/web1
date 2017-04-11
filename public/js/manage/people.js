$(document).ready(function(){
  MODULE.authMethod(function(err,data){
    if(!err) {
      // const {done} = data
      // if(done) {
      //   let todos1= [
      //           {text: 'Web Manage', id: 'div1'},
      //           {text: '', id: 'div2'}
      //       ]
      //
      //   let todos2= [
      //           {text: '&nbsp&nbsp登出&nbsp&nbsp', id: 'signout'},
      //           {text: '&nbsp&nbsp人員管理&nbsp&nbsp', id: 'people'},
      //           {text: '&nbsp&nbsp網站管理&nbsp&nbsp', id: 'manage'}
      //       ]
      //   function renderTodoList() {
      //             todos1.map(function(el){
      //                   $('body').append(new $(`<div id = ${el.id}><h1>${el.text}</h1></div>`))
      //             })
      //             todos2.map(function(el){
      //                   $('#div2').append(new $(`<input type = 'submit' id = ${el.id} value = ${el.text} onClick = "${el.id}()" ><p></p>`))
      //             })
      //           }
      // }else {
      //   let todos1= [
      //           {text: 'Web Manage', id: 'div1'},
      //           {text: '', id: 'div2'}
      //       ]
      //
      //   let todos2= [
      //           {text: '&nbsp&nbsp登入&nbsp&nbsp', id: 'signin'},
      //           {text: '&nbsp&nbsp註冊&nbsp&nbsp', id: 'signup'}
      //       ]
      //   function renderTodoList() {
      //             todos1.map(function(el){
      //                   $('body').append(new $(`<div id = ${el.id}><h1>${el.text}</h1></div>`))
      //             })
      //             todos2.map(function(el){
      //                   $('#div2').append(new $(`<input type = 'submit' id = ${el.id} value = ${el.text} onClick = "${el.id}()" ><p></p>`))
      //             })
      //           }
      // }
      //
      // renderTodoList()
    }else {
      console.log(data)
      alert("網站出現問題")
    }
  })
})
