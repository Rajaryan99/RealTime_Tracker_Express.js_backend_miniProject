const express = require('express');
require('dotenv').config();
const path = require('path');
const socketio = require('socket.io');
const http = require('http');

const app = express();

const server = http.createServer(app);
const io = socketio(server);

app.use(express.urlencoded({ extended: true }));
app.use(express.json());


app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

app.use(express.static(path.join(__dirname, 'public')));


io.on('connection', function(socket){
    console.log('connected')
})


app.get('/', (req, res) => {
    res.render('main.ejs');
})

server.listen(process.env.PORT, () => {
    console.log(`Server is running on http://localhost:${process.env.PORT}`);
})

