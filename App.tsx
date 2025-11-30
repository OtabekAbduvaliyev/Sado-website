import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import ProblemSolution from './components/ProblemSolution';
import Features from './components/Features';
import Team from './components/Team';
import Roadmap from './components/Roadmap';
import TryDemo from './components/TryDemo';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-dark-900 text-slate-200 selection:bg-emerald-500/30 selection:text-emerald-200">
      <Navbar />
      <main>
        <Hero />
        <ProblemSolution />
        <Features />
        <Team />
        <Roadmap />
        <TryDemo />
      </main>
      <Footer />
    </div>
  );
}

export default App;