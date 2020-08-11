const express = require('express');
const app = express();
const mongoose = require('mongoose');

mongoose.connect('mongodb+srv://xinove:etVawwH4ujjh28U@projetos-4gzml.gcp.mongodb.net/avalicao3',
    {useNewUrlParser: true,
     useCreateIndex : true,
     useFindAndModify: false,
     useUnifiedTopology: true,

    });
require('./model/model');
app.use('/api', require('./route/routes'));


app.listen(6000);
