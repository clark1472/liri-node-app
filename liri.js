require("dotenv").config();
var keys = require("./keys.js");
var axios = require("axios");
var Spotify = require("node-spotify-api");
var spotify = new Spotify(keys.spotify);
var moment = require("moment");
var fs = require("fs");

var userCommand = process.argv[2];
var userQuery = process.argv[3];

console.log(userCommand);

if (process.argv.length < 3){
    console.log(userQuery);
}

//determine which query is choisen (Example: concert-this, spotify-this-song, movie-this and do-what-it-says)
if (userCommand === "concert-this") {
    console.log("we want to see a concert")
    getConcertInfo(userQuery)

} else if (userCommand === "spotify-this-song") {
    console.log("we want to get this song")
    getSpotifySong(userQuery)

} else if (userCommand === "movie-this") {
    console.log("we want to get this movie")
    getMovieInfo(userQuery)

} else if (userCommand === "do-what-it-says") {
    console.log("do what it says")
    doWhatItSays()

} else {
    console.log("none of the previous conditions were met")
}

// node liri.js for concert-this

function getConcertInfo(artist) {

    console.log("-----------------------------")
    axios.get("https://rest.bandsintown.com/artists/" + artist + "/events?app_id=codingbootcamp").then(
        function (response) {
            if (response.data.length <= 0) {
                console.log("No info for this Artist")
            } else {
                for (var i = 0; i < response.data.length; i++) {

                    var currentData = `\n
            Venue: ${response.data[i].venue.name}
            Location: ${response.data[i].venue.city + ", " + response.data[0].venue.region}
            Event Date: ${moment(response.data[i].datetime).format('LL')}
            `
                    console.log(currentData)
                }
            }
        });
}

// node liri.js for spotify-this-song 


function getSpotifySong(song) {
    if (userQuery === "") {
        userQuery = "ace+of+base+the+sign"
    }
    console.log("-----------------------------")
    spotify.search({
        type: 'artist,track',
        query: userQuery
    },
        function (err, data) {
            if (err) {
                return console.log('Error occurred: ' + err);
            }
            console.log('\n')

            var currentData = `\n
    Artist: ${data.tracks.items[0].name}
    Preview:{data.tracks.items[0].artists[0].name}
    Track: $ ${data.tracks.items[0].preview_url}
    Album: ${data.tracks.items[0].album.name}
            `
            console.log(currentData)
        });

};

// node liri.js for movie-this

function getMovieInfo(movie) {
    console.log("-----------------------------")
    axios.get("http://www.omdbapi.com/?t=" + movie + "&y=&plot=short&apikey=a3f93189").then(

        function (response) {

            var currentData = `\n
    Title: ${response.data.Title}
    Released: ${response.data.Year}
    IMDB Rating: ${response.data.imdbRating}
    Rotten Tomatos Rating: ${response.data.Ratings[1].Value}
    Country: ${response.data.Country}
    Language: ${response.data.Language}
    Plot: ${response.data.Plot}
    Actors: ${response.data.Actors}
            `
            console.log(currentData)

        })
};

// node liri.js for do-what-it-says

function doWhatItSays() {
    console.log("-----------------------------")
    fs.readFile("random.txt", "utf8", function(error, data) {

        if (error) {
            return console.log(error);
        }
   
        var dataArray = data.split(",");
      
        userQuery = dataArray[1];
        console.log(userQuery)
        getSpotifySong(userQuery)
      });
}
