
const Shipment = require('../models/shippments')

exports.create = (req, res) => {
    const {fromAddress, toAddress, labelId, items} = req.body
    switch(true){
        case !fromAddress:
        return res.status(400).json({error: 'From Address is required'})
        break;
        case !toAddress:
        return res.status(400).json({error: 'To Address is required'})
        break;
        case !labelId:
        return res.status(400).json({error: 'labelId is required'})
        break;
    }

    Shipment.create({fromAddress, toAddress, labelId, items}, (err, order) =>{
        if(err) {
            console.log(err);
            res.status(400).json({error: "Duplicate shipment. Try another labelId"})
        }
        res.json(order)
    })
}


exports.list = (req, res) => {
    Shipment.find({})
        .sort({createdAt: -1})
        .exec((err, shippments) => {
        if(err) console.log(err)
        res.json(shippments)
    })

}

exports.update = (req, res) => {
    const {labelid, name, quantity, price} = req.body 
    Shipment.findOneAndUpdate(
        {labelId: labelid},
        {$push: {
            items: {name, quantity, price}
        }}
    ).exec((err, success) =>{
        if(err) console.log(err);
        res.json(success)
    })
}
