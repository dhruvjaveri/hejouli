###How does it work

1. index.html get loaded into the browser
2. referenced js and css files get loaded
3. jQuery registers a function with the browser event: when everything is loaded, execute this function
4. the function start a request to flickr, register another function to run when done
5. when flickr returns the search results, the function gets the data, inside the data, there is an array or list of images.
6. the function uses a lodash template to create text: basically it replaces the markers with title and media.m 
6. it uses jQuery to insert the html text into the div tag with the ID flickr-img-list
