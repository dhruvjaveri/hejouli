// Filename: main.js

// Require.js allows us to configure mappings to paths
// as demonstrated below:
require.config({
  paths: {
    jquery: '//cdnjs.cloudflare.com/ajax/libs/jquery/2.1.1/jquery.min', // 'libs/jquery/jquery-min',
    underscore: '//cdnjs.cloudflare.com/ajax/libs/lodash.js/2.4.1/lodash.min', // 'libs/underscore/underscore-min',
    backbone: '//cdnjs.cloudflare.com/ajax/libs/backbone.js/1.1.2/backbone-min', // 'libs/backbone/backbone',

    // storage has built in support for requirejs
    // hence, it doesn't need to configured in 'shim'
    //storage: 'libs/backbone/backbone.localStorage',
    text: '//cdnjs.cloudflare.com/ajax/libs/require-text/2.0.12/text', // 'libs/require/text',
    moment: '//cdnjs.cloudflare.com/ajax/libs/moment.js/2.8.2/moment.min',
    masonry: '//cdnjs.cloudflare.com/ajax/libs/masonry/3.1.5/masonry.pkgd.min'
  },

  shim: {

    underscore: {
      exports: '_'
    },

    backbone: {
      deps: [ 'underscore', 'jquery' ],
      exports: 'Backbone'
    }
  }

});

require([ './flickrApp']);
