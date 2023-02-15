import Navbar from './components/Navbar';
import Home from './components/Home';
import About from './components/About';
import Projects from './components/Projects';
import Contact from './components/Contact';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Experience from './components/Experience';
gsap.registerPlugin(ScrollTrigger);

function App() {
	return (
		<>
			<div className="box-border overflow-x-hidden bg-gradient-to-b from-neutral-700 to-black bg-fixed text-2xl">
				<h1>
					<Navbar />
					<Home />
					<About />
					<Experience />
					<Projects />
					<Contact />
				</h1>
			</div>
		</>
	);
}

export default App;
