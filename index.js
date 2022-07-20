var express = require('express');

var app = express();
var path = require('path');
var PORT = 5000;
var clientRoot = path.resolve(__dirname, '.', '', 'build');
var indexPath = path.join(clientRoot, '', 'index.html');

app.use(express.static(clientRoot));
app.get('/*', function (req, res, next) {
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

app.get("/**", async(req, res) => {
       console.log(req.url)
        req.url = req.url.replace(req.path, "/agentportal"+req.path); 
        const response = await fetch(`http://localhost:5000${req.url}`, {
              headers: {
                     "Content-Type": ["text/javascript", "text/css", "application/json", ]
              }
        });
        res.set(response.headers.get("content-type"));
        response.body.pipe(res);
})

var server = app.listen(PORT, function () {
	var port = server.address().port;
	console.log('App is listening on Http port:' + port);
});


