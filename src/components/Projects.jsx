import React from 'react';
import LoremPartners from '../assets/lorem-partners-thumbnail.png';
import ShoeStop from '../assets/shoestop-thumbnail.png';
import ProjectItem from './ProjectItem';
import TamarT from '../assets/TamarT.png';
import bg from '../assets/stacked-waves-haikei-2.svg';

const Work = () => {
	return (
		<>
			<div
				name="projects"
				className="w-full h-screen absolute bg-cover bg-no-repeat  -z-10"
				style={{ backgroundImage: `url(${bg})` }}
			></div>
			<div className=" lg:max-w-[1090px]   lg:pt-0 2xl:max-w-[1750px] mx-auto">
				<div className="max-w-[1500px] mx-auto flex flex-col items-center p-4 h-screen   w-full ">
					<div className="grid grid-cols-2">
						<p className="text-4xl border-teal-800  gap-8 font-bold border-b-4 md:mt-36 text-teal-800  ">
							Projects
						</p>
					</div>

					{/*CONTAINER */}
					{/* grid sm:grid-cols-2  gap-4 */}
					<div id="p-container" className="grid md:grid-cols-2 md:gap-4  ">
						<ProjectItem
							title="Shopify Hydrogen Storefront"
							backgroundImg={ShoeStop}
							githubLink="https://github.com/esotuvaka/ShoeStop-Hydrogen-Store-TEST"
							demoLink="https://stackblitz.com/github/esotuvaka/ShoeStop-Hydrogen-Store-TEST?file=README.md"
							description=""
						/>
						<ProjectItem
							title="Real Estate Team Concept Site"
							backgroundImg={LoremPartners}
							githubLink="https://github.com/esotuvaka/Lorem-Partners"
							demoLink="https://esotuvaka.github.io/Lorem-Partners/"
							description=""
							disclaimer=""
						/>
						<ProjectItem
							title="Real Estate Agent Site"
							backgroundImg={TamarT}
							githubLink="https://github.com/esotuvaka/Real-Estate-Agent-NextJS"
							demoLink="https://tt-real-estate-agent.vercel.app/"
							description=""
							disclaimer=""
						/>
					</div>
				</div>
			</div>
		</>
	);
};

export default Work;
