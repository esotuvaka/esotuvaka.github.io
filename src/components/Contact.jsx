import React from 'react';
import bg4 from '../assets/stacked-waves-haikei-4.svg';

const Contact = () => {
	return (
		<>
			<div
				className="w-full h-screen absolute bg-cover bg-no-repeat -z-10"
				style={{ backgroundImage: `url(${bg4})` }}
			></div>
			<div
				id="contact"
				name="contact"
				className="contact spacer w-full h-screen flex justify-center items-center p-4  "
			>
				<form
					method="POST"
					action="https://getform.io/f/59170bd6-bf32-4da3-a9c7-13ce88bc64a7"
					className="flex flex-col max-w-[600px] w-full mt-12"
				>
					<div className="pb-8">
						<p className="text-4xl font-bold inline border-b-4 border-teal-900 text-teal-800">
							Contact
						</p>
						<p className="text-black py-4">
							Submit the form below or send an email - eric.otuvaka@gmail.com
						</p>
					</div>
					<input
						className="bg-white border-black border rounded-lg p-2"
						type="text"
						placeholder="Name"
						name="name"
					/>
					<input
						className="my-4 p-2 bg-white border-black border rounded-lg"
						type="email"
						placeholder="Email"
						name="email"
					/>
					<textarea
						className="bg-white border-black border p-2 rounded-lg"
						name="message"
						rows="4"
						placeholder="Message"
					></textarea>
					<button className="text-black border-2 rounded-sm duration-500 hover:-translate-y-1 hover:shadow-2xl border-black hover:bg-teal-900 hover:text-white hover:border-teal-900 px-4 py-3 my-8 mx-auto flex items-center">
						Send
					</button>
				</form>
			</div>
		</>
	);
};

export default Contact;
