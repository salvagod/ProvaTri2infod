const express = require('express');
const app = express();
const mongoose = require('mongoose');
mongoose.connect('mongodb+srv://xinove:etVawwH4ujjh28U@projetos-4gzml.gcp.mongodb.net/avaliacao3?retryWrites=true&w=majority',
    {useNewUrlParser: true,
     useCreateIndex : true,
     useFindAndModify: false,
     useUnifiedTopology: true,
     promiseLibrary: global.Promise

    });
require('./model/model');
app.use(express.json());
app.use('/api', require('./route/routes'));

app.listen(6001);
