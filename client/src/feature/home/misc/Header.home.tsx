import React, { useState } from 'react'
import { Avatar, Logo } from '@/assets'
import { ModeToggle } from '@/components/ui/mode-toggle'
import { isActiveStyles, isNotActiveStyles } from '@/utils'
import { NavLink } from 'react-router-dom'
import { FiMenu } from 'react-icons/fi'
import { motion } from 'framer-motion'
import { MdShoppingCart } from 'react-icons/md'
import { buttonClick } from '@/animations'
import { BiSupport } from 'react-icons/bi'
import { useSelector } from 'react-redux'
type Props = {}

export function HeaderHome({}: Props) {
	const user = useSelector((state: any) => state.user)
	const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
	const [isDropdownOpen, setIsDropdownOpen] = useState(false)
	const toggleDropdown = () => {
		setIsDropdownOpen(!isDropdownOpen)
	}
	const toggleMobileMenu = () => {
		setIsMobileMenuOpen(!isMobileMenuOpen)
	}

	return (
		<header className="fixed backdrop-blur-md z-50 top-0 inset-x-0 px-2 md:px-16 py-4 flex items-center justify-between">
			<NavLink to={'/'} className={'flex items-center justify-center gap-4'}>
				<img loading="lazy" src={Logo} alt="" className="w-5" />
				<p className="text-2xl font-semibold text-headingColor dark:text-white">Pecky</p>
			</NavLink>
			<nav className="flex items-center justify-center gap-4 space-x-1">
				<ul className={`hidden md:flex md:flex-row md:items-center md:justify-center md:gap-8`}>
					<NavLink
						className={({ isActive }) => (isActive ? isActiveStyles : isNotActiveStyles)}
						to={'/'}
					>
						Home
					</NavLink>
					<NavLink
						className={({ isActive }) => (isActive ? isActiveStyles : isNotActiveStyles)}
						to={'/menu'}
					>
						Menu
					</NavLink>
					<NavLink
						className={({ isActive }) => (isActive ? isActiveStyles : isNotActiveStyles)}
						to={'/service'}
					>
						Service
					</NavLink>
					<NavLink
						className={({ isActive }) => (isActive ? isActiveStyles : isNotActiveStyles)}
						to={'/contact'}
					>
						Contact
					</NavLink>
					<NavLink
						className={({ isActive }) => (isActive ? isActiveStyles : isNotActiveStyles)}
						to={'/customer-service'}
					>
						<BiSupport />
					</NavLink>
				</ul>
				<div onClick={toggleMobileMenu} className="inline-block md:hidden  ">
					<FiMenu className="text-3xl w-6 h-6 dark:text-white text-gray-800 transition-opacity ease-in-out duration-300" />{' '}
				</div>
				<motion.div {...buttonClick} className="relative cursor-pointer">
					<MdShoppingCart className=" dark:text-white text-2xl text-gray-800" />
					<div className="bg-red-500 w-4 h-4 rounded-full absolute flex items-center justify-center -bottom-0.5 -4 -left-1">
						<p className="text-base  text-txt-primary font-semibold">7</p>
					</div>
				</motion.div>
				{user ? (
					<div className="relative cursor-pointer ">
						<div className="w-12 rounded-full h-12 shadow-md overflow-hidden cursor-pointer  flex items-center justify-center">
							<motion.img
								className="w-full object-cover h-full"
								src={user?.picture ? user?.picture : Avatar}
								whileHover={{ scale: 1.2 }}
								referrerPolicy="no-referrer"
							/>
						</div>
						<motion.div className="px-6 py-4 bg-lightOverlay backdrop-blur-md shadow-md absolute top-12 right-0 flex flex-col gap-4"></motion.div>
					</div>
				) : (
					<>
						<NavLink to="/signin">
							<motion.button
								{...buttonClick}
								className="border border-red-500 text-black dark:text-lighttextGray rounded-md cursor-pointer font-semibold px-4 py-2 shadow-md"
							>
								Login
							</motion.button>
						</NavLink>
					</>
				)}
				<ModeToggle />
				{isMobileMenuOpen && (
					<div className="md:hidden">
						<ul className="absolute top-16 flex duration-400 transition-all ease-out  items-center justify-center flex-col space-y-3 right-0 z-10 dark:bg-gray-900 h-auto  w-full  dark:border-white-50 rounded-lg shadow-2xl py-2">
							<DropdownItem to="/" text="Home" setIsDropdownOpen={setIsDropdownOpen} />
							<DropdownItem to="/menu" text="Menu" setIsDropdownOpen={setIsDropdownOpen} />
							<DropdownItem to="/service" text="Service" setIsDropdownOpen={setIsDropdownOpen} />
							<DropdownItem to="/contact" text="Contact" setIsDropdownOpen={setIsDropdownOpen} />
							<DropdownItem
								to="/customer-service"
								text={<BiSupport size={24} />}
								setIsDropdownOpen={setIsDropdownOpen}
							/>
						</ul>
					</div>
				)}
			</nav>
		</header>
	)
}

const DropdownItem = ({
	to,
	text,
	setIsDropdownOpen,
}: {
	to: string
	text: any
	setIsDropdownOpen: React.Dispatch<React.SetStateAction<boolean>>
}) => {
	const closeDropdown = () => {
		setIsDropdownOpen(false)
	}

	return (
		<li>
			<NavLink
				className={({ isActive }) => (isActive ? isActiveStyles : isNotActiveStyles)}
				to={to}
				onClick={closeDropdown} // Close dropdown on click
			>
				{text}
			</NavLink>
		</li>
	)
}
