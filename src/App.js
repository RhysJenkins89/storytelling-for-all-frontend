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

// *** To do *** 
// Mobile menu text fade-in 
// Darken main image/opacity?
// Add text onto the main image
// Build the books page -- link to seller