const mongoose = require('mongoose');

const Usuario = mongoose.model('Usuario');


module.exports = {
    async show(req, res){
        const produto = await Usuario.findById(req.params.id);
        
        return res.json(produto);
    },
    async store(req, res){
        const produto = await Usuario.create(req.body);
        
        return res.json(produto);
    },
    async update(req, res){
        const produto = await Usuario.findByIdAndUpdate(req.params.id, req.body, {new:true});

        return res.json(produto);
    },
    async deletar(req, res){
        await Usuario.findByIdAndRemove(req.params.id);

        return res.send();
    },
};
/*
class UsuarioControlador {

    async inserir(req, res){
        try {
            const inserido = await Usuario.create(req.body)
            if (inserido) console.log('ok')
            else console.log('erro no retorno')
        } catch (error) {
            console.log('erro')
        }
    }

    async listar(req, res){
        try {
            const lista = await Usuario.find({})
            
            if (lista) console.log('ok')
            else console.log('erro no retorno')
        } catch (error) {
            console.log('erro')
        }
    }
    async buscar(req, res){
        try {
            const dado = await Usuario.findById(req.params.id)
            return res.json(dado);
            //if (dado) console.log('ok')
            //else console.log ('erro no retorno')
        } catch (error) {
            console.log('erro')
        }
    }

    async atualizar(req, res){
        try {
            const atualizado = await Usuario.findByIdAndUpdate(req.params.id, req.body, {new:true})
    
            if (atualizado) console.log('ok atualizado')
            else console.log ('erro no retorno')
        } catch (error) {
            console.log('erro')
        }
    }
    
    async remover(req, res){
        try {
            const removido = await Usuario.findByIdAndRemove(req.params.id)
            //return res.send();
            if (removido) console.log('ok deletado')
            else console.log ('erro no retorno')
        } catch (error) {
            console.log('erro')
        }
    }
}

module.exports = UsuarioControlador;*/
