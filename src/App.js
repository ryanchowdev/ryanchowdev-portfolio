import Navbar from './Navbar.js';
import Hero from './Hero.js';
import About from './About.js';
import Projects from './Projects.js';
import Contact from './Contact.js';
import Footer from './Footer.js';
import './App.css';

function App() {
  return (
    <div className="App">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Projects />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;
