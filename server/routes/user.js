const express = require('express');
const routes = express.Router();
const Santri = require('../model/santri');

//read
routes.get('/' , async (req,res) => {
    try {
        const santri = await Santri.find()
        res.json(santri);
    } catch (error) {
        res.json({message:error})
    }
})

//create
routes.post('/', async (req,res) => {
    const santriPost = new Santri({
        name: req.body.name,
        nohp:req.body.nohp,
        email:req.body.email
    })
    try {
        const santri = await santriPost.save()
        res.json(santri);
    } catch (error) {
        res.json({message:error})
    }
})

//update 
routes.put('/:santriId' , async (req,res) => {
    
    try {
        const santriUpdate = await Santri.updateOne({_id :req.params.santriId}, {
            name:req.body.name,
            nohp:req.body.nohp,
            email:req.body.email
        })
        res.json(santriUpdate);
        
    } catch (error) {
        res.json({message:error})
    }
})

//delete
routes.delete('/:santriId', async (req,res) => {
    try {
        const santriDelete = await Santri.deleteOne({_id : req.params.santriId}, {
            name:req.body.name,
            nohp:req.body.nohp,
            email:req.body.email
        })

        res.json(santriDelete)
    } catch (error) {
        res.status(500);
        res.json({message: error})
    }
})

module.exports = routes;