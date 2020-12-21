var express = require('express');
var app = express();
var httpServer = require('http').Server(app);
var router = require('./router.js');
var io = require('socket.io')(httpServer);
var session = require('express-session');

app.set('views', '../views');
app.set('view engine', 'ejs');

app.use(express.static('../static'))
app.use(session({
	secret: "sldfjufne383r7w8fhwfe8.,.sd.f,f",
	resave: false,
	saveUninitialized: false
}));

app.use('/', router);

io.on('connection', (socket) => {

  socket.on('message', (data)=>{
  	io.emit('message', data);
  });

});

httpServer.listen(8000);
