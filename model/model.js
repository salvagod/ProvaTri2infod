
const mongoose = require('mongoose');

const UsuarioSchema = new mongoose.Schema({
    nome: {
        type: String,
        required: true
    },
    endereco:{
        type: Number,
        requires: true
    },
    idade:{
        type: Number,
        required: true
    },
    cpf:{
        type: String,
        required: true
    },
    data_nasc:{
        type: Date
    },
    telefone:{
        type: Number
    },
    cafeteria_favorita:{
        type: String
    }
});


module.exports = mongoose.model('Usuario', UsuarioSchema, 'usuario');
