const express = require("express")
const postsRouter = express.Router()


const posts =  [
    {
        "postId" : 1,
        "id": 1,
        "name": "is labore ex et quam laborum",
        "email": "Eliseo@gardner.biz",
        "body": "laudantium enim quasi est quidem magnam voluptate ipsam eos\ntempora quo necessitatibus\ndolor quam autem quasi\nreiciendis et nam sapiente accusantium"
    }
]

postsRouter.get('/', (req, res) => {
    return res.json(posts)
})

postsRouter.post('/', (req,res) => {
    req.body.postId ? res.status(201).send({"message": "Your comment was post"})
        : res.status(422)


})

module.exports = postsRouter