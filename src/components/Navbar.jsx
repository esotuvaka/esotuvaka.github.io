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
			<div className="fixed z-20 flex w-full items-center justify-between bg-white px-12 py-3 shadow-md shadow-neutral-300 md:py-6 lg:px-[15%]">
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

				<ul className="hidden gap-8 md:flex">
					<li className="navBtn">
						<Link to="home" smooth={true} duration={500}>
							<h2>Home</h2>
						</Link>
					</li>
					<li className="navBtn">
						<Link to="projects" smooth={true} duration={500} offset={-80}>
							<h2>Projects</h2>
						</Link>
					</li>
					<li className="navBtn">
						<Link to="about" smooth={true} duration={500} offset={-80}>
							<h2>About</h2>
						</Link>
					</li>
					<button className="-mt-0 rounded-sm  px-4 text-black shadow-md shadow-neutral-600 ring-2 ring-black transition-all duration-500 hover:bg-teal-800 hover:text-white hover:shadow-lg hover:shadow-neutral-600 hover:ring-teal-800">
						<Link to="contact" smooth={true} duration={500} width={121}>
							<h2>Contact</h2>
						</Link>
					</button>
				</ul>

				{/*HAMBURGER */}
				<div
					onClick={handleClick}
					className="z-30 flex items-center hover:cursor-pointer md:hidden"
				>
					{!nav ? <FaBars /> : <FaTimes className="text-white" />}
				</div>

				{/* MOBILE MENU */}
				<ul
					className={
						!nav
							? 'hidden'
							: ' absolute top-0 left-0 z-20 flex h-screen w-full flex-col items-center justify-center bg-teal-900 text-white'
					}
				>
					<li className="cursor-pointer py-6 text-4xl">
						<Link onClick={handleClick} to="home" smooth={true} duration={500}>
							Home
						</Link>
					</li>
					<li className="cursor-pointer py-6 text-4xl">
						<Link
							onClick={handleClick}
							to="projects"
							smooth={true}
							duration={500}
						>
							Projects
						</Link>
					</li>
					<li className="cursor-pointer py-6 text-4xl">
						<Link onClick={handleClick} to="about" smooth={true} duration={500}>
							About
						</Link>
					</li>

					<li className="cursor-pointer py-6 text-4xl">
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
				<div className="fixed top-[35%] left-0 hidden flex-col lg:flex">
					<ul>
						<li className="ml-[-110px] flex   h-[60px] w-[170px] items-center justify-between bg-blue-500 px-4 duration-500 hover:ml-[0px]">
							<a
								className="flex h-[60px] w-[170px] items-center justify-between  text-gray-300  "
								href="https://linkedin.com/in/eric-otuvaka"
								target="_blank"
								rel="noreferrer"
							>
								Linkedin
								<FaLinkedin size={30} />
							</a>
						</li>
						<li className=" ml-[-110px] flex h-[60px] w-[170px] items-center justify-between bg-[#333] px-4 duration-500 hover:ml-[0px]">
							<a
								className="flex h-[60px] w-[170px] items-center justify-between   text-gray-300  "
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
								className="ml-[-110px] flex h-[60px] w-[170px] cursor-pointer items-center justify-between bg-[#2c9780] px-4 text-gray-300 duration-500 hover:ml-[0px]"
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
