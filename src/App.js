import React from "react"
import Nav from "./components/Nav"
import Landing from "./views/Landing"
import PostsSection from "./views/PostsSection"
import Footer from "./components/Footer"
import './App.css'

function App() {
	return (
		<div className="App">
			<Nav />
			<Landing />
			<PostsSection />
			{/* <Footer /> */}
		</div>
	);
}

export default App;
