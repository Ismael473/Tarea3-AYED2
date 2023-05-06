<<<<<<< HEAD
const { read } = require('fs');
const net = require('net');
const readline = require('readline-sync');
=======
//Constantes para obtener los valores de los botones oprimidos en la calculadora

const numberButtons = document.querySelectorAll('[data-number]')
const operationButtons = document.querySelectorAll('[data-number]')
const equalsButton = document.querySelectorAll('[data-equals]')
const deleteButton = document.querySelectorAll('[data-delete]')
const allClearButton = document.querySelectorAll('[data-all-clear]')
const previousOperandTextElement = document.querySelectorAll('[data-previous-operand]')
const actualOperandTextElement= document.querySelectorAll('[data-actual-operand]')


const net = require('net');//Se requiere la constante net para la conexión
>>>>>>> 78e7ad465d5eb4990df531a98f867c05129255d4

console.log("El cliente se intenta conectar")

const options = //almacena el número del puerto y el valor del host
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

<<<<<<< HEAD
function sendLine(){
    var line = readline.question('\nEscriba algo\t')
    if (line == "0"){
        client.end
    }else{
        client.write(line)
    }
}
=======

>>>>>>> 78e7ad465d5eb4990df531a98f867c05129255d4
