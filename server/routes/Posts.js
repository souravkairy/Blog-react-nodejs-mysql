const express = require('express')
const router = express.Router();
const { posts } = require('../models')


router.get('/', async (req, res) => {
    // res.send('This is sourav')
    // res.json('This is json')

    const listOfPost = await posts.findAll()
    res.json(listOfPost)
})

router.post('/', async (req, res) => {
    const post = req.body;
    await posts.create(post)
    res.json(post)
})

module.exports = router