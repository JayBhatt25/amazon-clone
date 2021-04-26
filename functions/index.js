const functions = require("firebase-functions");
const express = require("express");
const cors = require("cors");
const stripe = require("stripe")('sk_test_51Ig5wTSApxnflnsKlT7TyOXtp2m8CozQwi6lomBj6dQasSxytD0DT325iV7tfzu65HBZfTTNJcfHbVetnV3GBYo400WAGjIrC9')


// API  Setup

//- App config
const app = express();
//- Middlewares
app.use(cors({ origin: true }));
app.use(express.json());
//- Api Routes
app.get('/', (request, response) => response.status(200).send('Hello World'))

app.post('/payments/create', async (request, response) => {
    // get total amount to charge from the url query parameter i.e payments/create?total=.....
    const total = request.query.total;
    console.log("Payment request has been received for this amount ", total);

    const paymentIntent = await stripe.paymentIntents.create({
        amount:  total,
        currency: "inr",
    });

    response.status(201).send({
        clientSecret: paymentIntent.client_secret,
    })
})
//- Listen command
exports.api = functions.https.onRequest(app)