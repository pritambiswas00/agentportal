const { query } = require('express');
var express = require('express');

var app = express();
var path = require('path');
var PORT = 5000;
var clientRoot = path.resolve(__dirname, '.', '', 'public');
console.log(clientRoot)
var indexPath = path.join(clientRoot, 'agentportal', 'index.html');

app.use(express.static(clientRoot));
app.get('/*', function (req, res, next) {
       console.log(req.hostname)
	var q = "?";
	for (var p in req.query) {
		if (req.query.hasOwnProperty(p)) {
			if (q != "?") {
				q += "&";
			}
			q += (p + "=" + req.query[p]);
		}
	}
	res.sendFile(indexPath + ((q == "?") ? "" : q));
});

// app.get("/agentportal/static/**", async(req, res) => {
//        console.log(req.url, "IN /****")
        
//         const response = await fetch(`http://localhost:5000${req.url}`, {
//               headers: {
//                      "Content-Type": ["text/javascript", "text/css", "application/json", ]
//               }
//         });
//         res.set(response.headers.get("content-type"));
//         response.body.pipe(res);
// })

var server = app.listen(PORT, function () {
	var port = server.address().port;
	console.log('App is listening on Http port:' + port);
});


