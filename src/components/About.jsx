import React, { useRef, useEffect } from 'react';
import { gsap, Power4 } from 'gsap';

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
			<div className="-mt-20" name="about" />
			<div className="mx-auto my-[10%] flex h-[50vh] px-2 sm:px-0">
				<div className="mx-auto max-w-xs sm:max-w-xl  md:max-w-2xl lg:w-3/4 lg:max-w-4xl xl:max-w-7xl 2xl:max-w-[1520px]">
					<div className="mx-auto items-center justify-center">
						<div className="">
							<div
								ref={(el) => (aboutSectionTitle = el)}
								className="grid w-full rounded-t-xl py-4 md:grid-cols-2 md:gap-8"
							>
								<div className="flex justify-center sm:justify-start">
									<h2 className="mx-auto inline-flex text-left text-5xl text-white sm:text-7xl md:mx-0 lg:text-6xl 2xl:text-7xl">
										- About -
									</h2>
								</div>
								<div></div>
							</div>
							<div
								ref={(el) => (aboutLeft = el)}
								className="grid grid-cols-1 justify-center rounded-xl bg-transparent sm:grid-cols-5 sm:gap-8 sm:py-4 xl:max-w-6xl 2xl:max-w-[1520px]"
							>
								<div
									ref={(el) => (aboutRight = el)}
									className="col-span-3 font-medium "
								>
									<p className="text-base font-normal text-white  lg:text-xl">
										My journey started at the age of 10 when I discovered my
										love for coding through videogames. I began creating my own
										mini-games and digital clocks using concepts like OOP and
										conditional actions.
									</p>
									<p className="mt-3 text-base font-normal text-white lg:text-xl">
										Now, as a self-taught Full Stack Developer, I specialize in
										building unique digital experiences with a focus on
										aesthetic UI/UX, optimized performance, and high SEO. My
										hunger for knowledge and creation is insatiable, and I am
										constantly improving and expanding my skills to stay ahead
										of the curve.
									</p>
									<p className="mt-3 text-base font-normal text-white lg:text-xl">
										Let's build something amazing together!
									</p>
								</div>

								<div className="col-span-2 mt-4 flex flex-col items-center text-white sm:mt-0">
									<img
										align="left"
										alt="Eric's Git hub stats"
										src="https://github-readme-stats.vercel.app/api?username=esotuvaka&show_icons=true&theme=dark"
									/>
									<div className="mt-8 flex w-full flex-wrap justify-center">
										<img
											className="m-1"
											alt="Type Script"
											src="https://img.shields.io/badge/typescript-%23007ACC.svg?style=for-the-badge&logo=typescript&logoColor=white"
										/>
										<img
											className="m-1"
											alt="Java Script"
											src="https://img.shields.io/badge/javascript-%23323330.svg?style=for-the-badge&logo=javascript&logoColor=%23F7DF1E"
										/>
										<img
											className="m-1"
											alt="My S Q L"
											src="https://img.shields.io/badge/mysql-%2300f.svg?style=for-the-badge&logo=mysql&logoColor=white"
										/>
										<img
											className="m-1"
											alt="git"
											src="https://img.shields.io/badge/git-%23F05033.svg?style=for-the-badge&logo=git&logoColor=white"
										/>
										<img
											className="m-1"
											alt="H T M L 5"
											src="https://img.shields.io/badge/html5-%23E34F26.svg?style=for-the-badge&logo=html5&logoColor=white"
										/>
										<img
											className="m-1"
											alt="C S S 3"
											src="https://img.shields.io/badge/css3-%231572B6.svg?style=for-the-badge&logo=css3&logoColor=white"
										/>
										<img
											className="m-1"
											alt="React"
											src="https://img.shields.io/badge/react-%2320232a.svg?style=for-the-badge&logo=react&logoColor=%2361DAFB"
										/>
										<img
											className="m-1"
											alt="Next JS"
											src="https://img.shields.io/badge/Next-black?style=for-the-badge&logo=next.js&logoColor=white"
										/>
										<img
											className="m-1"
											alt="Three JS"
											src="https://img.shields.io/badge/threejs-black?style=for-the-badge&logo=three.js&logoColor=white"
										/>
										<img
											className="m-1"
											alt="Tailwind CSS"
											src="https://img.shields.io/badge/tailwindcss-%2338B2AC.svg?style=for-the-badge&logo=tailwind-css&logoColor=white"
										/>
									</div>
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
