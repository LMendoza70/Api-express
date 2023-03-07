const express=require('express')
const esquema=require('../modelos/users')

const router=express.Router()

//crea user
router.post('/user',(req,res)=>{
    const user=esquema(req.body)
    user.save()
    .then(data=>res.json(data))
    .catch(error=>res.json({message:error}))
})
//obtener usuarios
router.get('/user',(req,res)=>{
    esquema.find()
    .then(data=>res.json(data))
    .catch(error=>res.json({message:error}))
})