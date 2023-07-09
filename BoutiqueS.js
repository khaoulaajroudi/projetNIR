const  mongoose = require('mongoose')
const schema = mongoose.Schema
const BoutiqueSchema = new schema({
  name: {
    type: String,
    require: true,
  },
  image: {},
adresse:{
    type: String,
},
  category: {
    type: String,
    // require: true,
  },
  proprietaire: {
    type: String,
    // require: true,
  },
 
})
module.exports = mongoose.model('boutique', BoutiqueSchema)
