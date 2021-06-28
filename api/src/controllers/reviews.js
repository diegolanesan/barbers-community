const { Review } = require("../db");


const getReviewsByBarberId = async(req, res) => {
    const barberId = req.params.id
    const reviews = await Review.findAll({where: {barberId: barberId}, include: {all: true, nested: true}})
    //console.log(cart)
    res.send(reviews)
}

const postReview = async(req, res) => {
    const clientId = req.params.id
    const {barberId, text, rating} = req.body

    const reviews = await Review.findAll({where: {barberId: barberId, clientId: clientId }, include: {all: true, nested: true}})
    //console.log(cart)
    // if (reviews) {
    //     reviews.text = text,
    //     reviews.rating = rating,
    //     reviews.save()
    // }

    const createdReview = await Review.create({
        text: text,
        rating: rating,
        barberId: barberId,
        clientId: clientId
    })
    res.sendStatus(200)
}

const updateReview = async(req, res) => {
    const clientId = req.params.id
    const {barberId, text, rating} = req.body

    const reviews = await Review.findOne({where: {barberId: barberId, clientId: clientId }, include: {all: true, nested: true}})
    console.log(reviews)
    // if (reviews) {
        reviews.text = text,
        reviews.rating = rating,
        reviews.save()
    // }

    res.sendStatus(200)
}

module.exports = {
    getReviewsByBarberId,
    postReview,
    updateReview
}