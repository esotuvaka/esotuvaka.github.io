import React, { useState } from 'react';
import { FaBars, FaTimes, FaGithub, FaLinkedin } from 'react-icons/fa';
import { HiOutlineMail } from 'react-icons/hi';
import Logo from '../assets/Esotuvaka-Logo.png';
import { Link } from 'react-scroll';

const Navbar = () => {
	const [nav, setNav] = useState(false);
	const handleClick = () => setNav(!nav);

	return (
		<>
			<div className="fixed w-full text-2xl flex justify-between items-center px-12 lg:px-[15%] py-3 md:py-6 bg-white text-neutral-700 shadow-sm ">
				<div>
					<Link to="home" smooth={true} duration={500}>
						<img
							className="hover:cursor-pointer"
							src={Logo}
							alt="Eric Otuvaka Logo"
							style={{ width: '50px' }}
						></img>
					</Link>
				</div>

				<ul className="hidden md:flex gap-8">
					<li className="hover:cursor-pointer border border-transparent hover:border-b-black text-neutral-500 hover:text-black transition-all duration-300">
						<Link to="home" smooth={true} duration={500}>
							Home
						</Link>
					</li>
					<li className="hover:cursor-pointer border border-transparent hover:border-b-black text-neutral-500 hover:text-black transition-all duration-300">
						<Link to="projects" smooth={true} duration={500} offset={-80}>
							Projects
						</Link>
					</li>
					<li className="hover:cursor-pointer border border-transparent hover:border-b-black text-neutral-500 hover:text-black transition-all duration-300">
						<Link to="about" smooth={true} duration={500}>
							About
						</Link>
					</li>
					<button className="hover:cursor-pointer text-white -mt-1 bg-teal-800 px-3 py-1 rounded-md font-semibold">
						<Link to="contact" smooth={true} duration={500} width={121}>
							Contact
						</Link>
					</button>
				</ul>

				{/*HAMBURGER */}
				<div
					onClick={handleClick}
					className="md:hidden items-center flex z-30 hover:cursor-pointer"
				>
					{!nav ? <FaBars /> : <FaTimes />}
				</div>

				{/* MOBILE MENU */}
				<ul
					className={
						!nav
							? 'hidden'
							: ' absolute top-0 left-0 w-full h-screen bg-teal-900 flex flex-col justify-center items-center text-white z-20'
					}
				>
					<li className="py-6 text-4xl cursor-pointer">
						<Link onClick={handleClick} to="home" smooth={true} duration={500}>
							Home
						</Link>
					</li>
					<li className="py-6 text-4xl cursor-pointer">
						<Link
							onClick={handleClick}
							to="projects"
							smooth={true}
							duration={500}
						>
							Projects
						</Link>
					</li>
					<li className="py-6 text-4xl cursor-pointer">
						<Link onClick={handleClick} to="about" smooth={true} duration={500}>
							About
						</Link>
					</li>

					<li className="py-6 text-4xl cursor-pointer">
						<Link
							onClick={handleClick}
							to="contact"
							smooth={true}
							duration={500}
						>
							Contact
						</Link>
					</li>
				</ul>

				{/*SOCIAL MEDIA ICONS */}
				<div className="hidden lg:flex fixed flex-col top-[35%] left-0">
					<ul>
						<li className="w-[170px] h-[60px]   px-4 flex justify-between items-center ml-[-110px] hover:ml-[0px] duration-500 bg-blue-500">
							<a
								className="w-[170px] h-[60px] flex justify-between items-center  text-gray-300  "
								href="https://linkedin.com/in/eric-otuvaka"
								target="_blank"
								rel="noreferrer"
							>
								Linkedin
								<FaLinkedin size={30} />
							</a>
						</li>
						<li className=" w-[170px] h-[60px] px-4 flex justify-between items-center ml-[-110px] hover:ml-[0px] duration-500 bg-[#333]">
							<a
								className="w-[170px] h-[60px] flex justify-between items-center   text-gray-300  "
								href="https://github.com/esotuvaka"
								target="_blank"
								rel="noreferrer"
							>
								Github
								<FaGithub size={30} />
							</a>
						</li>
						<li>
							<Link
								to="contact"
								smooth={true}
								duration={500}
								className="cursor-pointer w-[170px] px-4 h-[60px] flex justify-between items-center ml-[-110px] hover:ml-[0px] duration-500 bg-[#2c9780] text-gray-300"
							>
								Email
								<HiOutlineMail size={30} />
							</Link>
						</li>
					</ul>
				</div>
			</div>
		</>
	);
};

export default Navbar;
