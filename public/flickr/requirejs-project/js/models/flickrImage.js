define(['underscore', 'backbone', 'moment'], function(_, Backbone, moment) {
  var FlickrImage = Backbone.Model.extend({

    // Ensure that each todo created has `content`.
    initialize: function() {
        var media = this.get('media'), published = this.get('published');
        if (media){this.set('imageUrl', media.m);}
        if (published){this.set('published', new Date(moment(published).valueOf()));}
        //console.log('new FlickrImage');
    }
    });
  return FlickrImage;
});
