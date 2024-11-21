const express = require('express');
const cookieParser = require("cookie-parser")
const errorMiddleware = require('./middleware/error')
const app = express();
app.use(express.json());
app.use(cookieParser())


// Routes Import
const product = require('./routes/productRoutes')
app.use("/api/v1",product)

const user = require('./routes/userRoutes')
app.use('/api/v1',user)

const country = require('./routes/countryRoutes')
app.use("/api/v1",country)

const shippAddress = require('./routes/shippingRoutes')
app.use("/api/v1",shippAddress)

// MiddleWare For error
app.use(errorMiddleware)







module.exports = app;