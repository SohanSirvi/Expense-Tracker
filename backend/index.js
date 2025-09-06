const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const cors = require('cors');
const AuthRouter = require('./Routes/AuthRouter');
const ProductRouter = require('./Routes/ProductRouter');
const ExpenseRouter = require('./Routes/ExpenseRouter');
const ensureAuthenticated = require('./Middlewares/Auth');

require('dotenv').config();
require('./Models/db');

// Middleware
app.use(bodyParser.json());
app.use(cors());

// Root route (important for Vercel)
app.get('/', (req, res) => {
    res.send('Backend is working! 🚀');
});

app.get('/ping', (req, res) => {
    res.send('PONG');
});

// Routes
app.use('/auth', AuthRouter);
app.use('/products', ProductRouter);
app.use('/expenses', ensureAuthenticated, ExpenseRouter);

// ❌ Do not use app.listen() on Vercel
// ✅ Instead, export the app
module.exports = app;
