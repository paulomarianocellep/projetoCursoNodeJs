// npm install pg

// Foi desestruturada a Biblioteca PG para pegar somente um elemento
const { Client } = require('pg')

const client = new Client({
    connectionString: 'postgres://bixwdtqjqjabxh:3c75f4429fb6f3a570b6384c6f2de40fd65308c313a3db519c48ea73c2097fdc@ec2-54-204-56-171.compute-1.amazonaws.com:5432/d7lbupfsev0t7f',
    ssl: { rejectUnauthorized: false }
})

client.connect()

function connectTeste() {
    client.query('select $1:: text as message', ['Olá mundo'], function(error, result){ console.log(result.rows[0].message) })
}

connectTeste()