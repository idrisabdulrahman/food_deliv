import { TODO } from '@/types'
import create from 'zustand'

type TState = { user: null | TODO }
type TAction = {
	type: string
	// payload: TState
}
const useStore = create((set) => ({
	user: null,
	setUser: (user: TODO) => set((state: TState) => ({ user: user })),
	getUser: (user: TODO) => set((state: TState) => ({ user: user })),
}))

export default useStore
