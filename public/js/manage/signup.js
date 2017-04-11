MODULE.authMethod(function(err,data){
  if(!err) {
    const {done} = data
    if(done) {
      window.location.replace("./index.html")
    }else {
      let todos1= [
              {text: 'Web Sign Up', id: 'div1'},
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
              {text: '&nbsp&nbsp註冊&nbsp&nbsp', id: 'signup'}
          ]

      let todos5= [
              {text: '&nbsp&nbsp回主頁&nbsp&nbsp', id: 'home'}
          ]
      let mode = 0//0: signup, 1: authentication
      let email
      let password

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
                      $('#form1').append(new $(`<input type = 'submit' id = ${el.id} value = ${el.text}  ><p></p>`))//onClick = 'send1(id)'
                })
                todos5.map(function(el){
                      $('#div2').append(new $(`<input type = 'submit' id = ${el.id} value = ${el.text} onClick = "${el.id}()" ><p></p>`))
                })
              }

      renderTodoList()

      $("#form1").submit(function(event){
        event.preventDefault()

        switch (mode) {
          case 0:
            email = $("#email").val()
            password = $("#password").val()
            $.post("http://localhost:3000/EBSweb/v1/manager/signup",{
              email,
              password
            })
            .done(function(response,status){
              const {registered, message} = response
              if(registered){
                alert(message)
              }else {

                $("#form1").empty()
                $("#home").remove()
                mode = 1
                todos1= [
                        {text: '', id: 'div2'}
                ]
                todos2= [
                        {id: 'form1'}
                ]
                todos3= [
                        {text: '&nbsp&nbsp請輸入驗證碼&nbsp&nbsp', id: 'text'},
                ]

                todos4= [
                        {text: '&nbsp&nbsp驗證&nbsp&nbsp', id: 'auth'}
                ]

                todos5 = [

                ]
                renderTodoList()
              }
            })
            .fail(function(response,status) {
              console.log(response)
              alert("網站出現問題")
            })
            break;
          case 1:
            const code = $("#text").val()
            $.post("http://localhost:3000/EBSweb/v1/manager/auth",{
              email,
              password,
              code
            })
            .done(function(response,status){
              console.log('QQ567')
              const {pass, message} = response
              if(pass){
                alert(message)
                console.log('QQ5678')
                document.location.replace('../../html/manage/index.html')
              }else {
                alert(message)
                console.log('QQ56799')
              }
            })
            .fail(function(response,status) {
              console.log(response)
              alert("網站出現問題")
            })
            break;
          default:
        }
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
