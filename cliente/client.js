const net = require('net');

console.log("El cliente se intenta conectar")

const options = 
{
    port: 4000,
    host: '127.0.0.1'
};

const client = net.createConnection(options);

client.on('connect', ()=>{
    console.log('Se logró la conección')
    client.write('Hola')
})

client.on('error',(err)=>{
    console.log(err.message)
})
