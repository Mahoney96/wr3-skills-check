require('dotenv').config()
const express = require('express')
const massive = require('massive')
const {CONNECTION_STRING, SERVER_PORT} = process.env

const app = express()

app.use(express.json())

massive({
    connectionString: CONNECTION_STRING,
    ssl: {rejectUnnathorized: false}
}).then(db => {
    app.set('db', db)
    console.log('Data is connected')
})



// app.get('/api/shelf/:id -')
// app.post('/api/shelf/:id-')
// app.put('/api/shelf/:id-')
// app.delete('/api/shelf:id-')


app.listen(SERVER_PORT, () => console.log(`Hey Hey, Your Port, Works Today on ${SERVER_PORT}`))