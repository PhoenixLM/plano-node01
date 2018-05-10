const Imovel  = require('../models/imovel')
const fs      = require('fs')
const moveImg = require('../helpers/moveImagesFromTmp')

module.exports = (app) => {
    app.get('/admin/new/imovel', (req, res, next) => {
        res.render('imovel-form')
    })

    app.post('/admin/new/imovel', (req, res, next) => {
        const imovel = new Imovel(req.body)
        imovel.save((err) => {
            if(err) return next(err)
            moveImg(req, imovel._id, (err) => {
                if(err) return next(err)
                res.redirect('/vendas')
            })
        })         
    })

    app.post('/admin/new/image', (req, res, next) => {
        console.log('NEW FILE REQUEST FOR FORM NUMBER: ' + req.body.cod)
        const filePath = './tmp/' + req.body.cod + '/'
        fs.mkdir(filePath, (err) => {
            let qqfile = req.files.qqfile
            qqfile.mv(filePath + qqfile.name, (err) => {
                if(err) {
                    res.send({"success":false})
                    return next(err)
                }
                res.send({"success":true})
            })
        })
    })
}