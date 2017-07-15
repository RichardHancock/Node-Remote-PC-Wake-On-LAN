var express = require('express');
var bodyParser = require('body-parser');
var wakeOnLAN = require('node-wol');
var app = express();
var http = require('http').Server(app);

app.use(bodyParser.json());

app.post('/pwr', function(req, res)
{
	console.log("Ping");
	console.log(req.body);

	if (req.body.passphrase === "m&Q8!!CsquGpA&E!%zFW6ZfW&mBkDVUU")
	{
		wakeOnLAN.wake('40:16:7E:A9:5B:28', function(error) {
		  if(error) {
		    console.log(error);
		    return;
		  }
		});
	}

	res.sendStatus(200);
});

//app.use(express.static('dist'));

http.listen(3000, function(){
	console.log('listening on *:3000');
});
