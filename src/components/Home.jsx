import React, { useRef, useEffect } from 'react';
import { gsap, Power4 } from 'gsap';
import { Link } from 'react-scroll';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import { HiOutlineMail } from 'react-icons/hi';

const Home = () => {
	let heroDev = useRef(null);
	let heroName = useRef(null);
	let heroDesc = useRef(null);
	let heroButton = useRef(null);
	let heroCircle1 = useRef(null);
	let heroCircle2 = useRef(null);
	let heroCircle3 = useRef(null);

	useEffect(() => {
		gsap.fromTo(
			[heroDev, heroName, heroDesc],
			{
				clipPath: 'polygon(0% 100%, 100% 100%, 100% 100%, 0% 100%)',
				y: 50,
			},
			{
				clipPath: 'polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)',
				stagger: 0.2,
				duration: 1,
				ease: Power4.easeOut,
				y: 0,
			}
		);
		gsap.fromTo(
			[heroCircle1, heroCircle2, heroCircle3],
			{ opacity: 0 },
			{ opacity: 1, duration: 2, stagger: 0.8, delay: 1.2 }
		);
		gsap.fromTo(
			heroButton,
			{ opacity: 0 },
			{ opacity: 1, duration: 1, ease: Power4.out, delay: 0.8 }
		);
	}, []);

	return (
		<>
			<div
				name="home"
				className="-z-10 h-screen w-full px-2 sm:px-0"
				data-rate=".4"
				data-direction="vertical"
			>
				<div className="  mx-auto flex h-full max-w-xs flex-col justify-center sm:max-w-xl md:max-w-2xl lg:w-3/4 lg:max-w-4xl xl:max-w-6xl 2xl:max-w-[1520px]">
					<div
						ref={(el) => (heroDev = el)}
						className="z-10 flex rotate-0 text-lg font-semibold text-black sm:text-4xl xl:max-w-[450px]"
					>
						- Frontend Developer -
					</div>
					<h1
						ref={(el) => (heroName = el)}
						className="z-10 flex text-6xl text-teal-800 sm:text-[7rem] xl:max-w-[850px] xl:text-[9rem]"
					>
						Eric Otuvaka
					</h1>

					<p
						ref={(el) => (heroDesc = el)}
						className="z-10 mt-4 max-w-[700] text-base text-black sm:text-2xl sm:font-semibold md:max-w-[400px] 2xl:max-w-full"
					>
						I love problem solving, sharing ideas, and Hawaiian BBQ
					</p>
					<div
						id="hero-circles"
						className="flex justify-between sm:relative sm:mx-auto"
					>
						<div
							id="circle1"
							ref={(el) => (heroCircle1 = el)}
							className="floating flex items-center justify-center overflow-hidden rounded-full border-neutral-200 sm:absolute sm:top-20 sm:right-24 sm:h-64 sm:w-64 sm:border md:right-24 lg:right-80 2xl:right-96"
						>
							<a
								className="z-30 flex h-20 w-20 items-center  justify-center rounded-full bg-blue-200 text-blue-500 transition-all duration-300 hover:scale-105 hover:bg-blue-300"
								href="https://linkedin.com/in/eric-otuvaka"
								target="_blank"
								rel="noreferrer"
							>
								<FaLinkedin size={30} />
							</a>
						</div>
						<div
							id="circle2"
							ref={(el) => (heroCircle2 = el)}
							className="floating2 flex items-center justify-center overflow-hidden rounded-full border-neutral-200 sm:absolute sm:left-12 sm:top-0 sm:h-96 sm:w-96 sm:border md:left-24 lg:left-36"
						>
							<a
								className="z-30 flex h-20 w-20 items-center justify-center rounded-full bg-neutral-300 text-neutral-800 transition-all duration-300 hover:scale-105 hover:bg-neutral-400"
								href="https://github.com/esotuvaka"
								target="_blank"
								rel="noreferrer"
							>
								<FaGithub size={30} />
							</a>
						</div>
						<div
							id="circle3"
							ref={(el) => (heroCircle3 = el)}
							className="floating3 2xl-[-70vh] flex items-center justify-center overflow-hidden rounded-full border-neutral-200 sm:absolute sm:-left-24 sm:top-[-70vh] sm:h-[40rem] sm:w-[40rem] sm:border xl:top-[-60vh] xl:-left-0"
						>
							<Link
								to="contact"
								smooth={true}
								duration={500}
								className="floating z-30 flex h-20 w-20 items-center justify-center rounded-full bg-teal-500 text-white transition-all duration-300 hover:scale-105 hover:cursor-pointer hover:bg-teal-600"
							>
								<HiOutlineMail size={30} />
							</Link>
						</div>
						<div
							id="circle4"
							className="floating absolute top-0 -z-10 flex h-[18rem] w-[18rem] justify-center overflow-hidden rounded-full border sm:hidden sm:border-transparent md:hidden"
						/>
					</div>
					<div
						className="hidden sm:flex md:gap-4"
						ref={(el) => (heroButton = el)}
					>
						<button className="z-10  my-4 flex items-center justify-center rounded-md border-2 border-black bg-white text-black shadow-md shadow-neutral-400 duration-500 hover:-translate-y-1 hover:border-teal-800 hover:bg-teal-800 hover:text-white hover:shadow-lg hover:shadow-neutral-400">
							<Link
								to="projects"
								smooth={true}
								duration={500}
								offset={-80}
								className="px-6 py-3"
							>
								<h2>View Projects</h2>
							</Link>
						</button>
					</div>
				</div>
			</div>
		</>
	);
};

export default Home;
