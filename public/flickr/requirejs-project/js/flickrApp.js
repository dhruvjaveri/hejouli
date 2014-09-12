require([ 'backbone', 'views/flickr', 'collections/flickrImages'], function(Backbone, AppView, flickrImages){
  var app_view = new AppView({
  });
  var loader = function(tags){
      flickrImages.fetch(
            {data: {
                    dataType: 'jsonp',
                    tags: tags,
                    tagmode: "any",
                    format: "json"
                },
            success: function (){
              console.log(flickrImages.at(0).toJSON());
              app_view.render();
            },
            error: function (){console.log('error')}
            });
      },
      Router = Backbone.Router.extend({
          routes: {
            "tags/:query":        "load",  // #search/kiwis
            "":                        "home"   // #search/kiwis/p7
          },
          home: function(){loader('raptors');},
          load: function(query){loader(query);},
      }),
      router = new Router();
    Backbone.history.start()
});