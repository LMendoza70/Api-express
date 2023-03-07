const express=require('express')
const esquema=require('../models/variedad')

const routerv=express.Router()

//crear variedad
routerv.post('/variedad',(req,res)=>{
    const va= esquema(req.body);
    va.save()
    .then(data=>res.json(data))
    .catch(error=>res.json({message:error}))
})

//leer variedad
routerv.get('/variedad',(req,res)=>{
    esquema.find()
    .then(data=>res.json(data))
    .catch(error=>res.json({message:error}))
})

//buscar variedad
routerv.get('/variedad/:id',(req,res)=>{
    const {id}=req.params
    esquema.findById(id)
    .then(data=>res.json(data))
    .catch(error=>res.json({message:error}))
})

//actualizar variedad
routerv.put('/variedad/:id',(req,res)=>{
    const{id}=req.params;
    const{nombre,descripcion,variedad,puntuacion,productor,finca,altura,proceso,notas}=req.body
    esquema
    .updateOne({_id:id},{$set:{nombre,descripcion,variedad,puntuacion,productor,finca,altura,proceso,notas}})
    .then((data)=>res.json(data))
    .catch((error)=>res.json({message:error}))
})

//eliminar variedad
routerv.delete('/variedad/:id',(req,res)=>{
    const{id}=req.params;
    esquema.deleteOne({_id:id})
    .then(data=>res.json(data))
    .catch(error=>res.json({message:error}))
})

module.exports=routerv