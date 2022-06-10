import React from 'react';
import LoremPartners from '../assets/lorem-partners-thumbnail.png';
import ShoeStop from '../assets/shoestop-thumbnail.png';
import ProjectItem from './ProjectItem';

const Work = () => {
	return (
		<div name="projects" className="bg-neutral-100 w-full md:h-screen text-ash">
			<div className="max-w-[1500px] mx-auto p-4 flex flex-col justify-center w-full h-full">
				<div className="pb-8">
					<p className="text-4xl font-bold inline border-b-4 text-teal-800 border-teal-900">
						Projects
					</p>
				</div>

				{/*CONTAINER */}
				<div className="grid sm:grid-cols-2 gap-4">
					<ProjectItem
						title="Shopify Hydrogen Headless Storefront"
						backgroundImg={ShoeStop}
						githubLink="https://github.com/esotuvaka/ShoeStop-Hydrogen-Store-TEST"
						demoLink="https://stackblitz.com/github/esotuvaka/ShoeStop-Hydrogen-Store-TEST?file=README.md"
						description="Built with Shopify's new JavaScript framework, Hydrogen*, complete with React Server Components, TailwindCSS, Server-Side-Rendering, GraphQL API, and Shopify as a headless CMS."
						disclaimer="*Please allow a few seconds to load on StackBlitz as Hydrogen is in developer preview, and requires hosting on Shopify Oxygen servers, which have a TBD release date. StackBlitz is a temporary workaround!"
					/>
					<ProjectItem
						title="Aesthetic Real Estate Agent Site Concept"
						backgroundImg={LoremPartners}
						githubLink="https://github.com/esotuvaka/Lorem-Partners"
						demoLink="/"
						description="Built with TailwindCSS, HTML5, and Data-AOS JavaScript animation
							library. Heavy focus on Aesthetics and SEO, with fluid page-load
							animations and the landing page scoring over 90% in each metric"
						disclaimer=""
					/>
					<ProjectItem title="" backgroundImg="" githubLink="" />
				</div>
			</div>
		</div>
	);
};

export default Work;
