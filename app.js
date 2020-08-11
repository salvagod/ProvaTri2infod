const express = require('express');
const app = express();
const mongoose = require('mongoose');
//('mongodb+srv://xinove:etVawwH4ujjh28U@projetos-4gzml.gcp.mongodb.net/avaliacao3',
mongoose.connect('mongodb+srv://xinove:etVawwH4ujjh28U@projetos-4gzml.gcp.mongodb.net/avaliacao3?retryWrites=true&w=majority',
    {useNewUrlParser: true,
     //useCreateIndex : true,
     useFindAndModify: false,
     //useUnifiedTopology: true,

    });
require('./model/model');

app.use('/api', require('./route/routes'));

// colocando na porta 6000 me da um erro ao tentar acesse-la dizendo que a porta é utilizada para navegaçãoweb, entao mudei 8080
app.listen(8080);
