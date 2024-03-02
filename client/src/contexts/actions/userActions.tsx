import { TODO } from '@/types'

export function setUserActions(user: TODO) {
	return {
		type: 'SET_USER',
		user: user,
	}
}

export function getUserActions(user: TODO) {
	return {
		type: 'GET_USER',
		user: user,
	}
}
