import React, { useState } from 'react'
import { IconType } from 'react-icons'
import { Input } from '../ui/input'
import { cn } from '@/libs/utils'
import { motion } from 'framer-motion'
import { fadeAnimation, slideAnimation } from '@/animations'
type LoginInputProps = {
	Icon: IconType
	placeholder: string
	inputState: string
	inputStateFunction: (string: string) => void
	type: React.InputHTMLAttributes<'input'>['type']
	isSignup: boolean | undefined
}

export const LoginInput = ({
	Icon,
	type,
	isSignup,
	inputState,
	inputStateFunction,
	placeholder,
}: LoginInputProps) => {
	const [isFocus, setIsfocus] = useState(false)

	return (
		<motion.div
			{...fadeAnimation}
			className={`flex items-center justify-center gap-4 bg-lightOverlay backdrop-blur-md w-full px-4 py-2 ${
				isFocus ? 'shadow-md shadow-red-400' : 'shadow-none'
			}`}
		>
			<Icon className={cn('text-xl text-black/80')} />

			<Input
				type={type}
				value={inputState}
				placeholder={placeholder}
				className="w-full h-full bg-transparent text-headingColor placeholder:text-black/50 text-lg font-semibold outline-none border-none focus-visible:ring-0"
				onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
					inputStateFunction(e.target.value)
				}}
				onFocus={() => {
					setIsfocus(true)
				}}
				onBlur={() => setIsfocus(false)}
			/>
		</motion.div>
	)
}
