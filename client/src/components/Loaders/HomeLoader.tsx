import React from 'react'
import '@/styles/Loader.css'

type Props = {}

export default function HomeLoader() {
	return (
		<div className="flex items-center justify-center container ">
			<div className="wrapper">
				<div className="box-wrap">
					<div className="box one"></div>
					<div className="box two"></div>
					<div className="box three"></div>
					<div className="box four"></div>
					<div className="box five"></div>
					<div className="box six"></div>
				</div>
			</div>
		</div>
	)
}
