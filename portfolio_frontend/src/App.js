import React from 'react';
import './App.css';
import Header from './components/Header';
import About from './components/About';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Resume from './components/Resume';
import Contact from './components/Contact';
import Footer from './components/Footer';

// PUBLIC_INTERFACE
function App() {
  /** Main single-page portfolio renderer with fixed header and section-based layout. */
  return (
    <>
      <Header />
      <main id="main" role="main">
        <section id="home" aria-label="Hero" className="hero">
          <div className="container hero-inner">
            <div>
              <h1>Hello, I'm Your Name</h1>
              <p className="subtitle">Frontend Engineer • Building accessible, performant web apps.</p>
              <div className="hero-cta">
                <a className="btn" href="#projects">View Projects</a>
                <a className="btn secondary" href="#contact">Contact Me</a>
              </div>
            </div>
          </div>
        </section>

        <section id="about" className="section" aria-labelledby="about-title">
          <div className="container">
            <h2 id="about-title" className="section-title">About</h2>
            <p className="section-subtitle">A quick introduction about me</p>
            <About />
          </div>
        </section>

        <section id="projects" className="section" aria-labelledby="projects-title">
          <div className="container">
            <h2 id="projects-title" className="section-title">Projects</h2>
            <p className="section-subtitle">Highlights from my recent work</p>
            <Projects />
          </div>
        </section>

        <section id="skills" className="section" aria-labelledby="skills-title">
          <div className="container">
            <h2 id="skills-title" className="section-title">Skills</h2>
            <p className="section-subtitle">Technologies I use regularly</p>
            <Skills />
          </div>
        </section>

        <section id="resume" className="section resume" aria-labelledby="resume-title">
          <div className="container">
            <h2 id="resume-title" className="section-title">Resume</h2>
            <p className="section-subtitle">Download or preview my resume</p>
            <Resume />
          </div>
        </section>

        <section id="contact" className="section" aria-labelledby="contact-title">
          <div className="container">
            <h2 id="contact-title" className="section-title">Contact</h2>
            <p className="section-subtitle">Get in touch</p>
            <Contact />
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}

export default App;
