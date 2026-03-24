import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Contact from './components/Contact';
import './App.css';

function App() {
  return (
    <div className="App">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Contact />
      </main>
      <footer className="py-8 text-center border-t border-[var(--glass-border)]">
        <div className="container">
          <p className="text-secondary text-sm">
            © {new Date().getFullYear()} Mohamed Ait‑Oufquir. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
}

export default App;
