const posts =[];
let currentId = 1;


function addPost(post){
    const newPost = {...post,id: currentId++}
    // const post = {author,content, id: currentId++}
    posts.push(post)
    return newPost
} 

function getAllPost(){
    //返回值做deep copy
    return JSON.parse(JSON.stringify(posts))
}

function getPostById(id){
    return posts.find(i => i.id === id)
}

function updatePostById(id,newPost){
    //getpostindexbyid检查id是否存在或id的值是多少
    const postIndex = getPostIndexById(id)
    const updatedPost = {...newPost,id}
    posts[postIndex] = updatedPost
    return updatedPost
}

function deletePostById(id){
    const postIndex = getPostIndexById(id)
    const deletedPost = posts.splice(postIndex,1)
    return deletedPost
}

function getPostIndexById(id){
    return posts.findIndex((i)=> i.id === id)
}

module.exports = {addPost,getAllPost,getPostById,updatePostById,deletePostById,getPostIndexById}