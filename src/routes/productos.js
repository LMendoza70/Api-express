const express=require('express')
const esquema=require('../models/productos')

const routerpr=express.Router()

//crear producto
routerpr.post('/productos',(req,res)=>{
    const pr= esquema(req.body);
    pr.save()
    .then(data=>res.json(data))
    .catch(error=>res.json({message:error}))
})

//leer productos
routerpr.get('/productos',(req,res)=>{
    esquema.find()
    .populate('variedad')
    .populate('presentacion')
    .then(data=>res.json(data))
    .catch(error=>res.json({message:error}))
})

//buscar producto
routerpr.get('/productos/:id',(req,res)=>{
    const {id}=req.params
    esquema.findById(id)
    .populate('variedad')
    .populate('presentacion')
    .then(data=>res.json(data))
    .catch(error=>res.json({message:error}))
})

//actualizar producto
routerpr.put('/productos/:id',(req,res)=>{
    const{id}=req.params;
    const{precio,variedad,presentacion}=req.body
    esquema
    .updateOne({_id:id},{$set:{precio,variedad,presentacion}})
    .then((data)=>res.json(data))
    .catch((error)=>res.json({message:error}))
})

//eliminar producto
routerpr.delete('/productos/:id',(req,res)=>{
    const{id}=req.params;
    esquema.deleteOne({_id:id})
    .then(data=>res.json(data))
    .catch(error=>res.json({message:error}))
})

module.exports=routerpr