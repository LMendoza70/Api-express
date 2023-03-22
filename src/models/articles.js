const mongoose =require('mongoose')

const articlesSquema=mongoose.Schema({
    titulo: {type:String, require:true},
    body: {type:String, require:true},
    autor: {type:String, require:true},
    createdAt: {type:Date, require:true},
    updatedAt: {type:Date, require:true}
})

module.exports=mongoose.model('Articulo',articlesSquema)