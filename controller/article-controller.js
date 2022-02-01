const db = require('../config/connection')
const collection = require('../config/collection')

var ObjectId = require('mongodb').ObjectID;
module.exports={
    addArticle:(artcleDetails)=>{
        return new Promise(async(resolve,reject)=>{
            try {
                let article = await db.get().collection(collection.ARTICLE_COLLECTION).insertOne(artcleDetails)
                resolve(artcleDetails)
            } catch (err) {
                console.log(err);
                
            }
        })
    },
    getArticle:()=>{
        return new Promise(async(resolve,reject)=>{
            try {
                 let article = await db.get().collection(collection.ARTICLE_COLLECTION).find().toArray()
                 resolve(article)
            } catch (err) {
                console.log(err);
                
            }
            
        })
    },
    getOneArticle:(articleId)=>{
        return new Promise(async(resolve,reject)=>{
            try {
                let oneArticle = await db.get().collection(collection.ARTICLE_COLLECTION).findOne({_id:ObjectId(articleId)})
                resolve(oneArticle)
            } catch (err) {
               console.log(err);
                
            }
        })
    },
    removeArticle:(articleId)=>{
        return new Promise((resolve,reject)=>{
            db.get().collection(collection.ARTICLE_COLLECTION).deleteOne({_id:ObjectId(articleId)}).then((response)=>{
                resolve()
            })
        }).catch((err)=>{
            console.log(err);
            
        })
    },
    editArticle:(articleId, artcleDetails)=>{
        return new Promise(async(resolve,reject)=>{
            try {
                let article = await db.get().collection(collection.ARTICLE_COLLECTION)
                .updateOne({_id:ObjectId(articleId)},{
                    $set:{
                        heading: artcleDetails.heading,
                        readTime: artcleDetails.readTime,
                        description: artcleDetails.description,
                        categories: artcleDetails.categories                   
                    }
                })
                resolve(article)
            } catch (err) {
                console.log(err);
                
            }
        })
    }
    
    
}