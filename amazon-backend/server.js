const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const stripe = require('stripe')('ADD_YOUR_API_KEY');

const app = express();
const port = 8000;

// Middleware
app.use(express.json());
app.use(cors());

// MongoDB Connection URL
const connection_url = "ADD_URL_FROM_ATLAS";
mongoose.connect(connection_url, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
}).then(() => console.log("Connected to MongoDB"))
    .catch((error) => console.error("MongoDB connection error:", error));

// Product Schema and Model
const productSchema = mongoose.Schema({
    title: String,
    imageUrl: String,
    price: Number,
    rating: Number,
});

const Products = mongoose.model("Products", productSchema);


// API Route to add a product
app.post('/product/add', async (req, res) => {
    const productDetail = req.body;

    try {
        const data = await Products.create(productDetail); // Using async/await here
        res.status(201).send(data);
    } catch (err) {
        res.status(500).send(err.message);
    }
});

app.get('/product/get', async (req, res) => {
    try {
        const products = await Products.find(); // Use async/await here
        res.status(200).json(products); // Send products as JSON response
    } catch (err) {
        res.status(500).send(err.message); // Handle any error that occurs
    }
});
//API for payments

app.post('/payment/create',async(req,res)=>{
    const total=req.body.amount

    const payment=await stripe.paymentIntents.create({
        amount:total*100,
        currency:'inr'
    });
    res.status(201).send({
        clientSecret: payment.client_secret,
    })
})

// API Route for testing
app.get('/', (req, res) => res.status(200).send("Hello World"));

// Start the server
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
