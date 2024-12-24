const { Schema, model } = require('model')

const BookSchema = new Schema({
	title: String,
	description: String,
	category: String,
	image: String,
	created: Date,
	views: {
		type: Number,
		default: 0
	}	
})

const BookModel = model('Book', BookSchema)

module.exports = BookSchema