import React, { useState } from 'react';
import {
	FaBars,
	FaTimes,
	FaGithub,
	FaLinkedin,
	FaFacebook,
} from 'react-icons/fa';
import { HiOutlineMail } from 'react-icons/hi';
import { BsFillPersonLinesFill } from 'react-icons/bs';
import Logo from '../assets/Esotuvaka Logo.png';

const Navbar = () => {
	const [nav, setNav] = useState(false);
	const handleClick = () => setNav(!nav);

	return (
		<div className="fixed w-full text-2xl flex justify-between items-center p-12 bg-[#0a192f] text-neutral-300">
			<div>
				<img
					src={Logo}
					alt="Eric Otuvaka Logo"
					style={{ width: '100px' }}
				></img>
			</div>

			<ul className="hidden md:flex">
				<li>Home</li>
				<li>Work</li>
				<li>Skills</li>
				<li>Contact</li>
			</ul>

			{/*HAMBURGER */}
			<div
				onClick={handleClick}
				className="md:hidden z-10 hover:cursor-pointer"
			>
				{!nav ? <FaBars /> : <FaTimes />}
			</div>

			{/* MOBILE MENU */}

			<ul
				className={
					!nav
						? 'hidden'
						: ' absolute top-0 left-0 w-full h-screen bg-[#0a192f] flex flex-col justify-center items-center'
				}
			>
				<li className="py-6 text-4xl">Home</li>
				<li className="py-6 text-4xl">Work</li>
				<li className="py-6 text-4xl">Skills</li>
				<li className="py-6 text-4xl">Contact</li>
			</ul>

			{/*SOCIAL MEDIA ICONS */}
			<div className="hidden lg:flex fixed flex-col top-[35%] left-0">
				<ul>
					<li className=" w-[170px] h-[60px] px-4 flex justify-between items-center ml-[-110px] hover:ml-[0px] duration-500 bg-blue-500">
						<a
							className="flex justify-between items-center w-full text-gray-300  "
							href="/"
						>
							Linkedin
							<FaLinkedin size={30} />
						</a>
					</li>
					<li className=" w-[170px] h-[60px] px-4 flex justify-between items-center ml-[-110px] hover:ml-[0px] duration-500 bg-[#333]">
						<a
							className="flex justify-between items-center w-full text-gray-300  "
							href="/"
						>
							Github
							<FaGithub size={30} />
						</a>
					</li>
					<li className=" w-[170px] h-[60px] px-4 flex justify-between items-center ml-[-110px] hover:ml-[0px] duration-500 bg-[#2c9780]">
						<a
							className="flex justify-between items-center w-full text-gray-300  "
							href="/"
						>
							Email
							<HiOutlineMail size={30} />
						</a>
					</li>
					<li className=" w-[170px] h-[60px] px-4 flex justify-between items-center ml-[-110px] hover:ml-[0px] duration-500 bg-[#565f69]">
						<a
							className="flex justify-between items-center w-full text-gray-300  "
							href="/"
						>
							Resume
							<BsFillPersonLinesFill size={30} />
						</a>
					</li>
				</ul>
			</div>
		</div>
	);
};

export default Navbar;
