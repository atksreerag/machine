let mongoClient = require('mongodb').MongoClient
const state={
    db:null
}
module.exports.connect=()=>{
    return new Promise((resolve,reject)=>{
        let err=false
        let url = 'mongodb://localhost:27017'
        let dbname = 'article'
    
        mongoClient.connect(url).then((data)=>{
            if (err) return err
            state.db=data.db(dbname) 
            resolve(data)
        })
            
        }).catch((err)=>{
            console.log(err);
    })
    
   
}
module.exports.get=()=>{
    return state.db
}