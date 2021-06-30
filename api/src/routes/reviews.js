const express = require('express');
const { getReviewsByBarberId, postReview, updateReview } = require('../controllers/reviews');
const server = express();


// ruta para buscar todas las reviews de un barbero
server.get("/:id", getReviewsByBarberId);

// ruta para crear o actualizar una Review
server.post("/:id", postReview);

server.put("/:id", updateReview);



module.exports= server;
