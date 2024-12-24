const {
	queryForAllBooks,
	queryForBookWithId,
	queryForBookWithTitle,
	queryForBookWithCategory
} = require('../database_functions/queries.js')

async function getAllBooks (req, res) {
	const result = queryForAllBooks()

	return res.status(200).json({
		status: 'Success',
		data: result
	})
}


async function getBook (req, res) {
	const title = req.params.id

	const result = queryForBookWithId()

	if (result == 0) {
		return res.status(404).json({
			status: 'Not Found',
			message: 'Invalid book id'
		})
	}

	return res.status(200).json({
		status: 'Success',
		data: result
	})
}

async function bookSearch (req, res) {

	const { search } = req.query

	const result = queryForBookWithTitle(search)

	if ( result == 0 ) {
		return res.status(404).json({
			status: 'Not Found',
			message: 'No book matches your search'
		})
	}

	return res.status(200).json({
		status: 'Success',
		data: result
	})	
}

async function addBook (req, res) {}

module.exports = {
	getAllBooks,
	getBook,
	bookSearch,
	addBook
}