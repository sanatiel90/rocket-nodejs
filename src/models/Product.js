const mongoose = require('mongoose')
//lib para paginacao
const mongoosePaginate = require('mongoose-paginate')

//cria um novo Schema, q vai ser uma tabela/model; nesse schema vc define os campos e os tipos
const ProductSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
    },
    description: {
        type: String,
        required: true,
    },
    url: {
        type: String,
        required: true,
    },
    createdAt: {
        type: Date,
        default: Date.now
    }

})

//add o plugin de paginacao ao model/schema; vai dar acesso no model ao metodo paginate()
ProductSchema.plugin(mongoosePaginate)

//registrando o model Product com o schema ProductSchema 
mongoose.model('Product', ProductSchema)