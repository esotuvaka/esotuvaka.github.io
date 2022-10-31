import Navbar from './components/Navbar';
import Home from './components/Home';
import About from './components/About';
import Projects from './components/Projects';
import Contact from './components/Contact';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
gsap.registerPlugin(ScrollTrigger);

function App() {
	return (
		<>
			<div className="box-border overflow-x-hidden text-2xl">
				<h1>
					<Navbar />
					<Home />
					<About />
					<Projects />

					<Contact />
				</h1>
			</div>
		</>
	);
}

export default App;
