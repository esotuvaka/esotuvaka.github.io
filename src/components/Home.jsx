import React from 'react';
import { Link } from 'react-scroll';

const Home = () => {
	return (
		<>
			<div
				name="home"
				className="scroll h-screen w-full"
				data-rate=".4"
				data-direction="vertical"
			>
				<div className="mx-auto flex h-full max-w-[1200px] flex-col justify-center px-8 ">
					<div className="text-4xl font-semibold text-black">
						- Eric Otuvaka -
					</div>
					<h1 className="flex text-5xl text-teal-800 sm:text-[7rem]">
						Frontend Developer
					</h1>

					<p className="mt-4 max-w-[700] font-semibold text-black">
						I love problem solving, sharing ideas / experiences, and Hawaiian
						BBQ
					</p>
					<div className="flex md:gap-4">
						<button className="my-4 flex items-center justify-center rounded-md border-2 border-black text-black shadow-md shadow-neutral-600 duration-500 hover:-translate-y-1 hover:border-teal-800 hover:bg-teal-800 hover:text-white hover:shadow-lg hover:shadow-neutral-600">
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
						{/* <button className="text-ash w-[165px] justify-center  border-2 rounded-sm border-ash px-6 py-3 my-4 flex items-center hover:bg-teal-900 hover:border-teal-900 hover:text-white hover:-translate-y-1 hover:shadow-2xl duration-500">
						{/*LINK TO RESUME */}

						{/* </button> */}
					</div>
				</div>
			</div>
		</>
	);
};

export default Home;
