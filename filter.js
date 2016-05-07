var fs = require("fs");
var dataRead = fs.readFileSync("./output.json");
var x = JSON.parse(dataRead);

var authors = {}

for (var i=0; i<x.issues.length; i++) {
  var item = x.issues[i]
  var issueName = item.key;
  var issueCreator = item.fields.creator.name
  var issueReporter = item.fields.reporter.displayName
  var issueType = item.fields.issuetype.name

  if ( !(issueReporter in authors) ) {
    authors [ issueReporter ] = []
  }
  authors [ issueReporter ].push(issueName);

}

for (var key in authors) {
  console.log ("Author: " + key);
  var reportedIssues = authors[key];
  for (var i=0; i<reportedIssues.length; i++) {
    console.log ("   " + reportedIssues[i]);
  }
}
