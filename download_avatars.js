
var request = require('request');
var https = require('https');
var fs = require('fs');

var GITHUB_USER = "Sanju3001";
var GITHUB_TOKEN = "5edcf977efef4fdd48c11bbf9e6451fed8d4965f";

console.log('Welcome to the GitHub Avatar Downloader!');


function getRepoContributors(repoOwner, repoName, cb) {

  var requestURL = 'https://' + GITHUB_USER + GITHUB_TOKEN + '@api.github.com/repos/' + repoOwner + '/' + repoName + '/contributors';

  console.log(requestURL);

/*
request.get(url)
       .on('error', function (err) {
         throw err;
       })
       .on('response', function (response) {
         console.log('Response Status Code: ', response.statusCode, ' Response Message: ', response.statusMessage, ' Content type: ', response.headers['content-type']);
       })
       .pipe(fs.createWriteStream('./downloaded.html'));
*/

}

getRepoContributors("gibson042", "jquery", function(err, result) {
  console.log("Errors:", err);
  console.log("Result:", result);
});