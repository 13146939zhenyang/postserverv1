const postModel = require('../models/people')

module.exports = function(req,res){
    let {id} = req.params
    id = Number(id)
    if(postModel.getPostIndexById(id) === -1 ){
        return res.sendStatus(404)
    }
    req.params.id = id
    next()
}