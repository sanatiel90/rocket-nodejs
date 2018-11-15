const mongoose = require('mongoose')
//recuperando model
const Product = mongoose.model('Product')


//exporta métodos referentes à CRUD Product
//com await, só vai executar o return quando buscar os produtos 
module.exports = {
    //listar todos, com paginacao
    async index(req, res){      //paginate() params: 1- objeto com filtros where; 2- pagina atual e limite por pagina  
        const { page = 1 } = req.query //pagina atual vai ser informada na requisicao como products?page = 2 ou receber 1 como padrão caso nao informada
        const products = await Product.paginate({}, { page, limit: 5 }) 
        return res.json(products)
    },
    //salvar
    async store(req, res){
        const product = await Product.create(req.body)
        return res.json(product)
    },
    //1 prod
    async show(req, res){
        const product = await Product.findById(req.params.id)
        return res.json(product)
    },
    //atualiza
    async update(req, res){ //params: id do prod q será atualizado; novos dados (presentes no body); e se o prod retornado vai ser já com as alteracoes feitas 
        const product = await Product.findByIdAndUpdate(req.params.id, req.body, { new: true })
        return res.json(product)
    },
    //apaga
    async destroy(req, res){
        await Product.findByIdAndRemove(req.params.id)
        return res.send()
    }

}