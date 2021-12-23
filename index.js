const express = require('express');
const app = express();
const SocketIO = require("socket.io");
const ejs = require("ejs");

var mc = require('minecraft-protocol');
var client = mc.createClient({
  host: "Suhibar.aternos.me",
	port: 51608,
	username: "Subnc",
});

app.set('view engine', 'ejs');
app.use(express.static('public'));
app.get('/', (req, res) => {
	res.render('index');
});
	
server = app.listen();
SocketIO(server);

client.on('chat', function(packet) {
  	var jsonMsg = JSON.parse(packet.message);
	console.log(jsonMsg);
	setTimeout(io.sockets.emit,1000,'a',jsonMsg);
  	
	/*if(!jsonMsg.extra) return;
	if(!jsonMsg.extra[0].text.startsWith('<')) return;
	var [original, username, msg] = jsonMsg.extra[0].text.toString().match(/(?:<(.+)> (.+))/);
	if(username === client.username) return;*/
});
