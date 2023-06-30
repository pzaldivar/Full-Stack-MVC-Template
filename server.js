//Declare Variables
const express = require("express")
const app = express()
const PORT = 2000
const mongoose = require("mongoose")

//Import functions/routes
const connectDB = require("./config/database")
const homeRoutes = require("./routes/home")
const editRoutes = require('./routes/edit')

require('dotenv').config({ path: './config/.env' })

//Connect to Database
connectDB()


//Set Middleware
app.set("view engine", "ejs")
app.use(express.static("public"))
app.use(express.urlencoded({ extended: true }))

//Set Routes
app.use('/edit', editRoutes)
app.use('/', homeRoutes)

//Start Server
app.listen(PORT, () => console.log(`Server running on port ${PORT}`))