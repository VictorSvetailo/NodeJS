
const express = require('express')
const {getPosts} = require("./posts-repository");
const router = express.Router()

router.get('/', async (req, res) => {
    let posts = await getPosts()
    res.send(posts)
})

module.exports = router
