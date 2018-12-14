const express = require('express')
const path = require('path')
const app = express()
app.get('/*', function (req, res) {
    res.sendFile(path.join(__dirname, '/dist/index.html'), function (err) {
        if (err) {
            res.status(500).send(err)
        }
    })
})
app.listen(3000)