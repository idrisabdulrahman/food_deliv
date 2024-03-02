import React, { useEffect, useState } from 'react'
import { LoginBg, Logo, blkChkBG } from '@/assets'
import { FaEnvelope, FaLock } from 'react-icons/fa'
import { FcGoogle } from 'react-icons/fc'
import { motion } from 'framer-motion'
import { buttonClick } from '@/animations'
import { LoginInput } from '@/components/custom/LoginInput'
import {
	getAuth,
	signInWithPopup,
	GoogleAuthProvider,
	createUserWithEmailAndPassword,
	signInWithEmailAndPassword,
} from 'firebase/auth'
import { app } from '@/config/firebase.config'
import { useNavigate } from 'react-router-dom'
import { jwtValidator } from '@/api'
import { useDispatch, useSelector } from 'react-redux'
import { setUserActions } from '@/contexts/actions/userActions'
import { toast } from 'sonner'
// import useStore from '@/contexts/store/store'
function Signin() {
	const [inputFunc, setInputFunc] = useState('')
	const [isSignup, setIsSignup] = useState(false)
	const [confirmUserPassword, setConfirmUserPassword] = useState('')
	const [userPassword, setUserPassword] = useState('')
	const [userMail, setUserMail] = useState('')

	const fireBaseAuth = getAuth(app)
	const providerAuth = new GoogleAuthProvider()
	const navigate = useNavigate()
	const dispatch = useDispatch()
	const user = useSelector((state: any) => state.user)
	useEffect(() => {
		if (user) {
			navigate('/', { replace: true })
		}
	}, [])
	async function SignInWithGoogle() {
		await signInWithPopup(fireBaseAuth, providerAuth).then((user) => {
			fireBaseAuth.onAuthStateChanged((credential) => {
				if (credential) {
					credential.getIdToken().then((token) => {
						jwtValidator(token).then((data) => {
							// console.log(data)
							console.log(token)
							console.log(data)
							toast.success(`Welcome Back ${data?.data?.name}`)
							dispatch(setUserActions(data))
						})
						navigate('/', { replace: true })
					})
				} else {
					toast.error('Something went wrong')
				}
			})
		})
	}

	async function signUpWithEmailPassword() {
		if (userMail === '' || userPassword === '' || confirmUserPassword === '') {
			toast.error('Please fill in all the required fields')
		} else {
			if (userPassword === confirmUserPassword) {
				setUserMail('')
				setUserPassword('')
				setConfirmUserPassword('')
				await createUserWithEmailAndPassword(fireBaseAuth, userMail, userPassword).then(
					(userCredential) => {
						fireBaseAuth.onAuthStateChanged((credential) => {
							if (credential) {
								credential.getIdToken().then((token) => {
									jwtValidator(token).then((data) => {
										toast.success(`Welcome on board ${data?.data?.name}`)
										dispatch(setUserActions(data))
									})
								})
							} else {
								toast.error("Password dosen't match")
							}
						})
					}
				)
			}
			// else {
			// 	//msg
			// }
		}
	}

	async function signInWithEmailPassword() {
		if (userMail === '' || userPassword === '') {
			toast.error('Please fill in all the required fields')
		}
		await signInWithEmailAndPassword(fireBaseAuth, userMail, userPassword).then(
			(userCredential) => {
				fireBaseAuth.onAuthStateChanged((credential) => {
					if (credential) {
						credential.getIdToken().then((token) => {
							jwtValidator(token).then((data) => {
								toast.success(`Welcome back ${data?.data?.name}`)
								dispatch(setUserActions(data))
							})
							navigate('/', { replace: true })
						})
					}
				})
			}
		)
	}

	return (
		<div className="w-screen h-screen relative  overflow-hidden flex">
			<img
				src={LoginBg}
				loading="lazy"
				alt="Login_img"
				className="w-full h-full object-cover absolute top-0 left-0"
			/>
			{/** Content Box */}
			<div className="flex flex-col items-center  w-[80%] md:w-508 h-full z-10 backdrop-blur-md p-3 px-5 py-15">
				{/**Top logo */}
				<div className="flex items-center justify-start  gap-4 w-full">
					<img src={Logo} alt="" className="w-8" />
					<p className="text-2xl font-semibold text-headingColor">Pecky</p>
					{/* <p>Chomp</p> */}
				</div>
				{/***Welcome */}
				<p className="text-4xl font-bold text-black mt-[32px]">
					{isSignup ? 'Welcome' : 'Welcome Back'}
				</p>
				<p className="text-xl  text-textColor mt-4">
					{isSignup ? 'Sign up' : 'Sign in'} with the following{' '}
				</p>
				{/**Input */}
				<div className=" flex  flex-col items-center justify-center gap-6 w-full px-4 md:px-12 py-4  ">
					<LoginInput
						Icon={FaEnvelope}
						placeholder="Email here"
						inputStateFunction={setUserMail}
						inputState={userMail}
						type={'email'}
						isSignup={isSignup}
					/>
					<LoginInput
						Icon={FaLock}
						placeholder="Password here"
						inputStateFunction={setUserPassword}
						inputState={userPassword}
						type={'password'}
						isSignup={isSignup}
					/>
					{isSignup && (
						<LoginInput
							Icon={FaLock}
							placeholder="Confirm Password "
							inputStateFunction={setConfirmUserPassword}
							inputState={confirmUserPassword}
							type={'password'}
							isSignup={isSignup}
						/>
					)}
					{!isSignup ? (
						<p>
							Dont have an account: {'      '}
							<motion.button
								{...buttonClick}
								onClick={() => setIsSignup(true)}
								className="bg-transparent text-red-800 cursor-pointer underline"
							>
								Sign Up
							</motion.button>
						</p>
					) : (
						<p>
							Already have an account:{' '}
							<motion.button
								{...buttonClick}
								onClick={() => setIsSignup(false)}
								className="bg-transparent text-red-800 cursor-pointer underline"
							>
								Sign in
							</motion.button>
						</p>
					)}
					{isSignup ? (
						<motion.button
							{...buttonClick}
							onClick={signUpWithEmailPassword}
							className="flex items-center justify-start px-20 py-2 bg-red-800 text-white hover:bg-red-600 backdrop-filter cursor-pointer rounded-3xl gap-4"
						>
							Sign Up
						</motion.button>
					) : (
						<motion.button
							{...buttonClick}
							className="flex items-center justify-start px-20 py-2 bg-red-800 text-white hover:bg-red-600 backdrop-filter cursor-pointer rounded-3xl gap-4"
						>
							Sign In
						</motion.button>
					)}

					<div className="flex items-center justify-center gap-16">
						<div className="w-32 h-[1px] rounded-md bg-white "></div>
						<p className="text-white">or</p>
						<div className="w-32 h-[1px] rounded-md bg-white "></div>
					</div>

					{isSignup ? (
						<motion.div
							className="flex items-center justify-center px-20 py-2 bglightOverlay backdrop-blur-sm hover:backdrop-blur-xl border gap-4 cursor-pointer rounded-3xl "
							{...buttonClick}
						>
							<FcGoogle className="text-3xl" />
							<p className=" text-base text-white">Sign Up using Google</p>
						</motion.div>
					) : (
						<motion.div
							className="flex items-center justify-center px-20 py-2 bglightOverlay backdrop-blur-sm hover:backdrop-blur-xl border gap-4 cursor-pointer rounded-3xl "
							{...buttonClick}
							onClick={SignInWithGoogle}
						>
							<FcGoogle className="text-3xl" />
							<p className="  text-base text-white">Continue with Google</p>
						</motion.div>
					)}
				</div>
			</div>
			//{' '}
		</div>
	)
}

export default Signin
