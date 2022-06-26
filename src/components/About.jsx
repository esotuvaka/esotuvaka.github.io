import React from 'react';

const About = () => {
	return (
		<>
			<div className="pt-24" name="about"></div>
			<div className="">
				<div className="mx-auto flex h-[70vh] w-full max-w-[1200px] flex-col items-center justify-center p-4">
					<div>
						<div className="grid w-full max-w-[1200px] grid-cols-2 gap-8 rounded-t-xl py-4">
							<div className="">
								<h1 className="inline-flex text-left text-5xl text-teal-800 sm:text-7xl">
									- About -
								</h1>
							</div>
							<div></div>
						</div>
						<div className="grid w-full max-w-[1200px] gap-8 rounded-xl bg-white py-4 sm:grid-cols-5 ">
							<div className="col-span-2 font-bold">
								<p className="text-5xl text-black">
									Hi! I'm Eric, and this is my story so far...
								</p>
							</div>
							<div className="col-span-3">
								<h3 className="relative mt-12 text-5xl font-semibold">
									I just love to build things
								</h3>
								<p className="mt-3">
									My love for code started when I was 10, with the videogames
									LittleBigPlanet and Minecraft. I didn't know it at the time,
									but I was creating minigames, digital clocks, and more with
									code. The only difference was that this code wasn't typed out,
									it was wired together...
								</p>
								<p className="mt-3">
									Nowadays I'm a self-taught frontend developer in Irvine, CA
									that specializes in building websites with clean aesthetics,
									engaging UI/UX, as well as high accessibility and SEO.
								</p>
								<p className="mt-3">
									I've always had a hunger for knowledge and creation, and am
									driven to be constantly learning, improving, and building.
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
