// import { onRequest } from 'firebase-functions/v2/https'
// import { logger } from 'firebase-functions/v1'
const serviceAccount = require('./serviceAccount.json')
const admin = require('firebase-admin')
const functions = require('firebase-functions')
const express = require('express')
const cors = require('cors')
const dotenv = require('dotenv')

const app = express()

//Express body parser
app.use(express.json())
//CORS
app.use(
	cors({
		origin: true,
	})
)
app.use((req, res, next) => {
	res.setHeader('Access-Control-Allow-Origin', '*')
	next()
})
//Firebase credentials
admin.initializeApp({
	credential: admin.credential.cert(serviceAccount),
})
//api routes
app.get('/', (req, res) => {
	res.send('Hello, From the server')
})
const userRoute = require('./routes/userRoute')
app.use('/api/users', userRoute)
exports.api = functions.https.onRequest(app)
