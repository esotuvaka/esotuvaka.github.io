import React from 'react';

const Contact = () => {
	return (
		<>
			<div
				className="mx-auto flex h-screen w-full max-w-[1200px] flex-col items-center justify-center p-4"
				name="contact"
			>
				<div className="grid w-full max-w-[1200px] grid-cols-2 gap-8 rounded-t-xl py-4">
					<div className="">
						<h1 className="inline-flex text-left text-5xl text-teal-800 sm:text-7xl">
							- Contact -
						</h1>
					</div>
					<div></div>
				</div>
				<div className="grid grid-cols-1">
					<form
						method="POST"
						action="https://getform.io/f/59170bd6-bf32-4da3-a9c7-13ce88bc64a7"
						className="flex w-full max-w-[600px] flex-col"
					>
						<div className="pb-8">
							<p className="py-4 text-3xl text-black">
								Submit the form below or send an email to:
								eric.otuvaka@gmail.com
							</p>
						</div>
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
