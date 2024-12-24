const BookModel = require('../models/BookModel.js')
const BookQuestionModel = require('../models/BookQuestionModel.js')
const BookQuestionAnswerModel = require('../models/BookQuestionAnswerModel.js')
const CollectionModel = require('../models/CollectionModel.js')

async function queryForAllBooks () {
	const allBooks = await BookModel.find()

	return allBooks
}


async function queryForBookWithId (id) {
	const bookSearch = await BookModel.find({ _id: id })

	if (!bookSearch) {
		return 0;
	}

	return bookSearch
}

async function queryForBookWithTitle ( title ) {
	// Search for book with title similar as the "title" 
	const bookSearch = await BookModel.find({
		title: { $regex: '.*' + title + '.*' }
	})

	if (!bookSearch) {
		return 0;
	}

	return bookSearch
}

async function queryForBookWithCategory ( category ) {
	const bookSearch = await BookModel.find({
		category: { $regex: '.*' + category + '.*' }
	})

	if (!bookSearch) {
		return 0
	};

	return bookSearch
}


async function getCollections ( ) {
	const collections = await CollectionModel.find()

	return collections
}

async function getCollectionByName (name) {
	const collectionSearch = await CollectionModel.find({
		name: { $regex: '.*' + name + '.*' }
	})

	if (!collectionSearch) {
		return 0
	};

	return collectionSearch
}

module.exports = {
	queryForAllBooks,
	queryForBookWithId,
	queryForBookWithTitle,
	queryForBookWithCategory,
	getCollections,
	getCollectionByName
}