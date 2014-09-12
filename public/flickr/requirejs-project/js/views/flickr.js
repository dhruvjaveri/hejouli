define([
  'jquery',
  'underscore',
  'backbone',
  'masonry',
   'collections/flickrImages',
  'text!templates/flickr.html'
  ], function($, _, Backbone, Masonry, flickrImages, flickrTpl){
  var FlickrView = Backbone.View.extend({

    el: '#flickr',

    template: _.template(flickrTpl),

    events: {
      //"keypress #new-todo":  "createOnEnter",
      //"keyup #new-todo":     "showTooltip",
      //"click .todo-clear a": "clearCompleted"
    },

    // At initialization we listen to the relevant events on the `Todos`
    initialize: function() {
      //this.listenTo(flickrImages, 'reset', this.render);
      //this.listenTo(flickrImages, 'all', this.render);
      /*
      flickrImages.fetch(
        {data: {
                dataType: 'jsonp',
                tags: "raptors",
                tagmode: "any",
                format: "json"
            },
        success: function (){console.log(flickrImages.at(0).toJSON());},
        error: function (){console.log('error')}
        });
      */
    },

    // Re-rendering the App just means refreshing the statistics -- the rest
    // of the app doesn't change.
    render: function() {
      $(this.el).html(this.template({data: flickrImages.toJSON()}));
      var vw = this;
      setTimeout(vw.onRender.bind(vw), 300);
    },
    onRender: function(){
      console.log('onRender called')
      var picView = new Masonry('#flickr', {
          columnWidth: 250,
          itemSelector: '.flickr-image'
        });
      console.log(picView);
    }

  });
  return FlickrView;
});
