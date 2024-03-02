import axios, { AxiosResponse } from 'axios'

export const baseURL = 'http://127.0.0.1:5001/food-delev/us-central1/api/'

interface UserData {
	name: string
	picture: string
	iss: string
	aud: string
	auth_time: number
	user_id: string
	sub: string
	iat: number
	exp: number
	email: string
	email_verified: boolean
	firebase: {
		identities: {
			'google.com': string[]
			email: string[]
		}
		sign_in_provider: string
	}
	uid: string
}

// Defines the overall structure of the API response
export interface JwtVerificationResponse {
	data?: UserData // Uses the UserData interface for the 'data' field
	success: boolean
	msg: string
}

export async function jwtValidator(
	token: string
): Promise<JwtVerificationResponse | null> {
	try {
		const res: AxiosResponse<JwtVerificationResponse> = await axios.get(
			`${baseURL}api/users/jwtVerification`,
			{
				headers: { Authorization: `Bearer ${token}` },
			}
		)
		return res?.data
	} catch (error) {
		return null
	}
}
