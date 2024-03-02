import { combineReducers } from 'redux'
import { userReducers } from './userReducers'

const xReducer = combineReducers({
	user: userReducers,
})

export default xReducer
