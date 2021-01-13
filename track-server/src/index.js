require('./models/User');
const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const authRoutes = require('./routes/authRoutes');

const app = express();
app.use(bodyParser.json()); // parse data comming from incomming request
app.use(authRoutes);

const mongoUri = 'mongodb+srv://soniadumitru:passwordpassword@cluster0.a2inz.mongodb.net/<dbname>?retryWrites=true&w=majority';

mongoose.connect(mongoUri, {
    userNewUrlParser: true,
    userCreateIndex: true, 
});

// connect to mongose instance
mongoose.connection.on('connect', () => {
    console.log('Connect to mongo instance');
});

// announce when getting an error
mongoose.connection.on('error', (err) => {
    console.log('Error connecting to mongo instance', err);
});

// route handler
app.get('/', (req, res) => {
    res.send('hi there!')
});

app.listen(3000, () => {
    console.log('Listening on port 3000')
})