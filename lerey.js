require('dotenv').config();
var spotify = require('node-spotify-api');
var keys = require('./keys.js');
var spotify = new spotify(keys.spotify);
var fs = require('fs');
var axios = require("axios");
var nodeArgs = process.argv;


//store all of the arguements in a command line array
var nodeArgs = process.argv;

//this empty string creates an empty variable for holding the movie name

var movieName= "";

var songName = "";
//This one creates an empty variable for holding the movie name

var artists = "";


var a = "movie-this";
var b = "spotify-this-song";
var c = "movie-this"
var d = "do-what-it-say"
//places all of the items past index 2 in an array.
if (process.argv[2] == b) {
  for (var i = 3; i < nodeArgs.length; i++) {
    if (i >3 && i < nodeArgs.length) {
      songName = songName + "+" + nodeArgs[i];
    }
    else {
      songName += nodeArgs[i];
    }
  }
  //then run a request with axios to the omdb api with the mpvie specified

  //This line debugss againt the actural url

  

spotify
  .request('https://api.spotify.com/v1/tracks/7yCPwWs66K8Ba5lFuU2bcx')
  .then(function(response) {
     console.log('Artist: ' + jsonBody.tracks.items[0].artists[0].name);
    
      console.log('Song name: ' + jsonBody.tracks.items[0].song.name);
      console.log('Song: ' + jsonBody.tracks.items[0].preview_url);
      console.log('Album: ' + jsonBody.tracks.items[0].album.name);
      console.log("abc");
  })
  .catch(function(err) {
    console.error('Error occurred: ' + err); 
  });
}
