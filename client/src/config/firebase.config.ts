import { getApp, getApps, initializeApp } from 'firebase/app'
import { getStorage } from 'firebase/storage'
const firebaseConfig = {
	apiKey: process.env.REACT_APP_FIREBASE_APIKEY,

	authDomain: process.env.REACT_APP_FIREBASE_AUTH_DOMAIN,

	projectId: process.env.REACT_APP_FIREBASE_ID,

	storageBucket: process.env.REACT_APP_FIREBASE_STORAGEBUCKET,

	messagingSenderId: process.env.REACT_APP_FIREBASE_MESSAGESENDER,

	appId: process.env.REACT_APP_FIREBASE_APPID,
}
const app = getApps.length > 0 ? getApp() : initializeApp(firebaseConfig)
const storage = getStorage(app)
export { storage, app }
