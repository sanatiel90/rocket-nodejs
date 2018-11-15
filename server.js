//importando express; está no formato antigo de importacao, o novo (import express from 'express') pode nao estar
//funcionando pq precisa do webpack instalado
const express = require('express')
const cors = require('cors') //importando lib para habilitar cors
const mongoose = require('mongoose') //mongoose para usar mongodb
const requireDir = require('require-dir') //lib para importar todos os arq de uma pasta de uma vez só

//instanciando express
const app = express()
//permite q seja enviado json à aplicacao (como em req POST para salvar)
app.use(express.json())
//habilitando cors
app.use(cors()) 

//fazendo a conexao com mongodb utilizando mongoose; se o banco de dados (schema) informado nao existir, ele será criado
mongoose.connect("mongodb://localhost:27017/nodeapi", { useNewUrlParser: true })
//importando todos os models
requireDir('./src/models')

//use(): a partir da rota '/api' utilizar o arquivo de rotas './src/routes'
app.use('/api', require('./src/routes'))

app.listen(3001, () => console.log('server started at port 3001') )