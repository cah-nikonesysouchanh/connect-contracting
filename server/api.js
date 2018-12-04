let express = require('express');
let bodyParser = require('body-parser');
let moment = require('moment');
let fs = require('fs');

let app = express();

app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());
app.use(bodyParser.text());
app.use(express.static('build'));
app.set('port', 8102);

app.get("/codelookup/codes.json", function(req,res){
  res.send(fs.readFileSync('public/codes.json').toString())
})

app.listen(app.get('port'), () => {
    console.log("code lookup server running on port " + app.get('port'));
});
