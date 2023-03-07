const mongoose=require('mongoose')

const userSchema=mongoose.Schema(
    {
        nombre:{type:String,require:true},
        apellidop:{type:String,require:true},
        apellidom:{type:String,require:true},
        email:{type:String,require:true,unique:true},
        password:{type:String,require:true},
        telefono:{type:String,require:true, unique:true,maxlength:10,minlength:10}
    }
)

module.exports=mongoose.model('User',userSchema)