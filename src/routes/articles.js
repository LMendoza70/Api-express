const express=require('express')
const esquema=require('../models/articles')

const routera=express.Router()

//crear un Articulo
routera.post('/articles',(req,res)=>{
    const ar= esquema(req.body);
    ar.save()
    .then(data=>res.json(data))
    .catch(error=>res.json({message:error}))
})

//leer articulos
routera.get('/articles',(req,res)=>{
    esquema.find()
    .then(data=>res.json(data))
    .catch(error=>res.json({message:error}))
})

//buscar articulo
routera.get('/articles/:id',(req,res)=>{
    const {id}=req.params
    esquema.findById(id)
    .then(data=>res.json(data))
    .catch(error=>res.json({message:error}))
})

//actualizar articulo
routera.put('/articles/:id',(req,res)=>{
    const{id}=req.params;
    const{titulo,body,autor,coments,createdAt,updatedAt}=req.body
    esquema
    .updateOne({_id:id},{$set:{titulo,body,autor,coments,createdAt,updatedAt}})
    .then((data)=>res.json(data))
    .catch((error)=>res.json({message:error}))
})

//eliminar articulo
routera.delete('/articles/:id',(req,res)=>{
    const{id}=req.params;
    esquema.deleteOne({_id:id})
    .then(data=>res.json(data))
    .catch(error=>res.json({message:error}))
})

module.exports=routera