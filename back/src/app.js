const express = require('express');
const dotenv = require ('dotenv').config();
const cors = require('cors');

const app = express();

app.set('port', process.env.PORT || 3005);
app.use(cors());
app.use(express.json());

app.use('/uploads', express.static(__dirname + '\\uploads'));
const router = require('./routes/cadastroRouter');
const videoRouter = require('./routes/videoRouter');
const userRouter = require('./routes/userRouter');
const comentarioRouter = require('./routes/comentarioRouter');

app.use('/api', router);
app.use('/api', videoRouter);
app.use('/api', userRouter);
app.use('/api', comentarioRouter);

module.exports = app;