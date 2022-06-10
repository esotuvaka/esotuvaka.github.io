import React from 'react';

const ProjectItem = ({
	title,
	backgroundImg,
	githubLink,
	demoLink,
	description,
	disclaimer,
}) => {
	return (
		<div id="project-container" className="">
			<h2 className="text-center mb-4 font-semibold text-3xl">{title}</h2>
			<div className=" group container rounded-md flex  text-center justify-center items-center mx-auto content-div">
				<div>
					{/*HOVER EFFECTS */}
					<div className="w-full grid grid-cols-4  duration-500  h-full rounded-md">
						<img
							alt=""
							src={backgroundImg}
							width="480px"
							height={250}
							className="flex shadow-md col-span-3"
						></img>
						<div className=" flex  flex-col items-center justify-center">
							<a href={demoLink} target="_blank" rel="noreferrer">
								<button className="w-24 text-center rounded-sm px-4 py-3 m-2 border-2 border-ash text-ash font-bold text-lg hover:bg-teal-900 hover:border-teal-900 hover:text-white hover:-translate-y-1 hover:shadow-2xl duration-500">
									Demo
								</button>
							</a>
							<a href={githubLink} target="_blank" rel="noreferrer">
								<button className="w-24 text-center rounded-sm px-4 py-3 m-2 border-2 border-ash text-ash font-bold text-lg hover:bg-teal-900 hover:border-teal-900 hover:text-white hover:-translate-y-1 hover:shadow-2xl duration-500">
									Code
								</button>
							</a>
						</div>
					</div>
				</div>
			</div>
			<p className="mt-2 w-[600px] mx-auto text-base">
				{description}
				<br></br>
				<span className="text-sm mt-4">{disclaimer}</span>
			</p>
		</div>
	);
};

export default ProjectItem;
