require("dotenv").config();

var keys = require("./keys.js");

//var spotify = new spotify(keys.spotify);

var axios = require("axios");

//store all of the arguements in a command line array
var nodeArgs = process.argv;

//This empty string creates an empty variable for holding the movie name
var artists = "";

//This one creates an empty array for concerts
var concerts = "";

var a = "concert-this";

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
	  console.log("---------------------------------------------------");
      console.log(" ");
      console.log("The song you entered was " + value + ".");
      console.log(" ");
      console.log("Here is the infromation you requested!");
      console.log(" ");
      console.log("Track Title: " + data.tracks.items[0].name);
      console.log(" ");
      console.log("Artist Name: " + data.tracks.items[0].artists[0].name);
      console.log(" ");
      console.log("Preview URL: " + data.tracks.items[0].preview_url);
      console.log(" ");
      console.log("---------------------------------------------------");
 
 
 
 
 
 

});
}