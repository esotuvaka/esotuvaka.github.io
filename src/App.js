import Navbar from './components/Navbar';
import Home from './components/Home';
import About from './components/About';
import Skills from './components/Skills';
import Work from './components/Work';

function App() {
	return (
		<div className="text-2xl">
			<h1>
				<Navbar />
				<Home />
				<About />
				<Skills />
				<Work />
			</h1>
		</div>
	);
}

export default App;
