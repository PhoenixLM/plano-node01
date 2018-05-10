const mongoose = require('mongoose')

mongoose.connect('mongodb://localhost/plano', (err) => {
  if (err) return console.log(err)
  else console.log('mongodb connected')
})
module.exports = mongoose