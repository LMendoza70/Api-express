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
    .catch(error=>res.json({messaje:error}))
})

module.exports=router