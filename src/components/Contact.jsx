import React from 'react';

const Contact = () => {
	return (
		<div
			name="contact"
			className="w-full h-screen bg-[#0a192f] flex justify-center items-center p-4"
		>
			<form action="" className="flex flex-col max-w-[600px] w-full">
				<div className="pb-8">
					<p className="text-4xl font-bold inline border-b-4 border-red-500 text-gray-300">
						Contact
					</p>
					<p className="text-gray-300 py-4">
						Submit the form below or send an email - eric.otuvaka@gmail.com
					</p>
				</div>
				<input
					className="bg-gray-50 rounded-lg p-2"
					type="text"
					placeholder="Name"
					name="name"
				/>
				<input
					className="my-4 p-2 bg-gray-50 rounded-lg"
					type="email"
					placeholder="Email"
					name="email"
				/>
				<textarea
					className="bg-gray-50 p-2 rounded-lg"
					name="message"
					rows="10"
					placeholder="Message"
				></textarea>
				<button className="text-white border-2 hover:bg-red-500 hover:border-red-500 px-4 py-3 my-8 mx-auto flex items-center">
					Let's talk
				</button>
			</form>
		</div>
	);
};

export default Contact;
