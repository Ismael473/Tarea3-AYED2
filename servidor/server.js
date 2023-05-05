const { Socket } = require('dgram');
const net = require('net');

const server = net.createServer();

server.on('connection', ()=>{
    Socket.on('data', (data)=>{//Acá voy a agregar otros datos de ingreso que van a ser los números a calcular
        console.log('mensaje recibido desde el cliente:' + data);
    })

    Socket.on('Close', ()=>{
        console.log('Comunicación finalizada')
    })

    Socket.on('error', (err)=>{
        console.log(err.message)
    })
})

server.listen(4000, ()=>{
    console.log("El servidor está escuchando",server.address().port);
});