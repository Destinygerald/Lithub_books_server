const express = require('express')
const cors = require('cors')
const BookRoute = require('./routes/BookRoute.js')
const { errorHandler } = require('../helpers/middleware.js')

const app = express()

app.use(express.json())
app.use(cors({
	origin: '*',
	credentials: true	
}))

app.use('/book', BookRoute)
app.use(errorHandler)

module.exports = app