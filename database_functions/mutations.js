const BookModel = require('../models/BookModel.js')
const BookQuestionModel = require('../models/BookQuestionModel.js')
const BookQuestionAnswerModel = require('../models/BookQuestionAnswerModel.js')
const CollectionModel = require('../models/CollectionModel.js')

async function newBook ( title, description, category, image ) {
	const newBook = await BookModel.create({
		title, description, category, image, create: Date.now()
	})

	return 1;
}

async function askQuestion ( bookId, question_title, question_info ) {
	
}