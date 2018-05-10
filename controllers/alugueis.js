const imovel = require('../models/imovel')

module.exports = (app) => {
    app.get('/alugueis', (req, res, next) => {
        res.render('alugueis')
    })
}