export const buttonClick = {
	whileTap: { scale: 0.55, transition: { duration: 0.95 } },
}
export const transition = { type: 'spring', duration: 0.8 }

export const slideAnimation = (direction: 'left' | 'right' | 'up' | 'down') => {
	return {
		initial: {
			x: direction === 'left' ? -100 : direction === 'right' ? 100 : 0,
			y: direction === 'up' ? 100 : direction === 'down' ? -100 : 0,
			opacity: 0,
			transition: { ...transition, delay: 0.85 },
		},
		animate: {
			x: 1,
			y: 0,
			opacity: 1,
			transition: { ...transition, delay: 0 },
		},
		exit: {
			x: direction === 'left' ? -80 : direction === 'right' ? 100 : 0,
			y: direction === 'up' ? 100 : direction === 'down' ? -100 : 0,
			transition: { ...transition, delay: 0.8 },
		},
	}
}

export const fadeAnimation = {
	initial: {
		opacity: 0,
		transition: { ...transition, delay: 0.5 },
	},
	animate: {
		opacity: 1,
		transition: { ...transition, delay: 0 },
	},
	exit: {
		opacity: 0,
		transition: { ...transition, delay: 1.5 },
	},
}

export const headTextAnimation = {
	initial: { x: 100, opacity: 0 },
	animate: { x: 0, opacity: 1 },
	transition: {
		type: 'spring',
		damping: 5,
		stiffness: 40,
		restDelta: 0.001,
		duration: 0.3,
	},
}

export const headContentAnimation = {
	initial: { y: 100, opacity: 0 },
	animate: { y: 0, opacity: 1 },
	transition: {
		type: 'spring',
		damping: 7,
		stiffness: 30,
		restDelta: 0.001,
		duration: 0.6,
		delay: 0.2,
		delayChildren: 0.2,
	},
}

export const headContainerAnimation = {
	initial: { x: -100, opacity: 0, transition: { ...transition, delay: 0.5 } },
	animate: { x: 0, opacity: 1, transition: { ...transition, delay: 0 } },
	exit: { x: -100, opacity: 0, transition: { ...transition, delay: 0 } },
}