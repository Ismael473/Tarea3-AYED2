const { Socket } = require('dgram');
const net = require('net');


const server = net.createServer();

server.on('connection', (socket)=>{
    socket.on('data', (data)=>{//Acá voy a agregar otros datos de ingreso que van a ser los números a calcular
        console.log('\nmensaje recibido desde el cliente: ' + data);
        socket.write('\nrecibido')//Dato enviado por la conexión
    })

    socket.on('Close', ()=>{
        console.log('Comunicación finalizada')
    })

    socket.on('error', (err)=>{
        console.log(err.message)
    })
})

server.listen(4000, ()=>{
    console.log("El servidor está escuchando",server.address().port);
});