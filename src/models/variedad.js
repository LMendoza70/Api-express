const mongoose=require('mongoose')

const varSchema = mongoose.Schema(
  {
    nombre:{
        type:String,
        required:true
    },
    descripcion:{
        type:String,
        required:true
    },
    variedad:String,
    puntiacion:String,
    productor:String,
    finca:String,
    altura:String,
    proceso:String,
    notas:String
  }
);

module.exports=mongoose.model('Variedad',varSchema)
