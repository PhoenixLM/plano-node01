const express    = require('express')
const load       = require('express-load') 
const bodyParser = require('body-parser')
const fileUpload = require('express-fileupload')

module.exports = () => {
    const app = express()

    app.use(express.static('./public'))
    app.use(fileUpload())
    app.use(bodyParser.urlencoded({extended:true}))
    app.use(bodyParser.json())
    app.set('view engine', 'ejs')

    load('controllers').into(app)
    
    return app
}