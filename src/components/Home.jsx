import React from 'react';

const Home = () => {
	return (
		<div className="bg-[#0a192f] w-full h-screen">
			<div className="max-w-[1000px] mx-auto px-8 flex flex-col justify-center h-full">
				<p className="text-red-500">Hi, my name is</p>
				<h1 className="text-white text-4xl sm:text-7xl font-bold">
					Eric Otuvaka
				</h1>
				<h2 className="text-4xl sm:text-7xl font-bold text-[#8892b0]">
					I'm a Frontend Developer
				</h2>
				<p className="text-[#8892b0] max-w-[700]">
					I specialize in building unique and aesthetic websites / digital
					experiences. My current focus is on building responsive, static and
					dynamic websites and applications using React.
				</p>
				<div>
					<button className="text-white border-2 px-6 py-3 my-4 flex items-center hover:bg-red-500 hover:border-red-500 duration-500">
						View Work
					</button>
				</div>
			</div>
		</div>
	);
};

export default Home;
