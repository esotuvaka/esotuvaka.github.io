import React, { useState, useRef } from 'react';
import { gsap } from 'gsap';
import { FaBars, FaTimes } from 'react-icons/fa';
import Logo from '../assets/Esotuvaka-Logo.png';
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
			<div
				ref={(el) => (navAnim = el)}
				className="fixed z-20 w-full flex-row bg-white py-4 px-2 sm:px-0"
			>
				<div className="mx-auto flex max-w-xs flex-row justify-between sm:max-w-xl md:max-w-2xl lg:max-w-4xl xl:max-w-6xl 2xl:max-w-[1520px]">
					<div>
						<Link to="home" smooth={true} duration={500}>
							<img
								className="w-[50px] transition-all duration-500 hover:scale-105 hover:cursor-pointer 2xl:w-[100px]"
								src={Logo}
								alt="Eric Otuvaka Logo"
							></img>
						</Link>
					</div>

					<ul className="hidden gap-8 md:flex md:items-center">
						<li className="navBtn">
							<Link to="home" smooth={true} duration={500}>
								<h2>Home</h2>
							</Link>
						</li>
						<li className="navBtn">
							<Link to="projects" smooth={true} duration={500} offset={-120}>
								<h2>Projects</h2>
							</Link>
						</li>
						<li className="navBtn">
							<Link to="about" smooth={true} duration={500} offset={-200}>
								<h2>About</h2>
							</Link>
						</li>
						<button className="-mt-0 rounded-sm px-4  text-black shadow-md shadow-neutral-600 ring-2 ring-black transition-all duration-500 hover:bg-teal-800 hover:text-white hover:shadow-lg hover:shadow-neutral-600 hover:ring-teal-800 2xl:text-4xl">
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
						{!nav ? <FaBars /> : <FaTimes className="text-black" />}
					</div>

					{/* MOBILE MENU */}
					<ul
						className={
							!nav
								? 'hidden'
								: ' absolute top-0 left-0 z-20 flex h-screen w-full flex-col items-center justify-center bg-white text-black'
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
								to="contact"
								smooth={true}
								duration={500}
							>
								Contact
							</Link>
						</li>
					</ul>
				</div>
			</div>
		</>
	);
};

export default Navbar;
