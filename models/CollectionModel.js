const { Schema, model } = require('mongoose')

const CollectionSchema = new Schema({
	name: String,
	author: String,
	books: [
		{
			type: Schema.Types.ObjectId,
			ref: 'Book'
		}
	]
})

const CollectionModel = model('Collection', CollectionSchema)

module.exports = CollectionModel