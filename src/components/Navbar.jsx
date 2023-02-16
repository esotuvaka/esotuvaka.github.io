import React, { useState, useRef } from 'react';
import { gsap } from 'gsap';
import { FaBars, FaTimes } from 'react-icons/fa';
import Logo from '../assets/Esotuvaka Logo (4).png';
import { Link } from 'react-scroll';
import { useEffect } from 'react';

const Navbar = () => {
	const [nav, setNav] = useState(false);
	const handleClick = () => setNav(!nav);

	let navAnim = useRef(null);

	useEffect(() => {
		gsap.fromTo(
			navAnim,
			{ opacity: 0, y: -100 },
			{ opacity: 1, y: 0, duration: 0.8 }
		);
	}, []);

	return (
		<>
			<header
				ref={(el) => (navAnim = el)}
				className="fixed z-20 w-full flex-row bg-gradient-to-t from-transparent to-neutral-700 py-4 px-2 sm:px-0 2xl:py-4"
			>
				<div className="mx-auto flex max-w-xs flex-row justify-between sm:max-w-xl md:max-w-2xl lg:w-3/4 lg:max-w-4xl xl:max-w-6xl 2xl:max-w-[1520px]">
					<div>
						<Link to="home" smooth={true} duration={500}>
							<img
								src={Logo}
								alt="Eric Otuvaka's Logo"
								className="h-20 cursor-pointer p-1"
							/>
						</Link>
					</div>

					<ul className="hidden gap-8 lg:flex lg:items-center">
						<li className="navBtn">
							<Link to="home" smooth={true} duration={500}>
								<h2>Home</h2>
							</Link>
						</li>
						<li className="navBtn">
							<Link to="about" smooth={true} duration={500} offset={-200}>
								<h2>About</h2>
							</Link>
						</li>
						<li className="navBtn">
							<Link to="experience" smooth={true} duration={500} offset={-120}>
								<h2>Experience</h2>
							</Link>
						</li>
						<li className="navBtn">
							<Link to="projects" smooth={true} duration={500} offset={-120}>
								<h2>Projects</h2>
							</Link>
						</li>

						<button className="-mt-0 rounded-sm px-4 py-1 text-white shadow-md shadow-transparent ring-2 ring-white transition-all duration-300 hover:bg-neutral-800 hover:text-white hover:shadow-lg hover:shadow-neutral-400 hover:ring-neutral-800 2xl:text-2xl">
							<Link to="contact" smooth={true} duration={500} width={121}>
								<h2>Contact</h2>
							</Link>
						</button>
					</ul>

					{/*HAMBURGER */}
					<div
						onClick={handleClick}
						className="z-30 flex items-center hover:cursor-pointer lg:hidden"
					>
						{!nav ? (
							<FaBars className="text-white" />
						) : (
							<FaTimes className="text-white" />
						)}
					</div>

					{/* MOBILE MENU */}
					<ul
						className={
							!nav
								? 'hidden'
								: ' absolute top-0 left-0 z-20 flex h-screen w-full flex-col items-center justify-center bg-gradient-to-b from-neutral-700 to-black text-white'
						}
					>
						<li className="cursor-pointer py-6 text-4xl">
							<Link
								onClick={handleClick}
								to="home"
								smooth={true}
								duration={500}
							>
								Home
							</Link>
						</li>
						<li className="cursor-pointer py-6 text-4xl">
							<Link
								onClick={handleClick}
								to="about"
								smooth={true}
								duration={500}
								offset={-180}
							>
								About
							</Link>
						</li>
						<li className="cursor-pointer py-6 text-4xl">
							<Link
								onClick={handleClick}
								to="projects"
								smooth={true}
								duration={500}
								offset={-180}
							>
								Projects
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
				</div>
			</header>
		</>
	);
};

export default Navbar;
