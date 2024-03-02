const router = require('express').Router()
const admin = require('firebase-admin')
router.get('/', (req, res) => {
	return res.send('Hello, From the user route')
})
router.get('/jwtVerification', async (req, res) => {
	if (!req.headers.authorization) {
		return res.status(500).send({ msg: 'No token provided' })
	}
	const token = req?.headers?.authorization?.split(' ')[1]
	if (!token) {
		return res.status(500).send({ msg: 'No token provided' })
	}
	console.log('Received Token:', token)
	try {
		const decodedVal = await admin.auth().verifyIdToken(token)
		if (!decodedVal) {
			return res.status(500).send({ success: false, msg: 'Unauthorized' })
		}
		return res
			.status(200)
			.send({ data: decodedVal, success: true, msg: 'Valid token' })
	} catch (error) {
		return res.send({ success: false, msg: `Invalid token : ${error}` })
	}
})

module.exports = router
