const postModel = require('../models/people')

function getAllPost(req,res){
    const posts = postModel.getAllPost()
    return res.json(posts)
}
// searching commonjs vs es

function addPost(req,res){
    const {author,content} = req.body;
    const post = postModel.addPost({author,content})
    return res.status(201).json(post)
}

function getPostById(req,res){
    const {id} = req.params
    //validate params -> id
    const post = postModel.getPostById(id)
    return res.json(post)
}

function updatePostById(req,res){
    const {id} = req.params
    const {author, content } = req.body
    const updatedPost = postModel.updatePostById(id,{author,content})//newPost={author,content}
    return res.json(updatedPost)
}

function deletePostById(req,res){
    const {id} = req.params
    const deletedPost = postModel.deletePostById(id)
    return res.json(deletedPost)
}

module.exports = {
    getAllPost,
    addPost,
    getPostById,
    updatePostById,
    deletePostById
}