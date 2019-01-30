require('dotenv').config();
// var spotify = require('node-spotify-api');
// var keys = require('./keys.js');
// var spotify = new spotify(keys.spotify);
var fs = require('fs');
var axios = require("axios");
var nodeArgs = process.argv;


//store all of the arguements in a command line array
var nodeArgs = process.argv;

//This empty string creates an empty variable for holding the movie name
var movieName = "";
var songName = "";
//This one creates an empty array for concerts
var concerts = "";

//This empty string creates an empty variable for holding the movie name
var artists = "";



var a = "movie-this";
var b = "spotify-this-song";
var c = "movie-this"
var d = "do-what-it-say"
//places all of the items past index 2 in an array.


//Include the axios npm package (Don't forget to run "npm install axios" in this folder first!)
var axios = require("axios");

//Grab the movieName which will always be the third node argument.
var movieName = process.argv[2];

//Then run a request with axios to the OMDB API with the movie specified
var queryUrl = "http://www.omdbapi.com/?t=" + movieName + "&y=&plot=short&apikey=trilogy";

//This line is just to help us debug against the actual URL.
console.log(queryUrl);

axios.get(queryUrl).then(
function(response) {
  console.log("Movie Title: " + response.data.Title);
  console.log("Release Year: " + response.data.Year);
  console.log("IMDB Rating: " + response.data.imdbRating);
  console.log("Country: " + response.data.Country);
  console.log("Language: " + response.data.Language);
  console.log("Plot: " + response.data.Plot);
  console.log("Starring: " + response.data.Actors);
}
);