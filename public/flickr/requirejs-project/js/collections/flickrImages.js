define([
  'underscore', 
  'backbone', 
  'models/flickrImage'
  ], function(_, Backbone, FlickrImage){

	var FlickerCollection = Backbone.Collection.extend({

    // Reference to this collection's model.
    model: FlickrImage,
    url:  "https://api.flickr.com/services/feeds/photos_public.gne?jsoncallback=?",
    parse: function(response) {
        return response.items;
      }
  });
  return new FlickerCollection();
});
