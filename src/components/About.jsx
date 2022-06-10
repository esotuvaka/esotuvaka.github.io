import React from 'react';

const About = () => {
	return (
		<div name="about" className="w-full h-screen bg-neutral-100 text-ash">
			<div className="flex flex-col justify-center items-center w-full h-full">
				<div className="max-w-[1000px] w-full px-4 grid grid-cols-2 gap-8">
					<div className="sm:text-right pb-8 pl-4">
						<p className="text-4xl text-teal-800 font-bold inline border-b-4 border-teal-900">
							About
						</p>
					</div>
					<div></div>
				</div>
				<div className="max-w-[1000px] w-full px-8 grid sm:grid-cols-2 gap-8  ">
					<div className="sm:text-right text-4xl font-bold">
						<p className="text-ash">
							Hi! I'm Eric, nice to meet you. Please take a look around.
						</p>
					</div>
					<div>
						<p>
							I am a self-taught frontend developer currently located in Irvine,
							CA. I specialize in building websites for individuals and
							small-businesses.<br></br> I have a hunger for knowledge, and I
							love to be constantly learning, improving, and working with
							cutting edge technologies.
						</p>
					</div>
				</div>
			</div>
		</div>
	);
};

export default About;
