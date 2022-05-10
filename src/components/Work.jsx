import React from 'react';

const Work = () => {
	return (
		<div name="work" className="bg-[#0a192f] w-full md:h-screen text-gray-300">
			<div className="max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full">
				<div className="pb-8">
					<p className="text-4xl font-bold inline border-b-4 text-gray-300 border-red-500">
						Work
					</p>
					<p className="py-6">Here is some of my recent work</p>
				</div>
				{/*CONTAINER */}
				<div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4">
					{/*GRID ITEM */}
					<div //style={{ backgroundImage: `url(${})` }}
						className="shadow-lg group container rounded-md flex text-center justify-center items-center mx-auto content-div"
					>
						{/*HOVER EFFECTS */}
						<div className="opacity-0 group-hover:opacity-100">
							<span className="text-2xl font-bold text-white tracking-wider justify-center flex">
								HTML, JS, and Tailwind Website
							</span>
							<div className="pt-8 text-center">
								<a href="/">
									<button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">
										Demo
									</button>
								</a>
								<a href="/">
									<button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">
										Code
									</button>
								</a>
							</div>
						</div>
					</div>
					{/*GRID ITEM */}
					<div //style={{ backgroundImage: `url(${})` }}
						className="shadow-lg group container rounded-md flex text-center justify-center items-center mx-auto content-div"
					>
						{/*HOVER EFFECTS */}
						<div className="opacity-0 group-hover:opacity-100">
							<span className="text-2xl font-bold text-white text-center justify-center flex">
								React and Tailwind Application
							</span>
							<div className="pt-8 text-center">
								<a href="/">
									<button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">
										Demo
									</button>
								</a>
								<a href="/">
									<button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">
										Code
									</button>
								</a>
							</div>
						</div>
					</div>
					{/*GRID ITEM */}
					<div //style={{ backgroundImage: `url(${})` }}
						className="shadow-lg group container rounded-md flex justify-center items-center mx-auto content-div"
					>
						{/*HOVER EFFECTS */}
						<div className="opacity-0 group-hover:opacity-100">
							<span className="text-2xl font-bold text-white text-center justify-center flex">
								React and Tailwind portfolio website
							</span>
							<div className="pt-8 text-center">
								<a href="/">
									<button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">
										Demo
									</button>
								</a>
								<a href="/">
									<button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">
										Code
									</button>
								</a>
							</div>
						</div>
					</div>
					{/*GRID ITEM */}
					<div //style={{ backgroundImage: `url(${})` }}
						className="shadow-lg group container rounded-md flex text-center justify-center items-center mx-auto content-div"
					>
						{/*HOVER EFFECTS */}
						<div className="opacity-0 group-hover:opacity-100">
							<span className="text-2xl font-bold text-white text-center justify-center flex">
								React, Tailwind, and Hydrogen headless shopify store
							</span>
							<div className="pt-8 text-center">
								<a href="/">
									<button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">
										Demo
									</button>
								</a>
								<a href="/">
									<button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">
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
