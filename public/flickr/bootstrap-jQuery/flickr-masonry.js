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

var flickrImgQuery = "raptors", flickrImgList  = '#flickr-img-list',
    startup = function(){
        var template = _.template($('script#flickr-item').html()),
            q = $.Deferred();
        $.getJSON( flickerAPI, {
            tags: flickrImgQuery,
            tagmode: "any",
            format: "json"
        })
        .done(function(data){
                $(flickrImgList).html(template({items: data.items}))
                setTimeout(q.resolve, 300);
            });
        return q;
    },
    doMansonryStuff = function(){
        $(flickrImgList).masonry({
          columnWidth: 250,
          itemSelector: '.flickr-img'
        });
    };

$(
    function(){
        //var q = startup();        q.done(doMansonryStuff);
        startup().done(doMansonryStuff);
        console.log('ready');
    }
);