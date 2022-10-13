import React, { useRef, useEffect } from 'react';
import { gsap, Power4 } from 'gsap';
import Sackboy from '../assets/1967640-sackboy_happy.webp';

const About = () => {
	let aboutSectionTitle = useRef();
	let aboutRight = useRef();
	let aboutLeft = useRef();

	useEffect(() => {
		gsap.fromTo(
			aboutSectionTitle,
			{ clipPath: 'polygon(0% 100%, 100% 100%, 100% 100%, 0% 100%)', y: 50 },
			{
				scrollTrigger: {
					trigger: aboutSectionTitle,
				},
				clipPath: 'polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)',
				ease: Power4.easeOut,
				delay: 0.5,
				y: 0,
				duration: 1,
			}
		);
		gsap.fromTo(
			aboutRight,
			{ opacity: 0 },
			{
				scrollTrigger: {
					trigger: aboutRight,
				},
				opacity: 1,
				duration: 1,
				delay: 0.5,
				ease: Power4.easeIn,
			}
		);
		gsap.fromTo(
			aboutLeft,
			{ opacity: 0 },
			{
				scrollTrigger: {
					trigger: aboutLeft,
				},
				opacity: 1,
				duration: 1,
				ease: Power4.easeIn,
			}
		);
	});

	return (
		<>
			<div
				name="about"
				className="mx-auto my-[10%] flex h-min   px-2  sm:px-0  "
			>
				<div className="hidden pt-24 sm:pt-0"></div>
				<div className="mx-auto max-w-xs sm:max-w-xl  md:max-w-2xl lg:w-3/4 lg:max-w-4xl xl:max-w-7xl 2xl:max-w-[1520px]">
					<div className="mx-auto items-center justify-center  ">
						<div className="">
							<div
								ref={(el) => (aboutSectionTitle = el)}
								className="grid w-full rounded-t-xl py-4 md:grid-cols-2 md:gap-8"
							>
								<div className="flex justify-center sm:justify-start">
									<h1 className="mx-auto inline-flex text-left text-5xl text-teal-800 sm:text-7xl md:mx-0 lg:text-6xl 2xl:text-8xl">
										- About -
									</h1>
								</div>
								<div></div>
							</div>
							<div
								ref={(el) => (aboutLeft = el)}
								className="grid grid-cols-1 justify-center rounded-xl bg-white sm:grid-cols-5 sm:gap-8 sm:py-4 xl:max-w-6xl 2xl:max-w-[1520px]"
							>
								<div className="flex items-center justify-center font-bold sm:col-span-2">
									<img
										alt="LittleBigPlanet Sackboy!"
										className="mx-auto hidden w-[185px] transition-all duration-500 hover:rotate-1 hover:scale-105 sm:mt-8 sm:block"
										src={Sackboy}
									/>
								</div>
								<div
									ref={(el) => (aboutRight = el)}
									className="col-span-3 font-medium "
								>
									<h3 className="relative mt-4 font-semibold italic text-teal-800  sm:mt-0 sm:text-3xl sm:text-black md:mt-12 lg:text-5xl 2xl:mt-0">
										I just love to build things
									</h3>
									<p className="text-base font-normal sm:mt-3 lg:text-xl 2xl:text-3xl">
										My love for code started when I was 10, with the videogames
										LittleBigPlanet and Minecraft. I didn't know it at the time,
										but I was creating minigames, digital clocks, and more using
										coding concepts like OOP, conditional actions, and more!
									</p>
									<p className="mt-3 text-base font-normal lg:text-xl 2xl:text-3xl">
										Nowadays I'm a self-taught Full Stack Developer in Irvine,
										CA that specializes in building unique digital experiences
										with aesthetic UI/UX, optimized performance, and high
										accessibility / SEO.
									</p>
									<p className="mt-3 text-base font-normal lg:text-xl 2xl:text-3xl">
										I've always had a hunger for knowledge and creation. I'm
										constantly learning, improving, and building.
									</p>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</>
	);
};

export default About;
