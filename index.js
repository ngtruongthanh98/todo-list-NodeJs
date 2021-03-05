const { request, response } = require('express');
const express = require('express');
const fs = require('fs');
const app = express();

app.get('/', (request, response) => {
    return response.send('Hello, world!')
})

app.get('/todos', (request, response) => {
    fs.readFile('./store/todos.json','utf-8', (err, data) => {
        if(err){
            return response.status(500)
        }
    })
})

app.listen(3000, () => {
    console.log('Application running on http://localhost:3000')
})