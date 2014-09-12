angular.module('flickrApp', ['ng', 'ngResource'])
/*
    .config(function($httpProvider) {
        //Enable cross domain calls
        $httpProvider.defaults.useXDomain = true;
        delete $httpProvider.defaults.headers.common['X-Requested-With'];
        })
*/
    .constant('flickerAPI', "http://api.flickr.com/services/feeds/photos_public.gne")
    //.constant('flickerAPI', "http://api.flickr.com/services/feeds/photos_public.gne?jsoncallback=?")
    //'http://api.flickr.com/services/feeds/photos_public.gne'
    .factory('flickrPhotos', function ($resource, flickerAPI) {
        return $resource(flickerAPI, 
            {
                format: 'json', 
                jsoncallback: 'JSON_CALLBACK' 
            }, 
            { 
                'load': { 'method': 'JSONP' }             
            });
    })
    .controller('flickrController', ['$scope', '$http', 'flickrPhotos',  function($scope, $http, flickrPhotos) {
        //delete $http.defaults.headers.common['X-Requested-With'];
        //$scope.items = [];
        var data = flickrPhotos.load({tags: 'raptors'});
        console.log(data);
        $scope.flickrData = data;
        $scope.loadData = function(tag) {
            $scope.flickrData = flickrPhotos.load({tags: tag});
        }
        $scope.tags = ['raptors', 'sharks', 'pandas', 'monkeys', 'dogs', 'cats', 'cows', 'trains', 'trucks', 'rollercoasters']; //, 'edward', 'james']
         
        //$scope.loadFlickrData = function() {
            //delete $http.defaults.headers.common['X-Requested-With'];
        /*
            $http.jsonp(
                    flickerAPI, 
                    {
                        method: 'GET', 
                        params: {tags: "raptors", tagmode: "any", format: "json"}
                    }
                 )
                .success(function(data, status, headers, config){
                    console.log(data.item)
                    $scope.items = data.items; //JSON.parse(data)['wwp'];
                })
                .error(function(data, status, headers, config){
                    console.log(status);
                });
                */
        //};
    }]
);

//delete $http.defaults.headers.common['X-Requested-With'];
