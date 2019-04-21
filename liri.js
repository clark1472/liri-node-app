require("dotenv").config();
var keys = require("./keys.js");
var axios= require("axios");
var Spotify = require("node-spotify-api");
var spotify = new Spotify(keys.spotify);

var userCommand = process.argv[2];
var userQuery = process.argv[3];

console.log(userCommand);
console.log(userQuery);

if (userCommand === "concert-this"){
    console.log("we want to see a concert")
    getConcertInfo(userQuery)

} else if (userCommand ==="spotify-this-song"){
    console.log("we want to get this song")
    getSpotifySong(userQuery)

} else if (userCommand === "movie-this"){
    console.log("we want to get this movie")
    getMovieInfo(userQuery)

} else {
    console.log("none of the prevous conditions were met")
}


function getConcertInfo(artist){
    console.log("-----------------------------")
    axios.get("https://rest.bandsintown.com/artists/" + artist + "/events?app_id=codingbootcamp").then(
        function(response) {
            // If the axios was successful...
            // Then log the body from the site!
            console.log(response.data);
          }
    )
    
};