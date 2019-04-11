var express = require('express');
var app = express();
var port = process.env.PORT || 8080;
var server = app.listen(port);
server.on('listening', function () {
    console.log("App Listening to 8080 port");
});
app.get('/play/:play', function (req, res) {
    const computerChoice = makeComputerChoice();
    const playChoice = req.query.play || req.params.play;
    const result = play(playChoice, computerChoice);
    const responseString = `{result} won`;
    res.send(responseString);
});