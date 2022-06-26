import React from 'react';
import LoremPartners from '../assets/lorem-partners-thumbnail.png';
import ShoeStop from '../assets/shoestop-thumbnail.png';
import ProjectItem from './ProjectItem';
import TamarT from '../assets/TamarT.png';

const Work = () => {
	return (
		<>
			<div className="pt-24" name="projects" />
			<div className=" mx-auto  h-[210vh] lg:max-w-[1090px] lg:pt-0 2xl:max-w-[1750px]">
				<div className="mx-auto flex h-screen w-full max-w-[1200px] flex-col items-center p-4">
					<div className="grid w-full max-w-[1200px] grid-cols-2 gap-8 rounded-t-xl py-4">
						<div className="">
							<h1 className="inline-flex text-left text-5xl text-teal-800 sm:text-7xl">
								- Projects -
							</h1>
						</div>
						<div></div>
					</div>

					{/*CONTAINER */}
					{/* grid sm:grid-cols-2  gap-4 */}
					<div id="p-container" className="grid md:grid-cols-1 md:gap-4  ">
						<ProjectItem
							title="Shoestop"
							tech="Hydrogen.js, React, TailwindCSS, GraphQL"
							backgroundImg={ShoeStop}
							githubLink="https://github.com/esotuvaka/ShoeStop-Hydrogen-Store-TEST"
							demoLink="https://stackblitz.com/github/esotuvaka/ShoeStop-Hydrogen-Store-TEST?file=README.md"
							description="Concept store built using Shopify's new Hydrogen framework. Integrates with Shopify CMS, complete with a full checkout journey, product customization, and collection pages."
						/>
						<ProjectItem
							title="Tamar Tarkhanian"
							tech="Next.js, React, TailwindCSS"
							backgroundImg={TamarT}
							githubLink="https://github.com/esotuvaka/Real-Estate-Agent-NextJS"
							demoLink="https://tt-real-estate-agent.vercel.app/"
							description="Lead generation site built for local Irvine Real Estate Agent. I converted her previous outdated and slow website into a Next.js site with Lighthouse scores of: 100 performance, 96 accessibility, and 100 SEO."
						/>
						<ProjectItem
							title="Lorem Partners"
							tech="HTML5, TailwindCSS, Data-AOS scroll animation library"
							backgroundImg={LoremPartners}
							githubLink="https://github.com/esotuvaka/Lorem-Partners"
							demoLink="https://esotuvaka.github.io/Lorem-Partners/"
							description="Concept lead generation site I made to practice HTML and CSS. My first full website, complete with a strong focus on aesthetics, multiple pages, and scroll-based & page-load animations."
						/>
					</div>
				</div>
			</div>
		</>
	);
};

export default Work;
