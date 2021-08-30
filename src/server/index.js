const dotenv = require('dotenv')
dotenv.config()

var path = require('path')
const express = require('express')
const cors = require('cors')
const bodyParser = require('body-parser')
const fetch = require('node-fetch');
const mockAPIResponse = require('./mockAPI.js')
const apiKey = process.env.API_KEY

const app = express()
app.use(cors())
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())
app.use(express.static('dist'))

// Server Setup
const PORT = 8080
app.listen(PORT, (error) => {
    if (error) throw new Error(error)
    console.log(`Server listening on port ${PORT}!`)
})

// GET Route
app.get('/', function (req, res) {
    // res.sendFile('dist/index.html')
    res.sendFile(path.resolve('src/client/views/index.html'))
})



// POST Route
app.post('/article-data', async function(req, res) {
    let enteredURL = req.body.url
    console.log(`Link: ${enteredURL}`)
    const apiData = await fetch(`https://api.meaningcloud.com/sentiment-2.1?key=${apiKey}&url=${enteredURL}&lang=en`)
    try {
        const incomingData = await apiData.json()
        res.send(incomingData)
    } catch(error) {
        console.log('error', error)
    }
})

app.get('/test', function (req, res) {
    res.send(mockAPIResponse)
    res.status(200).send(mockAPIResponse)
})

module.exports = app
