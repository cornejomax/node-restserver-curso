const express = require('express');
var mongoose = require('mongoose');
const path = require('path');
const app = express();
require('./config/config');

const bodyParser = require('body-parser');
// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))
    // parse application/json
app.use(bodyParser.json())

// habilitar public

app.use(express.static(path.resolve(__dirname, '../public')));

app.use(require('./routes/index'));



mongoose.connect(process.env.URLDB, { useNewUrlParser: true, useCreateIndex: true, useUnifiedTopology: true },
    (err, res) => {
        if (err) throw err;

        console.log('Database Online.');

    });

app.listen(process.env.PORT, () => {
    console.log('Escuchando puerto', process.env.PORT);
})