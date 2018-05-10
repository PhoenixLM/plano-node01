const imovel = require('../models/imovel')

module.exports = (app) => {
    app.get('/vendas', (req, res, next) => {
        res.render('vendas')
    })
}