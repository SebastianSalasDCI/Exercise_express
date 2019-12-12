var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
const apiRouter = require('./routes/api')
const corsFunction = require('./middleware/corsFunction')

var app = express();

app.set('view engine','ejs')
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
app.use(cors(corsFunction))

app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/api', testRouter);

module.exports = app;


console.log(process.env.PORT)