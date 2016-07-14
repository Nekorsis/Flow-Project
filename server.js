const express = require('express');
const app = express();

app.use(express.static('app/static'));

app.get('/', function(){
	res.sendFile('app/static/index.html');
});

app.listen(3000, function(){
	console.log('server is up and running');
});
