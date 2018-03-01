// server.js
const express = require('express'),
    server = express();
    

// server.set('port', process.env.PORT || 3000);

// Basic routes
server.get('/', (request, response) => {
    response.send('home page');
})

server.get('/us', (request, response) => {
    response.send('about us');
})

// handle error handing middleware
server.use((request, response) => {
    response.type('text/plain');
    response.status(505);
    response.send('Error page');
})

server.listen(3000, ()=>{
    console.log('server on port 3000')
})
