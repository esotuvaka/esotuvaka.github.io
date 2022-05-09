import React from 'react';

const About = () => {
	return (
		<div name="about" className="w-full h-screen bg-[#0a192f] text-gray-300">
			<div className="flex flex-col justify-center items-center w-full h-full">
				<div className="max-w-[1000px] w-full px-4 grid grid-cols-2 gap-8">
					<div className="sm:text-right pb-8 pl-4">
						<p className="text-4xl font-bold inline border-b-4 border-red-500">
							About
						</p>
					</div>
					<div></div>
				</div>
				<div className="max-w-[1000px] w-full px-8 grid sm:grid-cols-2 gap-8  ">
					<div className="sm:text-right text-4xl font-bold">
						<p>Hi! I'm Eric, nice to meet you. Please take a look around.</p>
					</div>
					<div>
						<p>
							I love to build excellent digital experiences that are both highly
							functional and aesthetic. I specialize in building websites for
							individuals and businesses, and have helped a startup with their
							Shopify store and SEO.<br></br> I have a hunger for knowledge, and
							I love to be constantly learning, improving, and working with
							cutting edge technologies.
						</p>
					</div>
				</div>
			</div>
		</div>
	);
};

export default About;
