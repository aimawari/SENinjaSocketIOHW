var express = require('express')
//var fs = require('fs')
var app = express()
var server = require('http').createServer(app);
var io = require('socket.io')(server);
app.use(express.static('src'))
// app.get('/test', function (req, res) {
//   res.send('Hello World!')
// })

io.sockets.on('connection',function(sk){
  console.log(sk);
  sk.emit('broadcast',{msg:'Hi client!'});
  
  sk.on('changeVDO', function (data){
    console.log(data.msg);
	  io.sockets.emit("changeV", data);
  })
})


var ip = require("ip")

server.listen(80, function () {
  console.log('Smart display start andd access on http: ' + ip.address() + ':3000!')
})
