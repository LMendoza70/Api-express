const express=require('express')
const esquema=require('../models/molienda')

const routerm=express.Router()

//crear una molienda
routerm.post('/moliendas',(req,res)=>{
    const mol= esquema(req.body);
    mol.save()
    .then(data=>res.json(data))
    .catch(error=>res.json({message:error}))
})

//leer moliendas
routerm.get('/moliendas',(req,res)=>{
    esquema.find()
    .then(data=>res.json(data))
    .catch(error=>res.json({message:error}))
})

//buscar moliendas
routerm.get('/moliendas/:id',(req,res)=>{
    const {id}=req.params
    esquema.findById(id)
    .then(data=>res.json(data))
    .catch(error=>res.json({message:error}))
})

//actualizar moliendas
routerm.put('/moliendas/:id',(req,res)=>{
    const{id}=req.params;
    const{nombre}=req.body
    esquema
    .updateOne({_id:id},{$set:{nombre}})
    .then((data)=>res.json(data))
    .catch((error)=>res.json({message:error}))
})

//eliminar moliendas
routerm.delete('/moliendas/:id',(req,res)=>{
    const{id}=req.params;
    esquema.deleteOne({_id:id})
    .then(data=>res.json(data))
    .catch(error=>res.json({message:error}))
})

module.exports=routerm