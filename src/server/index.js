const dotenv = require('dotenv')
dotenv.config()

var path = require('path')
const express = require('express')
const cors = require('cors')
const bodyParser = require('body-parser')
const fetch = require('node-fetch');
const mockAPIResponse = require('./mockAPI.js')

const app = express()
app.use(cors())
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())
app.use(express.static('dist'))
console.log(__dirname)


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

// API Setup
const baseAPIURL = 'https://api.meaningcloud.com/sentiment-2.1?'
const apiKey = process.env.API_KEY
console.log(`Your API key is ${process.env.API_KEY}`)
let userInput = []

// POST Route
app.post('/api', async function(req, res) {
    userInput= req.body.url
    console.log(`You entered: ${userInput}`)
    const apiURL = `${baseAPIURL}key=${apiKey}&url=${userInput}&lang=en`

    const response = await fetch(apiURL)
    const data = await response.json()
    res.send(data)
})

app.get('/test', function (req, res) {
    res.send(mockAPIResponse)
    res.status(200).send(mockAPIResponse)
})

module.exports = app