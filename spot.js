require('dotenv').config();
var spotify = require('node-spotify-api');
var keys = require('./keys.js');
var spotify = new spotify(keys.spotify);
var fs = require('fs');
var axios = require("axios");
var nodeArgs = process.argv;




spotify
  .request('https://api.spotify.com/v1/tracks/7yCPwWs66K8Ba5lFuU2bcx')
  .then(function(data) {
    


     console.log('Song Details: ', data.tracks);
     console.log('Artist: ' + data.artists[0].name);
    
      console.log('Song name: ' + data.song);
      console.log('Song url preview: ' + data.preview_url);
      console.log('Album: ' + data.album.name); 
  })
  .catch(function(err) {
    console.error('Error occurred: ' + err); 
  });