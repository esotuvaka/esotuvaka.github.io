import { useRef, useEffect } from 'react';
import { gsap, Power4 } from 'gsap';
import LoremPartners from '../assets/lorem-partners-thumbnail.png';
import ShoeStop from '../assets/shoestop-thumbnail.png';
import ProjectItem from './ProjectItem';
import TamarT from '../assets/TamarT.png';
import TT from '../assets/tt.png';
import SS from '../assets/spotify-search.png';

const Projects = () => {
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
		<div className="z-20 mx-auto flex px-2 sm:px-0" name="projects">
			<div className="z-20 hidden bg-white pt-24" />
			<div className="mx-auto max-w-xs sm:flex  sm:max-w-xl md:max-w-2xl lg:w-3/4 lg:max-w-4xl xl:max-w-7xl  2xl:max-w-[1520px]">
				<div className="mx-auto flex  w-full flex-col items-center">
					<div
						ref={(el) => (projectSectionTitle = el)}
						className="grid w-full rounded-t-xl py-4 lg:grid-cols-2 lg:gap-8"
					>
						<div className="flex justify-center sm:justify-start">
							<h2 className="mx-auto inline-flex text-left text-5xl text-white sm:text-7xl md:mx-0 lg:text-6xl 2xl:mb-8 2xl:text-7xl">
								- Projects -
							</h2>
						</div>
						<></>
					</div>
					<div className="grid grid-cols-3 md:gap-8">
						<ProjectItem
							title="Spotify Search"
							tech="React, TypeScript, Spotify Web API, TailwindCSS"
							backgroundImg={SS}
							githubLink="https://github.com/esotuvaka/spotify-search"
							demoLink="https://esotuvaka.github.io/spotify-search/"
							description="A web app that allows users to search for their favorite artists on Spotify and see their number of followers, genres, and all of their albums."
						/>
						<ProjectItem
							title="Estate Agent Site"
							tech="Next.js, Sanity.io, React, TailwindCSS"
							backgroundImg={TT}
							githubLink="https://github.com/esotuvaka/Agent-Site"
							demoLink="https://agent-site.vercel.app/"
							description="A Full Stack lead generation site for real estate agents. Complete with a Sanity CMS that enables CRUD operations, and has dynamic pages for each listing."
						/>
						<ProjectItem
							title="Shoestop"
							tech="Hydrogen.js, React, TailwindCSS, GraphQL"
							backgroundImg={ShoeStop}
							githubLink="https://github.com/esotuvaka/ShoeStop-Hydrogen-Store-TEST"
							demoLink="https://stackblitz.com/github/esotuvaka/ShoeStop-Hydrogen-Store-TEST?file=README.md"
							description="Full Stack concept store built using Shopify's new Hydrogen framework. Integrates with Shopify CMS via GraphQL, complete with a full checkout journey, product customization, and collection pages. "
						/>
						<ProjectItem
							title="Tamar Tarkhanian"
							tech="Next.js, React, TailwindCSS"
							backgroundImg={TamarT}
							githubLink="https://github.com/esotuvaka/Real-Estate-Agent-NextJS"
							demoLink="https://tt-real-estate-agent.vercel.app/"
							description="Lead generation site built for local Irvine Real Estate Agent. A complete overhaul of the previous site built using Next.js and SSG for performance."
						/>
						<ProjectItem
							title="Lorem Partners"
							tech="HTML5, TailwindCSS"
							backgroundImg={LoremPartners}
							githubLink="https://github.com/esotuvaka/Lorem-Partners"
							demoLink="https://esotuvaka.github.io/Lorem-Partners/"
							description="Concept lead generation site I made to practice HTML and CSS. My first full website, with a strong focus on aesthetics and animations."
						/>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Projects;
