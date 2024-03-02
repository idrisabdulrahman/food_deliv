import React from 'react'
import { HeroScrollDemo, HeaderHome } from './misc'

type Props = {}

function Home({}: Props) {
	return (
		<div className="w-screen min-h-screen flex items-center justify-center flex-col ">
			<HeaderHome />
			{/* <HeroScrollDemo /> */}
		</div>
	)
}
export default Home
