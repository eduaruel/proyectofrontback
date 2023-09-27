require('dotenv').config();

const express = require('express');
const app = express();
const mogoose = require('mongoose');
const path = require('path');
const cors = require('cors');
const cookieParser = require('cookie-parser');
const morgan = require('morgan');
const usersRouter = require('./controllers/users');


(async () => {  
    try{
         await mogoose.connect(process.env.MONGO_URI_TEST);
         console.log('conectado a mongo DB')
    } catch (error) {
        console.log(error);
    }
})();

app.use(cors());
app.use(express.json());
app.use(cookieParser());


// Rutas Frontend
app.use('/', express.static(path.resolve('views', 'home')));
app.use('/verify/:id/:token', express.static(path.resolve('views', 'verify')));
app.use('/signup', express.static(path.resolve('views', 'signup')));
app.use('/login', express.static(path.resolve('views', 'login')));
app.use('/components', express.static(path.resolve('views', 'components')));
app.use('/images', express.static(path.resolve('img')));

app.use(morgan('tiny'));

// Rutas backend
app.use('/api/users', usersRouter);



module.exports = app;