import React, { useRef, useEffect } from 'react';
import { gsap, Power4 } from 'gsap';

const ProjectItem = ({
	title,
	backgroundImg,
	githubLink,
	demoLink,
	tech,
	description,
	role,
	oss,
}) => {
	let projectImage = useRef();

	let projectRole = useRef();
	let projectOSS = useRef();
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
			[projectOSS],
			{
				clipPath: 'polygon(0% 100%, 100% 100%, 100% 100%, 0% 100%)',
				y: 50,
			},
			{
				scrollTrigger: {
					trigger: projectDesc,
				},
				clipPath: 'polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)',
				stagger: 0.2,
				duration: 1,
				ease: Power4.easeOut,
				y: 0,
			}
		);
		gsap.fromTo(
			[projectRole],
			{
				opacity: 0,
				y: 5,
			},
			{
				scrollTrigger: {
					trigger: projectDesc,
				},
				opacity: 1,
				delay: 1,
				duration: 1,
				ease: Power4.easeOut,
				y: 0,
			}
		);
		gsap.fromTo(
			[projectDesc],
			{
				opacity: 0,
				y: 5,
			},
			{
				scrollTrigger: {
					trigger: projectDesc,
				},
				opacity: 1,
				delay: 1.2,
				duration: 1,
				ease: Power4.easeOut,
				y: 0,
			}
		);
		gsap.fromTo(
			[projectTitle, projectTech],
			{
				clipPath: 'polygon(0% 100%, 100% 100%, 100% 100%, 0% 100%)',
				y: 50,
			},
			{
				scrollTrigger: {
					trigger: projectDesc,
				},
				clipPath: 'polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)',
				stagger: 0.2,
				duration: 1,
				ease: Power4.easeOut,
				y: 0,
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
		<div className="relative rounded-lg py-[5%] opacity-75 shadow transition-all duration-300 hover:-translate-y-1 hover:opacity-100 hover:shadow-sm hover:shadow-white">
			<div className="mx-auto text-white md:max-w-2xl lg:max-w-4xl xl:max-w-6xl 2xl:max-w-[1520px]">
				<div className="grid h-full w-full grid-cols-4 flex-row justify-start rounded-md duration-500">
					<div className="col-span-4 flex flex-col bg-transparent px-4">
						{oss ? (
							<p
								ref={(el) => (projectOSS = el)}
								className="my-2 w-min whitespace-nowrap rounded-md bg-blue-700 px-4 py-2 text-xs"
							>
								Open Source
							</p>
						) : (
							<div className="h-12" />
						)}
						<h3
							ref={(el) => (projectTitle = el)}
							className="flex h-[96px] items-end text-left text-4xl font-semibold md:mb-4 md:text-5xl lg:mb-0 lg:text-4xl xl:text-5xl"
						>
							{title}
						</h3>
						<h4
							id="technologies"
							ref={(el) => (projectTech = el)}
							className="h-[60px] text-base font-semibold italic text-neutral-500 sm:mb-2 xl:text-xl 2xl:text-2xl"
						>
							{tech}
						</h4>
						<div
							ref={(el) => (projectImage = el)}
							className="mx-auto flex items-center rounded-lg "
						>
							<a href={demoLink} target="_blank" rel="noreferrer" className="">
								<img
									alt={`${title} project`}
									src={backgroundImg}
									className="aspect-video rounded-lg"
								/>
							</a>
						</div>
						{role ? (
							<p
								ref={(el) => (projectRole = el)}
								className="text-md mt-4 flex font-normal"
							>
								{role}
							</p>
						) : null}
						<p
							ref={(el) => (projectDesc = el)}
							className="mb-4 mt-2 flex h-[120px] text-base font-normal"
						>
							{description}
						</p>

						<div
							ref={(el) => (projectButtons = el)}
							className="mx-auto hidden sm:flex sm:flex-row"
						>
							<a href={demoLink} target="_blank" rel="noreferrer">
								<button className="mr-4 rounded-sm px-6 py-2 text-white shadow-md shadow-transparent ring-2 ring-white transition-all duration-300 hover:bg-neutral-800 hover:text-white hover:shadow-lg hover:shadow-neutral-400 hover:ring-neutral-800 2xl:text-2xl">
									<h2>Demo</h2>
								</button>
							</a>
							{githubLink ? (
								<a href={githubLink} target="_blank" rel="noreferrer">
									<button className="rounded-sm px-6 py-2 text-white shadow-md shadow-transparent ring-2 ring-white transition-all duration-300 hover:bg-neutral-800 hover:text-white hover:shadow-lg hover:shadow-neutral-400 hover:ring-neutral-800 2xl:text-2xl">
										<h2>Code</h2>
									</button>
								</a>
							) : (
								<></>
							)}
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default ProjectItem;
