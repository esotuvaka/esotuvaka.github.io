import React, { useRef, useEffect } from 'react';
import { gsap, Power4 } from 'gsap';

const Contact = () => {
	let contactSectionTitle = useRef();
	let contactForm = useRef();

	useEffect(() => {
		gsap.fromTo(
			contactSectionTitle,
			{ clipPath: 'polygon(0% 100%, 100% 100%, 100% 100%, 0% 100%)', y: 50 },
			{
				scrollTrigger: {
					trigger: contactSectionTitle,
				},
				clipPath: 'polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)',
				ease: Power4.easeOut,
				delay: 0.5,
				y: 0,
				duration: 1,
			}
		);
		gsap.fromTo(
			contactForm,
			{ clipPath: 'polygon(0% 0%, 100% 0%, 100% 0%, 0% 0%)' },
			{
				scrollTrigger: {
					trigger: contactSectionTitle,
				},
				clipPath: 'polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)',
				ease: Power4.easeOut,
				delay: 1,
				duration: 1,
			}
		);
	}, []);

	return (
		<>
			<div
				className="mx-auto flex h-screen w-full max-w-xs flex-col items-center justify-center px-2 sm:max-w-xl sm:px-0 md:max-w-2xl lg:max-w-4xl xl:max-w-6xl 2xl:max-w-[1520px]"
				name="contact"
			>
				<div
					ref={(el) => (contactSectionTitle = el)}
					className="grid w-full max-w-[1200px] grid-cols-1 rounded-t-xl py-4 lg:grid-cols-2 lg:gap-8 2xl:max-w-[1520px]"
				>
					<div className="flex justify-center sm:justify-start">
						<h1 className="mx-auto inline-flex text-left text-5xl text-teal-800 sm:text-7xl md:mx-0 2xl:text-8xl">
							- Contact -
						</h1>
					</div>
					<div></div>
				</div>
				<div className="grid grid-cols-1">
					<form
						ref={(el) => (contactForm = el)}
						method="POST"
						action="https://getform.io/f/59170bd6-bf32-4da3-a9c7-13ce88bc64a7"
						className="flex w-full max-w-[600px] flex-col pb-2"
					>
						<p className="mb-4 text-2xl font-semibold text-black sm:py-4 sm:text-3xl">
							Submit the form below or send an email to: eric.otuvaka@gmail.com
						</p>

						<input
							className="rounded-md border-2 border-black bg-white p-2"
							type="text"
							placeholder="Name"
							name="name"
						/>
						<input
							className="my-4 rounded-md border-2 border-black bg-white p-2"
							type="email"
							placeholder="Email"
							name="email"
						/>
						<textarea
							className="rounded-md border-2 border-black bg-white p-2"
							name="message"
							rows="4"
							placeholder="Message"
						></textarea>
						<button className="mx-auto mt-4 rounded-sm bg-white py-2 px-6 text-center  font-semibold text-black shadow-md shadow-neutral-600 ring-2 ring-black transition-all duration-500 hover:-translate-y-1 hover:bg-teal-800 hover:text-white hover:shadow-lg hover:shadow-neutral-600 hover:ring-teal-800">
							<h2>Send</h2>
						</button>
					</form>
				</div>
			</div>
		</>
	);
};

export default Contact;
