const express = require('express')
const router = express.Router()
const articleController = require('../controller/article-controller')

router.get('/',async(req,res)=>{
    try {
        let response = await articleController.getArticle()
        console.log(response);
        
        res.status(200).json(response)
    } catch (err) {
        console.log(err);
        
    }
})
router.get('/:id',(req,res)=>{
    articleController.getOneArticle(req.params.id,req.body).then((response)=>{
        console.log(response);
        res.status(200).json(response)

    }).catch((err)=>{
        console.log(err);
        
    })
})
router.post('/',(req,res)=>{
    articleController.addArticle(req.body).then((response)=>{
        console.log(response);
        
        res.status(200).json(response)
    }).catch((err)=>{
        console.log(err);
        
    })
})
router.put('/:id',async(req,res)=>{
    try {
        let response = await articleController.editArticle(req.params.id,req.body)
        console.log(response);
        res.status(200).json(response)
        
    } catch (err) {
        console.log(err);
        
    }
})
router.delete('/:id',(req,res)=>{
    articleController.removeArticle(req.params.id).then((response)=>{
        res.status(200).json(response)
        
    }).catch((err)=>{
        console.log(err);
        
    })
})

module.exports=router