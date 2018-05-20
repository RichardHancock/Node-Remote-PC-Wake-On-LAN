var express = require('express');
var bodyParser = require('body-parser');
var wakeOnLAN = require('node-wol');
var xboxOn = require('xbox-on');
var app = express();
var http = require('http').Server(app);

app.use(bodyParser.json());

app.post('/pwr', function(req, res)
{
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

app.post('/sam', function(req, res)
{
	console.log(req.body);

	if (req.body.passphrase === "!6Ynb6z*b6J#gN%an9dt2eNVKDt5@G$5")
	{
		wakeOnLAN.wake('40:16:3B:C7:72:48', function(error) {
		  if(error) {
		    console.log(error);
		    return;
		  }
		});
	}

	res.sendStatus(200);
});

app.post('/xbx', function(req, res)
{
	console.log(req.body);

	if (req.body.passphrase === "ZD3U55GX*qjB!TP^k5TNCAqk6*!C#KFq")
	{
		var ipAddress = "192.168.1.36";
		var liveDeviceId = "FD004B1F8AEFD5FA";

		var xbox = new xboxOn(ipAddress, liveDeviceId); // Create new xbox

		// Optional, defaults shown
		var options = {
		    tries: 5,
		    delay: 1000,
		    waitForCallback: false
		};

		xbox.powerOn(options);
	}

	res.sendStatus(200);
});

//app.use(express.static('dist'));

http.listen(3000, function(){
	console.log('listening on *:3000');
});
