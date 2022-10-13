import React, { useRef, useEffect } from 'react';
import { gsap, Power4 } from 'gsap';

const ProjectItem = ({
	title,
	backgroundImg,
	githubLink,
	demoLink,
	tech,
	description,
}) => {
	let projectImage = useRef();

	let projectTitle = useRef();
	let projectTech = useRef();
	let projectDesc = useRef();

	let projectButtons = useRef();

	useEffect(() => {
		gsap.fromTo(
			projectImage,
			{ opacity: 0, x: 0 },
			{
				scrollTrigger: {
					trigger: projectDesc,
				},
				opacity: 1,

				duration: 1,
				delay: 0.5,
				ease: Power4.easeIn,
			}
		);
		gsap.fromTo(
			[projectTitle, projectTech, projectDesc],
			{ opacity: 0 },
			{
				scrollTrigger: {
					trigger: projectDesc,
				},
				opacity: 1,
				duration: 1,
				stagger: 0.1,
				ease: Power4.easeIn,
			}
		);
		gsap.fromTo(
			projectButtons,
			{ opacity: 0 },
			{
				scrollTrigger: {
					trigger: projectDesc,
				},
				opacity: 1,
				ease: Power4.easeIn,
				delay: 0.5,
				duration: 1,
			}
		);
	}, []);

	return (
		<div className="py-[5%]">
			<div className="mx-auto  text-black md:max-w-2xl lg:max-w-4xl xl:max-w-6xl 2xl:max-w-[1520px]">
				<div className="">
					<div className="grid h-full w-full grid-cols-1 flex-row justify-start rounded-md duration-500 sm:grid-cols-3 sm:gap-x-4 md:grid-cols-4">
						<div className="flex flex-col bg-white sm:col-span-3 sm:mx-auto sm:mb-4 md:col-span-5 lg:col-span-2">
							<h2
								ref={(el) => (projectTitle = el)}
								className=" text-left text-4xl font-semibold md:mb-4 md:text-5xl lg:mb-0 lg:text-4xl xl:text-5xl 2xl:text-7xl"
							>
								{title}
							</h2>
							<h3
								id="technologies"
								ref={(el) => (projectTech = el)}
								className="text-base font-semibold italic text-teal-800 sm:mb-4 xl:text-xl 2xl:text-2xl"
							>
								{tech}
							</h3>
							<p
								ref={(el) => (projectDesc = el)}
								className="mb-5 flex text-base font-normal xl:text-2xl 2xl:text-3xl"
							>
								{description}
							</p>
							<div
								ref={(el) => (projectButtons = el)}
								className="mx-auto hidden sm:flex sm:flex-row"
							>
								<a href={demoLink} target="_blank" rel="noreferrer">
									<button className="mr-4 rounded-sm py-2 px-6 font-semibold  text-black shadow-md shadow-neutral-600 ring-2 ring-black transition-all duration-500 hover:-translate-y-1 hover:bg-teal-800 hover:text-white hover:shadow-lg hover:shadow-neutral-600 hover:ring-teal-800">
										<h2>Demo</h2>
									</button>
								</a>
								<a href={githubLink} target="_blank" rel="noreferrer">
									<button className="rounded-sm py-2 px-6 font-semibold  text-black shadow-md shadow-neutral-600 ring-2 ring-black transition-all duration-500 hover:-translate-y-1 hover:bg-teal-800 hover:text-white hover:shadow-lg hover:shadow-neutral-600 hover:ring-teal-800">
										<h2>Code</h2>
									</button>
								</a>
							</div>
						</div>
						<div
							ref={(el) => (projectImage = el)}
							className="mx-auto flex items-center rounded-lg sm:col-span-3 sm:mx-0 sm:pt-2 md:col-span-4 md:mx-auto md:w-4/5 lg:col-span-2 lg:w-full lg:justify-center lg:pt-0  "
						>
							<a href={demoLink} target="_blank" rel="noreferrer" className="">
								<img
									alt=""
									src={backgroundImg}
									className="rounded-lg p-2 shadow-md shadow-neutral-600 transition-all duration-500 hover:scale-[1.01] hover:shadow-lg hover:shadow-neutral-600 "
								/>
							</a>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default ProjectItem;
