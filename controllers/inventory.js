const Inventory = require('../models/inventory')
const slugify = require('slugify')

exports.create = (req, res) => {
    const {name, quantity, price} = req.body 
    const slug = slugify(name)

    switch(true){
        case !name:
        return res.status(400).json({error: 'Name is required'})
        break;
        case !quantity:
        return res.status(400).json({error: 'Quantity is required'})
        break;
        case !price:
        return res.status(400).json({error: 'Price is required'})
        break;
    }

    // create inventory item
    Inventory.create({name, slug, quantity, price}, (err, inventory) => {
        if(err) {
            console.log(err);
            res.status(400).json({
                error: 'Duplicate inventory. Try another name!'
            })
        }
        res.json(inventory)
    })
    

}

exports.list = (req, res) => {
    Inventory.find({})
        .sort({createdAt: -1})
        .exec((err, posts) => {
        if(err) console.log(err)
        res.json(posts)
})}


exports.read = (req, res) =>{
    const {slug} = req.params 
    Inventory.findOne({slug})
        .exec((err, post) => {
        if(err) console.log(err)
        res.json(post)
    })
}

exports.update = (req, res) => {
    const {slug} = req.params
    const {name, quantity, price} = req.body
    Inventory.findOneAndUpdate({slug}, {name, quantity, price}, {new: true}).exec((err, inventory) => {
        if(err) console.log(err);
            res.json(inventory)
    })
}

exports.remove = (req, res) => {
    const {slug} = req.params
    // console.log(req.params)

    Inventory.findOneAndRemove({slug}).exec((err, inventory) => {
        if (err) console.log(err);
        res.json({
            message: 'Post Delete'
        })
    })

}

exports.updateInventory = (req, res) => {
    const {slug} = req.params 
    const {quantities} = req.body
    Inventory.findOneAndUpdate({slug}, {$inc: {quantity: -1 * quantities}}).exec((err, success) => {
        if(err) console.log(err);
            res.json(success)
    })
}