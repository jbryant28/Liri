require('dotenv').config();
var spotify = require('node-spotify-api');
var keys = require('./keys.js');
var spotify = new spotify(keys.spotify);
var fs = require('fs');
var axios = require("axios");
var nodeArgs = process.argv;
var songName = "";

var a = "spotify-this-song";

if (process.argv[2] == a) {
	for (var i = 3; i < nodeArgs.length; i++) {
		if( i > 3 && i < nodeArgs.length) {
      songName = songName + "+" + nodeArgs[i];
      
      console.log("abc");
		}
		else {
			songName += nodeArgs[i];
		}
	}

  console.log("123");

function spotifyThis(value) {
  if (value == null) {
    value = 'computer love';
  }
  console.log("dog");
  request('https://api.spotify.com/v1/search?q=' + value + '&type=track', function (error, response, body) {
    if (!error && response.statusCode == 200) {
      jsonBody = JSON.parse(body);
    }
    console.log(' ');
    console.log('Artist: ' + jsonBody.tracks.items[0].artists[0].name);
    
    console.log('Song name: ' + jsonBody.tracks.items[0].song.name);
    console.log('Song: ' + jsonBody.tracks.items[0].preview_url);
    console.log('Album: ' + jsonBody.tracks.items[0].album.name);
    console.log(' ');

    console.log("cat");
  });
}
spotifyThis();

}