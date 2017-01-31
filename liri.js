var fs = require('fs');
var command = process.argv[2];

// call twitter 
var Twitter = require('twitter');

// starts function myTweets
if (command == "my-tweets" || command == "spotify-this-song" || command == "movie-this"){
  function myTweets (){

  // keys
    var client = new Twitter({
      consumer_key: 'DQ0BdoOQ1F4jV9P7eqdlWbC1W',
      consumer_secret: 'SoWywcOHoUVgfCqZw8KdIiOI8zEdIxlRP8d04YJJg93QnByNLz',
      access_token_key: '2698407265-QskeqjFyorYeYZFBIZp9g2QwUBezXbEKBjyZV04',
      access_token_secret: 'mjAzyZzglp2ex9UuSkBu01rguYzJwTtXMp6aMSwP7OBjk'
    });
    
  // example code from twitter npm   
    var params = {screen_name: 'Christer_Marie'};
    client.get('statuses/user_timeline', params, function(error, tweets, response) {
      if (!error) {
        // displays twitter tweets info 
        // console.log(tweets);
        // would count to distinguish tweets in terminal
        var count = 0;
        // loops over first twenty tweets
        for (var i = 0; i < 20; i++) {
          // adds to tweet count
          count ++;
          // console.log("this is # " + count + tweets[i].text);
          // displays tweets and time posted 
          console.log(tweets[i].created_at);
          // adds space
          console.log(" ");
          // displays text 
          console.log(tweets[i].text);
        };
      }

    });
  
  };

    // runs function
    myTweets(); 
    
    }else{
       console.log("need a command, please");
    };


// ====================================================================

// call spotify
var spotify = require('spotify');
var song = process.argv[3];

if (command == "spotify-this-song"){
  function spotifyThis(){
    spotify.search({type: 'track', query: song}, function(err, data) {
        
        if ( err ) {
            console.log('Error occurred: ' + err);
            return;
        }
           // Do something with 'data' 
          console.log(data.tracks.items[0].artists);
    });
  }  

   
    spotifyThis();

    }else{
      console.log(process.argv[3] == "The Sign");
    };

// ====================================================================    

// var request = require('request');

// var request = require('request');
// request('http://www.google.com', function (error, response, body) {
//   if (!error && response.statusCode == 200) {
//     console.log(body) // Show the HTML for the Google homepage. 
//   }
// })

