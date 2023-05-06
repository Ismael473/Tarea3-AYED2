const { read } = require('fs');
const net = require('net');
const readline = require('readline-sync');

console.log("El cliente se intenta conectar")

const options = 
{
    port: 4000,
    host: '127.0.0.1'
};

const client = net.createConnection(options);

client.on('connect', ()=>{
    console.log('Se logró la conección')
    sendLine()
})

client.on('data', (data)=>{
    console.log("El servidor dice: "+ data)
    sendLine()
})

client.on('error',(err)=>{
    console.log(err.message)
})

function sendLine(){
    var line = readline.question('\nEscriba algo\t')
    if (line == "0"){
        client.end
    }else{
        client.write(line)
    }
}
