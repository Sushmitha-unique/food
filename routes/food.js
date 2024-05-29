const express = require('express')
const router = express.Router()
const food = require('../model/food.js')
router.get('/',async(req,res)=>{
    try{
     const breakfast = await  food.find()
     res.json(breakfast)
        }
    catch(err){
        res.send("Error"+ err)
    }
})
router.post('/',async(req,res)=>{
    const breakfast = new food(
        {
            url:req.body.url,
            name:req.body.name,
            rating:req.body.rating,
            address:req.body.address
        }
    )
    try{
       const a1 = await breakfast.save()
       res.json(a1)
    }
    catch(err)
    {
        console.log("Error" + err)
    }
})

module.exports = router