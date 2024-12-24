

async function asyncWrapper (func) {
	return (req, res, next) => func(req, res, next).catch(next); 
}

async function errorHandler (err, req, res, next) {
	res.status(500).json({
		status: 'Failed',
		message: err.message
	})
}

module.exports = {
	asyncWrapper,
	errorHandler
}