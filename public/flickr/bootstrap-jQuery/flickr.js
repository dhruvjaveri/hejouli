var flickerAPI = "http://api.flickr.com/services/feeds/photos_public.gne?jsoncallback=?";
/**
*       author
*       date_taken
*       description
*       link
*       media.m
*       published
*        tags
*        title
*/

var startup = function(){
    var template = _.template($('script#flickr-item').html());
    $.getJSON( flickerAPI, {
        tags: "raptors",
        tagmode: "any",
        format: "json"
    })
    .done(function(data){
            $('#flickr-img-list').html(template({items: data.items}))
        });
}

$(startup);