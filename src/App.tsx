import About from "./components/About";
import ActionBanner from "./components/ActionBanner";
import Articles from "./components/Articles";
import Banner from "./components/Banner";
import Features from "./components/Features";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Projects from "./components/Projects";
import Results from "./components/Results";

const App = () => {
	return (
		<div className="w-full flex flex-col">
			<Header />
			<Features />
			<About />
			<Projects />
			<Banner />
			<Articles />
			<Results />
			<ActionBanner />
			<Footer />
		</div>
	);
};

export default App;
