import React from 'react';

const Contact = () => {
	return (
		<div
			name="contact"
			className="w-full h-screen bg-neutral-100 flex justify-center items-center p-4"
		>
			<form
				method="POST"
				action="https://getform.io/f/59170bd6-bf32-4da3-a9c7-13ce88bc64a7"
				className="flex flex-col max-w-[600px] w-full"
			>
				<div className="pb-8">
					<p className="text-4xl font-bold inline border-b-4 border-teal-900 text-teal-800">
						Contact
					</p>
					<p className="text-ash py-4">
						Submit the form below or send an email - eric.otuvaka@gmail.com
					</p>
				</div>
				<input
					className="bg-neutral-300 rounded-lg p-2"
					type="text"
					placeholder="Name"
					name="name"
				/>
				<input
					className="my-4 p-2 bg-neutral-300 rounded-lg"
					type="email"
					placeholder="Email"
					name="email"
				/>
				<textarea
					className="bg-neutral-300 p-2 rounded-lg"
					name="message"
					rows="10"
					placeholder="Message"
				></textarea>
				<button className="text-ash border-2 rounded-sm duration-500 hover:-translate-y-1 hover:shadow-2xl border-ash hover:bg-teal-900 hover:text-white hover:border-teal-900 px-4 py-3 my-8 mx-auto flex items-center">
					Send
				</button>
			</form>
		</div>
	);
};

export default Contact;
