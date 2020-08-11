
const mongoose = require('mongoose');

const UsuarioSchema = new mongoose.Schema({
    nome: {
        type: String,
        required: true
    },
    endereco:{
        type: String,
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
    },
    estuda_na_tec:{
        type: Boolean
    },
    estado_civil:{
        type: String
    },
    sistema_operacional:{
        type: String
    }

});


module.exports = mongoose.model('Usuario', UsuarioSchema, 'usuario');
