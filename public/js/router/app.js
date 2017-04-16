(function($) {
  var app = $.sammy('#content', function() {
    this.use('Template')

    this.around(function(callback) {
      var context = this
      this.load('../../html/page/data/articles.json')
          .then(function(items) {
            context.items = items
          })
          .then(callback)
    })

    //initial//home
    this.get('/test', function(context) {
      context.app.swap('')
      $.each(this.items, function(i, item) {
        context.render('html/page/templates/article.template', {id: i, item: item})
               .appendTo(context.$element())
      })
    })

    //home
    this.get('#/home/', function(context) {
      context.app.swap('')
      $.each(this.items, function(i, item) {
        context.render('html/page/templates/article.template', {id: i, item: item})
               .appendTo(context.$element())
      })
    })

    //news
    this.get('#/news/', function(context) {
        // var str=location.href.toLowerCase()
        console.log('NNNNNN');
        context.app.swap('')
        $.each(this.items, function(i, item) {
          context.render('html/page/templates/article.template', {id: i, item: item})
                 .appendTo(context.$element())
        })
    })


    //concept
    this.get('#/concept/', function(context) {
        // var str=location.href.toLowerCase()
        context.app.swap('')
        context.render('html/page/templates/about.template', {})
               .appendTo(context.$element())
    })

    //product
    this.get('#/product/', function(context) {
        // var str=location.href.toLowerCase()
        context.app.swap('')
        context.render('html/page/templates/about.template', {})
               .appendTo(context.$element())
    })

    //service
    this.get('#/service/', function(context) {
        // var str=location.href.toLowerCase()
        context.app.swap('')
        context.render('html/page/templates/about.template', {})
               .appendTo(context.$element())
    })

    //stores
    this.get('#/stores/', function(context) {
        // var str=location.href.toLowerCase()
        context.app.swap('')
        context.render('html/page/templates/about.template', {})
               .appendTo(context.$element())
    })

    //contact
    this.get('#/contact/', function(context) {
        // var str=location.href.toLowerCase()
        context.app.swap('')
        context.render('html/page/templates/about.template', {})
               .appendTo(context.$element())
    })

    // this.get('#/article/:id', function(context) {
    //   this.item = this.items[this.params['id']]
    //   if (!this.item) { return this.notFound() }
    //   this.partial('templates/article-detail.template')
    // });


  //   this.before('.*', function() {
   //
  //       var hash = document.location.hash
  //       console.log('hash')
  //       console.log(hash)
  //       // $("nav").find("a").removeClass("current")
  //       // $("nav").find("a[href='"+hash+"']").addClass("current")
  //  })

  })

  $(function() {
    app.run('#/home/')
  })

})(jQuery)
