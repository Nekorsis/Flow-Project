const express = require('express');
const app = express();
const http = require('http').Server(app);
const io = require('socket.io')(http);

app.use(express.static('./build'));

app.get('/', function(req, res){
	res.sendFile('./build/index.html');
});

http.listen(3000, function(){
	console.log('server is up and running');
});

io.on('connection', function(socket){
  console.log('a user connected ', socket);
});
