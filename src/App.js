import Navbar from './components/Navbar';
import Home from './components/Home';
import About from './components/About';
import Projects from './components/Projects';
import Contact from './components/Contact';

function App() {
	return (
		<div className="text-2xl">
			<h1>
				<Navbar />
				<Home />
				<Projects />
				<About />
				<Contact />
			</h1>
		</div>
	);
}

export default App;
