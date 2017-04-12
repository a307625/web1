$(document).ready(function(){
  MODULE.authMethod(function(err,data){
    if(!err) {
      const {done} = data
      if(done == 2) {
        const auth = localStorage.getItem("auth")
        $.get({
          url:'http://localhost:3000/EBSweb/v1/manager/list',
          data: {
            auth
          },
          dataType: 'json'
        })
        .done(function(response,status){
          const { email } = response
          let todos1 = [
                {text: 'User Delete', id: 'div1'},
                {text: '', id: 'div2'},
                {text: '', id: 'div3'}
              ]
          let todos2= [
                  {id: 'form1'}
              ]
          let todos3 = []
          let todos4= [
                {text: '&nbsp&nbsp刪除帳號&nbsp&nbsp', id: 'delEmail'}
              ]
          let todos5= [
                {text: '&nbsp&nbsp帳戶管理&nbsp&nbsp', id: 'account'}
              ]
          email.forEach((data, index)=>{
            const obj3 = { text: data, value: index, id: index }
            todos3.push(obj3)
          })

          function renderTodoList() {
                    todos1.map(function(el){
                          $('body').append(new $(`<div id = ${el.id}><h1>${el.text}</h1></div>`))
                    })
                    todos2.map(function(el){
                          $('#div2').append(new $(`<form id = ${el.id}></form><p></p>`))
                    })
                    todos3.map(function(el){
                          $('#form1').append(new $(`<input type = 'checkbox' id = ${el.id} value = ${el.value} ><b id = ${el.id}>${el.text}</b><p></p>`))//onClick = "${el.id}()"
                    })
                    todos4.map(function(el){
                          $('#form1').append(new $(`<input type = 'submit' id = ${el.id} value = ${el.text} >`))//onClick = "${el.id}()"
                    })
                    todos5.map(function(el){
                          $('#div3').append(new $(`<input type = 'submit' id = ${el.id} value = ${el.text}  onClick = "${el.id}()"><p></p>`))//onClick = "${el.id}()"
                    })
                  }
          renderTodoList()

          $("#form1").submit(function(event){
            event.preventDefault()

            const auth = localStorage.getItem("auth")
            email.forEach( (data, index)=>{
              const checked = $(`#${index}`).prop('checked')
              console.log('checked')
              console.log(checked)
              if (checked) {
                $.post("http://localhost:3000/EBSweb/v1/manager/delete",{
                  auth,
                  delEmail: data
                })
                .done(function(response,status){
                  const {done, message} = response
                  if(done){
                    $(`#${index}`).remove()
                    $(`#${index}`).remove()
                  }
                })
                .fail(function(response,status) {
                  console.log(response)
                  alert("網站出現問題")
                })
              }
            })
          })
        })
        .fail(function(response,status){
          console.log(response)
          alert("網站出現問題")
        })
      }else {
        window.location.replace("./index.html")
      }
    }else {
      console.log(data)
      alert("網站出現問題")
    }
  })
})


function account() {
  document.location.assign('../../html/manage/index.html')
}
