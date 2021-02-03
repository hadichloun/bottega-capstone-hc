const { Router } = require('express')
const menuRoute = Router()
const Menu =  require('../model/menu.model')

// create menu
menuRoute.post('/add', (req, res) => {
    let menu = new Menu(req.body);
    menu.save().then(menu => {
        res.status(200).json({'menu': 'menu added successfully'})
    }).catch(err => {
        res.status(4000).send('menu add failed')
    })
})

// GET
menuRoute.get('/get/:id', (req, res) => {
    const id = req.params.id;
    Menu.findById(id, function(err, menu) {
        if (menu) {
            res.status(200).json({'menu': JSON.stringify(menu)})
        } else {
            res.status(400).send(err)
        }
    })
})

// POST
menuRoute.post('/update/:id', (req, res) => {
    Menu.findById(req.params.id, function(err, menu) {
        if (!menu) {
            res.status(404).send('menu data not found')
        } else {
            menu.category = req.body.category
            menu.name = req.body.name
            menu.price = req.body.price
            // menu = req.body
            menu.save().then(result => {
                res.status(200).json({'update menu': JSON.stringify(result)})
            })
        }
    })
})

// DELETE
menuRoute.post('/delete/:id', (req, res) => {
    Menu.findByIdAndRemove(req.params.id, function(err, menu) {
        if (err) res.status(400).send('menu delete error')
        if (menu) res.status(200).send('menu delete success')
    })
})

module.exports = menuRoute