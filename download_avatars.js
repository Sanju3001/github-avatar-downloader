
var request = require('request');
var https = require('https');
var fs = require('fs');

var GITHUB_USER = "Sanju3001";
var GITHUB_TOKEN = "5edcf977efef4fdd48c11bbf9e6451fed8d4965f";

console.log('Welcome to the GitHub Avatar Downloader!');


function getRepoContributors(someOwner, someName, cb) {

  var repoOwner = someOwner;
  var repoName = someName;


if ((repoOwner === undefined) || (repoName === undefined)){
  console.log("Please enter both a repository Owner and a repository Name");
  }

  var options = {
  url: 'https://' + GITHUB_USER + ':' + GITHUB_TOKEN + '@api.github.com/repos/' + repoOwner + '/' + repoName + '/contributors',
  headers: {'User-Agent': 'request'}

  };

  //console.log(options.url);

  //var newURL = options.requestURL + options.headers.UserAgent;



request(options, function (error, response, body) {
  if (!error && response.statusCode == 200) {
    var info = JSON.parse(body);
    cb(info);
  }
})



       /*.on('error', function (err) {
         throw err;
       })
       .on('response', function (response) {
         output(response);
       });
       //.pipe(fs.createWriteStream('./downloaded.html'));
        */


}



function downloadImageByURL (url, filePath) {

 /* fs.readFile(url,function(err, data) {
     fs.writeFile(filePath, url);
});
*/

  request.get(url).pipe(fs.createWriteStream(filePath));

}

/*
downloadImageByURL("https://avatars2.githubusercontent.com/u/2741?v=3&s=466", "./downloads/1.jpg");
*/

getRepoContributors(process.argv[2], process.argv[3], function(body) {

  body.forEach(function(user){
    login = "./downloads/" + user.login + ".jpg";
    downloadImageByURL(user.avatar_url, login);
  })
});


