const express = require('express')
const router = express.Router()
const pokemon = require('../models/pokemon')

router.get('/', (req, res) => {
    res.json({
        status: 200,
        pokemon: pokemon})
})

router.get('/:id', (req, res) => {
    res.json({
        status: 200,
        id: pokemon[req.params.id]})
})

router.delete('/:id', (req, res) => {
    pokemon.splice(req.params.id, 1)
    res.json({
        status: 200,
        msg: 'deleted'
    })
})

router.post('/', (req, res) => {
    pokemon.push(req.body)
    res.json({
        status: 200,
        msg: 'POST - data recieved'})
})

router.put('/:id', (req, res) => {
    pokemon[req.params.id] = req.body
    res.json({
        status: 200,
        update: pokemon[req.params.id]
    })
})




module.exports = router