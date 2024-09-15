import React from 'react';
import Header from './Header';
import Hero from './Hero';
import Projects from './Projects';
import Skills from './Skills';
import Contact from './Contacts';
import Experience from './Experience';

function App() {
  return (
    <div className="App">
      <Header />
      <Hero />
      <Experience/>
      <Projects />
      <Skills />
      <Contact />
    </div>
  );
}

export default App;
