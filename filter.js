var fs = require("fs");
var dataRead = fs.readFileSync("./release.json");
var x = JSON.parse(dataRead);

var authors_bugs = {}
var authors_improvements = {}
var authors_new_features = {}
var authors_wish = {}


for (var i=0; i<x.issues.length; i++) {
  var item = x.issues[i]
  var issueName = item.key
  var issueSummary = item.fields.summary
  var issueCreator = item.fields.creator.name
  var issueReporter = item.fields.reporter.displayName
  var issueType = item.fields.issuetype.name

  console.log(issueName + ' ' + issueSummary)
  if (issueType == 'Bug') {
	  if ( !(issueReporter in authors_bugs) ) {
		  authors_bugs [ issueReporter ] = []
	  }
	  authors_bugs [ issueReporter ].push(issueName);
  } else if (issueType == 'Improvement') {
	  if ( !(issueReporter in authors_improvements) ) {
		  authors_improvements [ issueReporter ] = []
	  }
	  authors_improvements [ issueReporter ].push(issueName);
  } else if (issueType == 'New Features') {
	  if ( !(issueReporter in authors_new_features) ) {
		  authors_new_features [ issueReporter ] = []
	  }
	  authors_new_features [ issueReporter ].push(issueName);
  } else if (issueType == 'Wish') {
	  if ( !(issueReporter in authors_wish) ) {
		  authors_wish [ issueReporter ] = []
	  }
	  authors_wish [ issueReporter ].push(issueName);
  }

}

console.log ("")
console.log ("")
console.log ("----------------------------------------------------")
console.log ("")
console.log ("New Features: ")
for (var key in authors_new_features) {
  var reportedIssues = authors_new_features[key]
  var outputResult = ""
  for (var i=0; i<reportedIssues.length; i++) {
    if (i > 0) {
      outputResult += ", "
    }
    outputResult += reportedIssues[i]
  }
  outputResult += "reporter: " + key
  console.log(outputResult)
}
console.log ("Bugs: ")
for (var key in authors_bugs) {
  var reportedIssues = authors_bugs[key]
  var outputResult = ""
  for (var i=0; i<reportedIssues.length; i++) {
    if (i > 0) {
      outputResult += ", "
    }
    outputResult += reportedIssues[i]
  }
  outputResult += " reporter: " + key
  console.log(outputResult)
}

console.log ("Improvements")
for (var key in authors_improvements) {
  var reportedIssues = authors_improvements[key]
  var outputResult = ""
  for (var i=0; i<reportedIssues.length; i++) {
    if (i > 0) {
      outputResult += ", "
    }
    outputResult += reportedIssues[i]
  }
  outputResult += " reporter: " + key
  console.log(outputResult)
}
console.log ("Wish")
for (var key in authors_wish) {
  var reportedIssues = authors_wish[key]
  var outputResult = ""
  for (var i=0; i<reportedIssues.length; i++) {
    if (i > 0) {
      outputResult += ", "
    }
    outputResult += reportedIssues[i]
  }
  outputResult += " reporter: " + key
  console.log(outputResult)
}
