const postController = (req, res)=>{
    res.send({
        post: {
            title: "we are building it up", 
            message: "when you pass i take my turn dmdlaskdndansda"
        }
    })
}   

module.exports = {
    postController
}