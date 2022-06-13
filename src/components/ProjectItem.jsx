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
		<div id="project-container" className=" py-4">
			<div className="max-w-[1200px] mx-auto text-black">
				<h2 className="text-left max-w-[1200px] mx-auto mb-4 font-semibold text-3xl">
					{title}
				</h2>
				<div className="max-w-[1200px] mx-auto">
					<div>
						{/*HOVER EFFECTS */}
						<div className="w-full grid grid-cols-4  duration-500  h-full rounded-md">
							<img
								alt=""
								src={backgroundImg}
								width="1000px"
								height={250}
								className="flex shadow-md col-span-3 hover:scale-[1.01] hover:shadow-xl duration-500 transition-all p-2 bg-white rounded-lg"
							></img>

							<div className=" flex  flex-col items-center justify-center">
								<a href={demoLink} target="_blank" rel="noreferrer">
									<button className="w-24 text-center rounded-sm px-4 py-3 m-2 border-2 bg-white border-neutral-100 font-bold text-lg hover:bg-teal-900 hover:border-teal-900 hover:text-white hover:-translate-y-1 hover:shadow-2xl duration-500">
										Demo
									</button>
								</a>
								<a href={githubLink} target="_blank" rel="noreferrer">
									<button className="w-24 text-center rounded-sm px-4 py-3 m-2 border-2 bg-white border-neutral-100 font-bold text-lg hover:bg-teal-900 hover:border-teal-900 hover:text-white hover:-translate-y-1 hover:shadow-2xl duration-500">
										Code
									</button>
								</a>
							</div>
						</div>
					</div>
				</div>
				<p className="mt-2 max-w-[545px] text-lg font-semibold">
					{description}
					<br></br>
					<span className="text-sm mt-4">{disclaimer}</span>
				</p>
			</div>
		</div>
	);
};

export default ProjectItem;
