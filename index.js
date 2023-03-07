const express=require('express')
const mongoose=require('mongoose')
const userRouter=require('./src/rutas/users')
const app =express()
const port= process.env.port||3000

//midlewares
app.use(express.json())


//rutas
app.use('/api',userRouter)

app.get('/',(req,res)=>{
    res.json({"response":"esto es mmi primer servidor"})
})

//coneccion con la base de dato
mongoose.connect('mongodb+srv://LMendoza:luismendoza@catando.yafsmbr.mongodb.net/catandoando?retryWrites=true&w=majority',
).then(()=>{
    console.log('conectado')
})
app.listen(port,()=>{
    console.log('corriendo en el puerto '+port)
})
