var fs = require("fs");
var dataRead = fs.readFileSync("./release.json");

var jsonPretty = JSON.stringify(JSON.parse(dataRead),null,2);  

//console.dir(dataRead, { depth:null, colors: false });
console.log(jsonPretty);

