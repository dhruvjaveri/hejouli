var newsweekDataUrl = "../newsweek_highschool_2013.json";

var newsweekData,
    startup = function(){
        var q = $.Deferred();
        $.getJSON( newsweekDataUrl)
            .done(function(data){
                newsweekData = data;
                q.resolve(data)
            });
        return q;
    },
    renderData = function(data){
        newsweekData = data;
    };

$(
    function(){
        startup().then(renderData, function(){console.log('error occurred')});
        console.log('ready');
    }
);