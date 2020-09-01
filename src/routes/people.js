const express = require('express')
const {getAllPost,getPostById,updatePostById,deletePostById,addPost} = require('../controllers/people')
const checkId = require('../middleware/validated')
const router = express.Router()

//localhost:3000/posts
router.get('',getAllPost)
router.post('',addPost)
router.get('/:id',checkId,getPostById)
router.put('/:id',checkId,updatePostById)
router.delete('/:id',checkId,deletePostById)

module.exports = router;