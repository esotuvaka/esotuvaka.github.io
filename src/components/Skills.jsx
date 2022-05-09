import React from 'react';

import HTML from '../assets/html.png';
import JavaScript from '../assets/javascript.png';
import ReactImg from '../assets/react.png';
import Tailwind from '../assets/tailwind.png';
import Hydrogen from '../assets/hydrogen.png';
import CSS from '../assets/css.png';
import GraphQL from '../assets/graphQL.png';

const Skills = () => {
	return (
		<div name="skills" className="bg-[#0a192f] text-gray-300 h-screen w-full">
			{/*CONTAINER */}
			<div className="max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full">
				<div>
					<p className="text-4xl py-2 font-bold inline border-b-4 border-red-500">
						Skills
					</p>
					<p className="py-4">Technologies I've previously worked with</p>
				</div>

				<div className="w-full grid grid-cols-2 sm:grid-cols-4 gap-4 text-center py-8">
					<div className="shadow-md hover:scale-110 duration-500">
						<img src={HTML} alt="HTML icon" className="w-20 mx-auto" />
						<p className="my-4">HTML</p>
					</div>
					<div className="shadow-md hover:scale-110 duration-500">
						<img src={CSS} alt="CSS icon" className="w-20 mx-auto" />
						<p className="my-4">CSS</p>
					</div>
					<div className="shadow-md hover:scale-110 duration-500">
						<img src={Tailwind} alt="Tailwind icon" className="w-20 mx-auto" />
						<p className="my-4">Tailwind</p>
					</div>
					<div className="shadow-md hover:scale-110 duration-500">
						<img
							src={JavaScript}
							alt="JavaScript icon"
							className="w-20 mx-auto"
						/>
						<p className="my-4">JavaScript</p>
					</div>
					<div className="shadow-md hover:scale-110 duration-500">
						<img src={ReactImg} alt="React icon" className="w-20 mx-auto" />
						<p className="my-4">React</p>
					</div>
					<div className="shadow-md hover:scale-110 duration-500">
						<img
							src={Hydrogen}
							alt="Hydrogen icon"
							className="w-20 pt-8 mx-auto"
						/>
						<p className="my-4">Hydrogen</p>
					</div>
					<div className="shadow-md hover:scale-110 duration-500">
						<img src={GraphQL} alt="GraphQL icon" className="w-20 mx-auto" />
						<p className="my-4">GraphQL</p>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Skills;
