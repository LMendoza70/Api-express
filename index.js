const express=require('express')
const app =express()
const port=3000

//rutas
app.get('/',(req,res)=>{
    res.json({"response":"esto es mmi primer servidor"})
})

app.listen(port,()=>{
    console.log('corriendo en el puerto '+port)
})

//mongodb+srv://LMendoza:luismendoza@catando.yafsmbr.mongodb.net/catandoando?retryWrites=true&w=majority
