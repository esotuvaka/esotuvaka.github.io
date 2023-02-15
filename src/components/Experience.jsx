import { useRef, useEffect } from 'react';
import { gsap, Power4 } from 'gsap';
import ProjectItem from './ProjectItem';
import Loveturkey from '../assets/Loveturkey.png';
import TamarT from '../assets/TamarT.png';
import Dim from '../assets/dim.png';
import t3 from '../assets/t3.png';

export default function Experience() {
	let experienceSectionTitle = useRef();

	useEffect(() => {
		gsap.fromTo(
			experienceSectionTitle,
			{ clipPath: 'polygon(0% 100%, 100% 100%, 100% 100%, 0% 100%)', y: 50 },
			{
				scrollTrigger: {
					trigger: experienceSectionTitle,
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
		<div className="z-20 mx-auto my-[20vh] flex px-2 sm:px-0" name="experience">
			<div className="mx-auto max-w-xs sm:flex  sm:max-w-xl md:max-w-2xl lg:w-3/4 lg:max-w-4xl xl:max-w-7xl  2xl:max-w-[1520px]">
				<div className="mx-auto flex  w-full flex-col items-center">
					<div
						ref={(el) => (experienceSectionTitle = el)}
						className="grid w-full rounded-t-xl py-4 lg:grid-cols-2 lg:gap-8"
					>
						<div className="flex justify-center sm:justify-start">
							<h2 className="mx-auto inline-flex text-left text-5xl text-white sm:text-7xl md:mx-0 lg:text-6xl 2xl:mb-8 2xl:text-7xl">
								- Experience -
							</h2>
						</div>
						<></>
					</div>
					<div className="mb-8 grid grid-cols-3 md:gap-8">
						<ProjectItem
							title="Loveturkey"
							tech="React, Three.js, PHP, MySQL TailwindCSS"
							backgroundImg={Loveturkey}
							role="Full Stack Developer (Contract)"
							demoLink="https://esotuvaka.github.io/loveturkey/"
							description="Full Stack tourism web app built for Turkish government's official tourism website (In Development). An interactive 3D globe that suggests tourist destinations from a database of over 4000 airports."
							oss={false}
						/>
						<ProjectItem
							title="Tamar Tarkhanian"
							tech="Next.js, React, TailwindCSS"
							backgroundImg={TamarT}
							role="Full Stack Developer (Contract)"
							demoLink="https://tt-real-estate-agent.vercel.app/"
							description="Lead generation site built for local Irvine Real Estate Agent. A complete overhaul of the previous site built using Next.js and SSG for performance."
							oss={false}
						/>
						<ProjectItem
							title="create-t3-app"
							tech="Next.js, React, TypeScript, Prisma, tRPC, NextAuth.js"
							backgroundImg={t3}
							role="OSS Contributor"
							demoLink="https://create.t3.gg/"
							githubLink="https://github.com/t3-oss/create-t3-app"
							description="Contributed to a Full Stack, Type-Safe framework, fixing typesafety issues and driving discussion to improve usability and safety with external JavaScript libraries."
							oss={true}
						/>
						<ProjectItem
							title="Destiny Item Manager"
							tech="React, TypeScript, SCSS, Husky, Jest"
							backgroundImg={Dim}
							role="OSS Contributor"
							demoLink="https://destinyitemmanager.com/en/"
							githubLink="https://github.com/DestinyItemManager/DIM"
							description="Contributed to a large inventory management web app used by thousands daily, fixing filter functionality and styling conflicts."
							oss={true}
						/>
					</div>
				</div>
			</div>
		</div>
	);
}
