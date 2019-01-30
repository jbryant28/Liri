require('dotenv').config();
var spotify = require('node-spotify-api');
var keys = require('./keys.js');
var spotify = new spotify(keys.spotify);
var fs = require('fs');
var axios = require("axios");
var nodeArgs = process.argv;


//store all of the arguements in a command line array
var nodeArgs = process.argv;

//This empty string creates an empty variable for holding the movie name
var movieName = "";
// var songName = "";
//This one creates an empty array for concerts
var concerts = "";

//This empty string creates an empty variable for holding the movie name
var artists = "";



var a = "movie-this";
var b = "spotify-this-song";
var c = "movie-this"
var d = "do-what-it-say"
//places all of the items past index 2 in an array.
if (process.argv[2] == a) {

  for (var i = 3; i < nodeArgs.length; i++) {
    if (i > 3 && i < nodeArgs.length) {
      movieName = movieName + "+" + nodeArgs[i];
    }
    else {
      movieName += nodeArgs[i];
    }
  }

  //Then run a request with axios to the omdb api with the movie specified

  var queryUrl = "http://www.omdbapi.com/?t=" + movieName + "&y=&plot=short&apikey=797c21a7";

  //This line debugs against the actual url

  console.log(queryUrl);


  axios.get(queryUrl).then(function (response) {
    var queryUrl = "http://www.omdbapi.com/?t=" + movieName + "&y=&plot=short&apikey=trilogy";

    //This line is just to help us debug against the actual URL.
    console.log(queryUrl);

    axios.get(queryUrl).then(
      function (response) {
        console.log("Movie Title: " + response.data.Title);
        console.log("Release Year: " + response.data.Year);
        console.log("IMDB Rating: " + response.data.imdbRating);
        console.log("Country: " + response.data.Country);
        console.log("Language: " + response.data.Language);
        console.log("Plot: " + response.data.Plot);
        console.log("Starring: " + response.data.Actors);
      });
  });
}
if (process.argv[2] == b) {

  // for (var i = 3; i < nodeArgs.length; i++) {
  //   if (i > 3 && i < nodeArgs.length) {
  //     movieName = movieName + "+" + nodeArgs[i];
  //   }
  //   else {
  //     movieName += nodeArgs[i];
  //   }
  // }

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

}


if (process.argv[2] == c) {

  for (var i = 3; i < nodeArgs.length; i++) {
    if (i > 3 && i < nodeArgs.length) {
      concerts = concerts + "+" + nodeArgs[i];
    }
    else {
      concerts += nodeArgs[i];
    }
  }


  
  //Then run a request with axios to the omdb api with the movie specified
  
  var queryUrl = "https://rest.bandsintown.com/" + artists + "?app_id=128a8274da581d652284b45be1c94856";
  
  //This line debugs against the actual url
  
  console.log(queryUrl);
  
  axios.get(queryUrl).then(function(response) {

    
        console.log("The song you entered was " + value + ".");
        console.log(" ");
        console.log("Here is the infromation you requested!");
        console.log(" ");
        console.log("Track Title: " + data.tracks.items[0].name);
        console.log(" ");
        console.log("Artist Name: " + data.tracks.items[0].artists[0].name);
        console.log(" ");
        console.log("Preview URL: " + data.tracks.items[0].preview_url);
    
   
   
   
   
   
   
  
  });
  }



if (process.argv[2] == d) {

  fs.readFile("random.txt", "utf8", function(error, data) {

   
    if (error) {
      return console.log(error);
    }
    console.log(data);
 
    var dataArr = data.split(",");
  
 
    console.log(dataArr);
  
  });
}
