const express = require("express")
const morgan = require("morgan")
const bodyParser = require("body-parser")
const cors = require("cors")
const mongoose = require("mongoose")
require("dotenv").config()


// import routes
const inventoryRoutes = require('./routes/inventory')
const shipmentRoutes = require('./routes/shippments')
// const authRoutes = require('./routes/auth')

// app
const app = express()


// db
mongoose.connect(process.env.DATABASE, {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
    .then(() => console.log('DB connected'))
    .catch(err => console.log(err))

// middlewares
app.use(cors())
app.use(morgan('dev'))
app.use(bodyParser.json())


// route middleware
app.use('/api', inventoryRoutes)
app.use('/api', shipmentRoutes)




// port
const port = process.env.PORT || 8000

app.listen(port, () => console.log(`Server is running on port ${port}`))