import { TODO } from '@/types'

type TAction = {
	type: 'SET_USER' | 'GET_USER'
}
function userReducers(state = null, action: TAction) {
	switch (action.type) {
		case 'GET_USER':
			return state
		case 'SET_USER':
			return state

		default:
			return state
	}
}

export { userReducers }
