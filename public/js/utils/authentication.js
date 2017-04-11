const MODULE=(function(){
    const my={}
    my.authMethod = function(cb){
      const authPacket = {}
      const auth = localStorage.getItem("auth")
      $.post("http://localhost:3000/EBSweb/v1/manager/authentication",{
        auth
      })
      .done(function(data,status){
        cb(null, data)
        console.log('data')
        console.log(data)
      })
      .fail(function(data,status){
        cb(true, data)
      })
    }
    return my
}())
