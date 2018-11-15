///arquivo onde ficarao as rotas da api
const express = require('express')

//instancia de Router do Express q serve para gerenciar as rotas
const routes = express.Router()

//importando controller
const ProductController = require('./controllers/ProductController')

//usando GET, na rota api/products utilize o metodo ProductController.index
routes.get("/products", ProductController.index)
//salvar produto
routes.post('/products', ProductController.store)
//pegar 1 prod
routes.get('/products/:id', ProductController.show)
//atualizar
routes.put('/prodcuts/:id', ProductController.update)
//deletar
routes.delete('/products/:id', ProductController.destroy)

//exporta rotas
module.exports = routes