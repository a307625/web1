MODULE.authMethod(function(err,data){
  if(!err) {
    const {done} = data
    if(done) {
      window.location.replace("./index.html")
    }else {
      let todos1= [
              {text: 'Web Sign In', id: 'div1'},
              {text: '', id: 'div2'}
          ]

      let todos2= [
              {id: 'form1'}
          ]

      let todos3= [
              {text: '&nbsp&nbsp信箱&nbsp&nbsp', id: 'email'},
              {text: '&nbsp&nbsp密碼&nbsp&nbsp', id: 'password'}
          ]

      let todos4= [
              {text: '&nbsp&nbsp登入&nbsp&nbsp', id: 'signin'}
          ]

      let todos5= [
              {text: '&nbsp&nbsp回主頁&nbsp&nbsp', id: 'home'}
          ]

      function renderTodoList() {
                todos1.map(function(el){
                      $('body').append(new $(`<div id = ${el.id}><h1>${el.text}</h1></div>`))
                })
                todos2.map(function(el){
                      $('#div2').append(new $(`<form id = ${el.id}></form>`))
                })
                todos3.map(function(el, index){
                      $('#form1').append(new $(`<input type = ${el.id} id = ${el.id} placeholder = ${el.text} required ><p></p>`))
                })
                todos4.map(function(el){
                      $('#form1').append(new $(`<input type = 'submit' id = ${el.id} value = ${el.text} ><p></p>`))
                })
                todos5.map(function(el){
                      $('#div2').append(new $(`<input type = 'submit' id = ${el.id} value = ${el.text} onClick = "${el.id}()" ><p></p>`))
                })
              }

      renderTodoList()



      $("#form1").submit(function(event){
        event.preventDefault()

        const email = $("#email").val()
        const password = $("#password").val()
        $.post("http://localhost:3000/EBSweb/v1/manager/signin",{
          email,
          password
        })
        .done(function(response,status){
          const {auth, message} = response
          if(auth){
            console.log(auth)
            localStorage.setItem("auth",auth)
            window.location.replace("./index.html")
          }else {
            alert(message)
          }
        })
        .fail(function(response,status) {
          console.log(response)
          alert("網站出現問題")
        })
      })
    }
  }else {
    console.log(data)
    alert("網站出現問題")
  }
})



function home() {
  window.location.assign('../../html/manage/index.html')
}
