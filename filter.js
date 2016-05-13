var fs = require("fs");
var dataRead = fs.readFileSync("./output.json");
var x = JSON.parse(dataRead);

var authors_bugs = {}
var authors_improvements = {}


for (var i=0; i<x.issues.length; i++) {
  var item = x.issues[i]
  var issueName = item.key
  var issueCreator = item.fields.creator.name
  var issueReporter = item.fields.reporter.displayName
  var issueType = item.fields.issuetype.name

  if (issueType == 'Bug') {
	  if ( !(issueReporter in authors_bugs) ) {
		  authors_bugs [ issueReporter ] = []
	  }
	  authors_bugs [ issueReporter ].push(issueName);
  } else if (issueType == 'Improvement') {
	  if ( !(issueReporter in authors_bugs) ) {
		  authors_improvements [ issueReporter ] = []
	  }
	  authors_improvements [ issueReporter ].push(issueName);
  }

}

console.log ("Bugs")
for (var key in authors_bugs) {
  console.log ("Author: " + key)
  var reportedIssues = authors_bugs[key]
  for (var i=0; i<reportedIssues.length; i++) {
    console.log ("   " + reportedIssues[i])
  }
}

console.log ("Improvements")
for (var key in authors_improvements) {
  console.log ("Author: " + key)
  var reportedIssues = authors_improvements[key]
  for (var i=0; i<reportedIssues.length; i++) {
    console.log ("   " + reportedIssues[i])
  }
}
