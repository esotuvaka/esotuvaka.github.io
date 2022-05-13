import React from 'react';
import LoremPartners from '../assets/lorem-partners-thumbnail.png';
import ShoeStop from '../assets/shoestop-thumbnail.png';

const Work = () => {
	return (
		<div name="projects" className="bg-neutral-100 w-full md:h-screen text-ash">
			<div className="max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full">
				<div className="pb-8">
					<p className="text-4xl font-bold inline border-b-4 text-teal-800 border-teal-900">
						Projects
					</p>
				</div>

				{/*Use OOP to minimize lines (Convert line 15 to line 104 into OOP)}*/}
				{/*CONTAINER */}
				<div className="grid sm:grid-cols-2  gap-4">
					{/*GRID ITEM */}
					<div
						style={{
							backgroundImage: `url(${ShoeStop})`,
						}}
						className="shadow-lg group container rounded-md flex text-center justify-center items-center mx-auto content-div"
					>
						{/*HOVER EFFECTS */}
						<div className="opacity-0 w-full group-hover:opacity-100 group-hover:shadow-xl duration-500 group-hover:bg-stone-100 h-full rounded-md">
							<span className="text-2xl text-center w-4/5 mx-auto font-bold mt-9 text-teal-800 tracking-wider justify-center flex">
								React, Tailwind, Hydrogen headless store
							</span>
							<div className="pt-8 text-center">
								<a href="/">
									<button className="text-center rounded-sm px-4 py-3 m-2 border-2 border-ash text-ash font-bold text-lg hover:bg-teal-900 hover:border-teal-900 hover:text-white hover:-translate-y-1 hover:shadow-2xl duration-500">
										Not Live Yet !
									</button>
								</a>
								<a
									href="https://github.com/esotuvaka/ShoeStop-Hydrogen-Store-TEST"
									target="_blank"
									rel="noreferrer"
								>
									<button className="text-center rounded-sm px-4 py-3 m-2 border-2 border-ash text-ash font-bold text-lg hover:bg-teal-900 hover:border-teal-900 hover:text-white hover:-translate-y-1 hover:shadow-2xl duration-500">
										Code
									</button>
								</a>
							</div>
						</div>
					</div>
					{/*GRID ITEM */}
					<div
						style={{ backgroundImage: `url(${LoremPartners})` }}
						className="shadow-lg   group container rounded-md flex text-center justify-center items-center mx-auto content-div w-full "
					>
						{/*HOVER EFFECTS */}
						<div className="opacity-0 w-full group-hover:opacity-100 group-hover:shadow-xl duration-500 group-hover:bg-stone-100 h-full rounded-md">
							<span className="text-2xl text-center w-4/5 mx-auto font-bold mt-9 text-teal-800 tracking-wider justify-center flex">
								HTML, JS, and Tailwind Website
							</span>
							<div className="pt-8 text-center">
								<a href="/">
									<button className="text-center rounded-sm px-4 py-3 m-2 border-2 border-ash text-ash font-bold text-lg hover:bg-teal-900 hover:border-teal-900 hover:text-white hover:-translate-y-1 hover:shadow-2xl duration-500">
										Demo
									</button>
								</a>
								<a
									href="https://github.com/esotuvaka/Lorem-Partners"
									target="_blank"
									rel="noreferrer"
								>
									<button className="text-center rounded-sm px-4 py-3 m-2 border-2 border-ash text-ash font-bold text-lg hover:bg-teal-900 hover:border-teal-900 hover:text-white hover:-translate-y-1 hover:shadow-2xl duration-500">
										Code
									</button>
								</a>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Work;
