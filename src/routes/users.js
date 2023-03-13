const express=require('express')
const esquema=require('../models/users')

const router=express.Router()

//crear un usuario
router.post('/users',(req,res)=>{
    const us= esquema(req.body);
    us.save()
    .then(data=>res.json(data))
    .catch(error=>res.json({message:error}))
})

//leer usuarios
router.get('/users',(req,res)=>{
    esquema.find()
    .then(data=>res.json(data))
    .catch(error=>res.json({message:error}))
})

//buscar usuario
router.get('/users/:id',(req,res)=>{
    const {id}=req.params
    esquema.findById(id)
    .then(data=>res.json(data))
    .catch(error=>res.json({message:error}))
})

//actualizar usuario
router.put('/users/:id',(req,res)=>{
    const{id}=req.params;
    const{nombre,apellidop,apellidom,email,password,telefono}=req.body
    esquema
    .updateOne({_id:id},{$set:{nombre,apellidop,apellidom,email,password,telefono}})
    .then((data)=>res.json(data))
    .catch((error)=>res.json({message:error}))
})

//eliminar usuario
router.delete('/users/:id',(req,res)=>{
    const{id}=req.params;
    esquema.deleteOne({_id:id})
    .then(data=>res.json(data))
    .catch(error=>res.json({message:error}))
})
/*
const paletaCafeteria = {
    marronOscuro: '#8B4513',
    beige: '#F5DEB3',
    crema: '#FFFDD0',
    gris: '#808080',
    rojoOscuro: '#8B0000',
    verdeOscuro: '#006400'
  };*/
  

module.exports=router