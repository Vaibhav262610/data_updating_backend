const express = require('express')
require('dotenv').config()
const app = express()

app.get('/', function (req, res) {
    res.send('Hello World')
})

app.listen(process.env.PORT, (req, res) => {
    console.log(`SERVER IS RUNNING ON PORT ${process.env.PORT}`);

})