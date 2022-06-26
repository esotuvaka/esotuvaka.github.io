import React from 'react';

const ProjectItem = ({
	title,
	backgroundImg,
	githubLink,
	demoLink,
	tech,
	description,
}) => {
	return (
		<div id="project-container" className="h-[70vh] pt-4">
			<div className="mx-auto max-w-[1200px] text-black">
				<div className="mx-auto max-w-[1200px]">
					<div className=" grid h-full w-full grid-cols-3 flex-row  rounded-md  duration-500 md:grid-cols-5">
						{/*HOVER EFFECTS */}

						<div className="mx-auto flex flex-col  bg-white  md:col-span-2 ">
							<h2 className="max-w-[1200px] text-left font-semibold md:mb-4 md:text-5xl">
								{title}
							</h2>
							<h3
								id="technologies"
								className="mb-4 font-semibold italic text-teal-800"
							>
								{tech}
							</h3>
							<p className="mb-5 max-w-[450px]">{description}</p>
							<div className="mx-auto flex flex-row">
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
						<div className="col-span-3 pt-2">
							<a
								href={demoLink}
								target="_blank"
								rel="noreferrer"
								className="flex rounded-lg bg-white p-2 shadow-md shadow-neutral-600 transition-all duration-500 hover:scale-[1.01] hover:shadow-lg hover:shadow-neutral-600"
							>
								<img alt="" src={backgroundImg} height={250} className=" " />
							</a>
						</div>
					</div>
				</div>
				{/* <p className="mt-2 max-w-[545px] text-lg font-semibold">
					{description}
					<br></br>
					<span className="text-sm mt-4">{disclaimer}</span>
				</p> */}
			</div>
		</div>
	);
};

export default ProjectItem;
