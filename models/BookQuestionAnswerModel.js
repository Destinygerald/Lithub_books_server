const { Schema, model } = require('model')

const BookQuestionAnswerSchema = new Schema({
	question_id: {
		type: Schema.Types.ObjectId,
		ref: 'Question'
	},
	answer: String,
	approval: {
		type: Number,
		default: 0
	},
	disapproval: {
		type: Number,
		default: 0
	}
})

const BookQuestionAnswerModel = model('Answer', BookQuestionAnswerSchema)

module.exports = BookQuestionAnswerModel