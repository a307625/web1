$(document).ready(function(){
  MODULE.authMethod(function(err,data){
    if(!err) {
      const {done} = data
      if(done) {
        let todos1= [
                {text: 'Web Manage', id: 'div1'},
                {text: '', id: 'div2'}
            ]

        let todos2= [
                {text: '&nbsp&nbsp帳戶管理&nbsp&nbsp', id: 'account'}
            ]
        function renderTodoList() {
                  todos1.map(function(el){
                        $('body').append(new $(`<div id = ${el.id}><h1>${el.text}</h1></div>`))
                  })
                  todos2.map(function(el){
                        $('#div2').append(new $(`<input type = 'submit' id = ${el.id} value = ${el.text} onClick = "${el.id}()" ><p></p>`))
                  })
                }
        renderTodoList()
      }else {
        document.location.replace('../../html/manage/index.html')
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
