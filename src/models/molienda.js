const mongoose=require('mongoose')

const moliendaesquema=mongoose.Schema(
    {
        nombre:{
            type:String,
            required:true
        }
    }
)

module.exports=mongoose.model('Molienda',moliendaesquema)