import React from 'react';
import bg3 from '../assets/stacked-waves-haikei-3.svg';

const About = () => {
	return (
		<>
			<div
				className="w-full h-screen absolute bg-cover bg-no-repeat -z-10"
				style={{ backgroundImage: `url(${bg3})` }}
			></div>
			<div name="about" className="w-full h-screen  text-black  ">
				<div className="flex flex-col justify-center items-center w-full h-full ">
					<div>
						<div className="max-w-[1000px] w-full px-4 grid grid-cols-2 gap-8 bg-white rounded-t-xl py-4">
							<div className="sm:text-right pb-8 pl-4">
								<p className="text-4xl text-black font-bold inline border-b-4 border-black">
									About
								</p>
							</div>
							<div></div>
						</div>
						<div className="max-w-[1000px] w-full px-8 grid sm:grid-cols-2 gap-8  bg-white rounded-b-xl py-4 ">
							<div className="sm:text-right text-4xl font-bold">
								<p className="text-black">
									Hi! I'm Eric, nice to meet you. Please take a look around.
								</p>
							</div>
							<div>
								<p className="">
									I'm a self-taught frontend developer in Irvine, CA that
									specializes in building websites with clean aesthetics,
									engaging UI/UX, as well as high accessibility and SEO.
									<br></br> I have a hunger for knowledge, and I love to be
									constantly learning, improving, and working with cutting edge
									technologies.
								</p>
							</div>
						</div>
					</div>
				</div>
			</div>
		</>
	);
};

export default About;
