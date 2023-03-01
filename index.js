const fs = require('fs')
const express = require('express')
const mustache = require('mustache')
const { GenPosts } = require('./datagen')

const app = express()

app.get('/', (req, res) => {
    res.send(RenderMainPage({
        news: GenPosts()
    }))
})

app.get('/user.js', (req, res) => {
    res.sendFile("./BaseCase/user.js");
})

app.listen(8013, () => {
    console.log("Listening")
})

function RenderMainPage (view = {}) {
    const indexfile = fs.readFileSync("./BaseCase/index.html").toString()
    return mustache.render(indexfile, view)
}
