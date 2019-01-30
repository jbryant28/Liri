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

if (process.argv[2] == a) {
  for (var i = 3; i < nodeArgs.length; i++) {
    if( i > 3 && i < nodeArgs.length) {
      artists = artists + "+" + nodeArgs[i];
    }
    else {
      artists += nodeArgs[i];
    }
  }
  
  //Then run a request with axios to the omdb api with the movie specified
  
  var queryUrl = "https://rest.bandsintown.com/" + artists + "?app_id=128a8274da581d652284b45be1c94856";
  
  //This line debugs against the actual url
  
  console.log(queryUrl);
  
  axios.get(queryUrl).then(function(response) {
   console.log("Movie Title: " + response.data.region);
  // console.log("Release Year: " + response.data.Year);
  // console.log("IMDB Rating: " + response.data.imdbRating);
  // console.log("Country: " + response.data.Country);
  // console.log("Language: " + response.data.Language);
  // console.log("Plot: " + response.data.Plot);
  // console.log("Starring: " + response.data.Actors);
  
  });
  }