const Net = require('net');
const Colors = require('colors');
const port = process.env.PORT || 9001;
const server = new Net.Server();
server.on("connection",function(socket){
    var socket_data = socket.remoteAddress+' : '+socket.remotePort;
    console.log('new connection applied '.green,socket_data);

    socket.on('data',function(chunk){
            console.log('%s',chunk);
            socket.write('Hello %s'.blue,chunk)
    });
    socket.once('close',function(){
        console.log('server closed from %s'.yellow,socket_data);
    });
    socket.on('error',function(error){
            console.log('Error from %s is %s'.red,socket_data,error.message);
    });
});
server.listen(port, function() {
    console.log('Server listening for connection requests on socket localhost '.gray,port);
});
