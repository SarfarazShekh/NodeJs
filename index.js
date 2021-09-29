const express = require('express');
const mongoose = require('mongoose');
const app = express();
const port = 3500;
const url = " mongodb://127.0.0.1:27017/StudentDb";
mongoose.connect(url, { usenewUrlParser: true });
const con = mongoose.connection;
con.on('open', () => {
    console.log("Mongo db is running");
});

app.use(express.json());

const studentRouter = require('./routes/route');
app.use('/student', studentRouter);


app.listen(port, () => { console.log('listening on http://localhost:' + port) });