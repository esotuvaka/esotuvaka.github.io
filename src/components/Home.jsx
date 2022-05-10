import React from 'react';
import { Link } from 'react-scroll';

const Home = () => {
	return (
		<div name="home" className="bg-neutral-100 w-full h-screen">
			<div className="max-w-[1000px] mx-auto px-8 flex flex-col justify-center h-full">
				<p className="text-[#393D3F] mb-4">Hi, my name is</p>
				<h1 className="text-teal-800 font-[Poppins] text-5xl  sm:text-8xl  font-semibold">
					Eric Otuvaka
				</h1>
				<h2 className="text-4xl sm:text-6xl font-semibold text-teal-900">
					I'm a Frontend Developer
				</h2>
				<p className="text-[#393D3F] max-w-[700] mt-4">
					I specialize in building unique and aesthetic digital experiences. My
					current focus is on building responsive, static and dynamic websites
					and applications using React.
				</p>
				<div>
					<button className="text-[#393D3F] border-2 rounded-sm border-[#393D3F] px-6 py-3 my-4 flex items-center hover:bg-teal-900 hover:border-teal-900 hover:text-white hover:-translate-y-1 hover:shadow-2xl duration-500">
						<Link to="work" offset={-100} smooth={true} duration={500}>
							View Work
						</Link>
					</button>
				</div>
			</div>
		</div>
	);
};

export default Home;
