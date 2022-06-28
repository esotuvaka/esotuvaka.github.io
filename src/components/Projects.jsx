import React, { useRef, useEffect } from 'react';
import { gsap, Power4 } from 'gsap';
import LoremPartners from '../assets/lorem-partners-thumbnail.png';
import ShoeStop from '../assets/shoestop-thumbnail.png';
import ProjectItem from './ProjectItem';
import TamarT from '../assets/TamarT.png';

const Work = () => {
	let projectSectionTitle = useRef();

	useEffect(() => {
		gsap.fromTo(
			projectSectionTitle,
			{ clipPath: 'polygon(0% 100%, 100% 100%, 100% 100%, 0% 100%)', y: 50 },
			{
				scrollTrigger: {
					trigger: projectSectionTitle,
				},
				clipPath: 'polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)',
				ease: Power4.easeOut,
				delay: 0.5,
				y: 0,
				duration: 1,
			}
		);
	}, []);

	return (
		<>
			<div className="z-20 mx-auto flex px-2 sm:px-0" name="projects">
				<div className="z-20 hidden bg-white pt-24" />
				<div className="mx-auto h-[230vh] max-w-xs sm:flex sm:h-[310vh] sm:max-w-xl md:max-w-2xl lg:h-[230vh] lg:max-w-4xl xl:max-w-7xl 2xl:h-[230vh] 2xl:max-w-[1520px]">
					<div className="mx-auto flex  w-full flex-col items-center">
						<div
							ref={(el) => (projectSectionTitle = el)}
							className="grid w-full rounded-t-xl py-4 lg:grid-cols-2 lg:gap-8"
						>
							<div className="flex justify-center sm:justify-start">
								<h1 className="mx-auto inline-flex text-left text-5xl text-teal-800 sm:text-7xl md:mx-0 2xl:mb-8 2xl:text-9xl">
									- Projects -
								</h1>
							</div>
							<div></div>
						</div>

						<div className="grid grid-cols-1 md:gap-4  ">
							<ProjectItem
								title="Shoestop"
								tech="Hydrogen.js, React, TailwindCSS, GraphQL"
								backgroundImg={ShoeStop}
								githubLink="https://github.com/esotuvaka/ShoeStop-Hydrogen-Store-TEST"
								demoLink="https://stackblitz.com/github/esotuvaka/ShoeStop-Hydrogen-Store-TEST?file=README.md"
								description="Concept store built using Shopify's new Hydrogen framework. Integrates with Shopify CMS via GraphQL, complete with a full checkout journey, product customization, and collection pages."
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
			</div>
		</>
	);
};

export default Work;
