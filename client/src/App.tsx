import * as React from 'react'
import { Route, RouterProvider, Routes, useNavigate } from 'react-router-dom'
import { Home, Signin } from './feature'
import { getAuth } from 'firebase/auth'
import { app } from './config/firebase.config'
import { useState, useEffect } from 'react'
import { jwtValidator } from './api'
import { useDispatch } from 'react-redux'
import { motion } from 'framer-motion'
import { fadeAnimation } from './animations'
import { setUserActions } from './contexts/actions/userActions'
import HomeLoader from './components/Loaders/HomeLoader'
import { Alert } from './components'
import { toast } from 'sonner'

function App() {
	const [isLoading, setIsLoading] = useState(false)
	const fireBaseAuth = getAuth(app)
	const dispatch = useDispatch()

	useEffect(() => {
		setIsLoading(true)
		fireBaseAuth.onAuthStateChanged((credential) => {
			if (credential) {
				credential.getIdToken().then((token) => {
					jwtValidator(token).then((data) => {
						// toast.success('Welcome Back')
						dispatch(setUserActions(data))
					})
				})
			}
			setInterval(() => {
				setIsLoading(false)
			}, 3000)
		})
	}, [])
	return (
		<div className="w-screen min-h-screen h-auto flex flex-col items-center justify-center">
			{isLoading && (
				<motion.div
					{...fadeAnimation}
					className="fixed top-0 left-0 inset-0 z-50 bg-lightOverlay backdrop-blur-md flex items-center justify-center w-full "
				>
					<HomeLoader />
				</motion.div>
			)}
			<Routes>
				<Route path="/*" element={<Home />} />
				<Route path="/signin" element={<Signin />} />
				<Route />
			</Routes>
		</div>
	)
}

export default App
