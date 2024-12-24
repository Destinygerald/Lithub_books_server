const { Schema, model } = require('model') 

const BookQuestionSchema = new Schema({
	book_id: {
		type: Schema.Types.ObjectId,
		ref: 'Book'
	},
	question_title: String,
	question_info: String,
	created: Date,
	approval: {
		type: Number,
		default: 0
	},
	disapproval: {
		type: Number,
		default: 0
	},
	author: String,
	answers_no: {
		type: Number,
		default: 0
	}
})

const BookQuestionModel = model('Question', BookQuestionSchema)

module.exports = BookQuestionModel