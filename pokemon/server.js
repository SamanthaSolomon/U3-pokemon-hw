require('dotenv').config()
const PORT = process.env.PORT || 3000
const express = require('express')
const app = express()

const logger = require('morgan')
app.use(logger('dev'))

app.use(express.urlencoded({extended:false}))
app.use(express.json())

const pokemonController = require('./controller/pokemon')
app.use('/pokemon', pokemonController)



app.listen(PORT, () => {
    console.log('listening on port 3000')
})