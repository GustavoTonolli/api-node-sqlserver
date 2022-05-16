const { Model } = require('sequelize');
const ModelProduto  = require('../models/Produto');

module.exports = 
{
    async List(req, res)
    {
        try {
            const produtos = await ModelProduto.findAll();
            return res.json(produtos);

        } catch (error) {
            return console.error("Message: ", error);
        }
    },
    async Create(req, res)
    {
        try {
            const produtos = await ModelProduto.create(
                {
                    Codigo : req.body.Codigo,
                    Descricao : req.body.Descricao,
                    DataCriacao : req.body.DataCriacao,
                    DataAtualizacao : null
                }
            );
            return res.json(produtos);

        } catch (error) {
            return console.error("Message: ", error);
        }
    },
    async Update(req, res)
    {
        try {

            const prod = await ModelProduto.findByPk(req.body.Codigo)
            if (prod){
                prod.Descricao = req.body.Descricao
                prod.DataAtualizacao = new Date();
                await prod.save();
            }

            return res.json(produtos);

        } catch (error) {
            return console.error("Message: ", error);
        }
    },
    async GetOne(req, res)
    {
        try {

            const prod = await ModelProduto.findByPk(req.body.Codigo);

            return res.json(produtos);

        } catch (error) {
            return console.error("Message: ", error);
        }
    },
    async Delete(req, res)
    {
        try {

            const prod = await ModelProduto.findByPk(req.body.Codigo);
            await prod.destroy()
            return res.json(produtos);

        } catch (error) {
            return console.error("Message: ", error)
        }
    }
}