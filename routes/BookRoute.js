const express = require('express')
const {
	getAllBooks,
	getBook,
	bookSearch,
	addBook
} = require('../controllers/BookControllers.js')
const { asyncWrapper } = require('../helpers/middleware.js')

const Route = express.Router()

Route.get('/', asyncWrapper(getAllBooks))
Route.post('/new-book', asyncWrapper(addBook))
Route.get('/:id', asyncWrapper(getBook))
Route.get('/search?book', asyncWrapper(bookSearch))

module.exports = Route