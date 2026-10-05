import React, { useState } from 'react';
import ScrollBackground from './components/ScrollBackground';
import ReactiveBackground from './components/ReactiveBackground';
import ScrollProgressBar from './components/ScrollProgressBar';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Missions from './components/Missions';
import Training from './components/Training';
import Contact from './components/Contact';
import WebAim from './components/WebAim';
import TerminalFooter from './components/TerminalFooter';
import SmoothCursorFollower from './components/SmoothCursorFollower';
import EasterEggToast from './components/EasterEggToast';
import { useScrollReveal } from './hooks/useScrollReveal';
import { useScrollFontColor } from './hooks/useScrollFontColor';

function App() {
  const [easterEggActive, setEasterEggActive] = useState(false);
  useScrollReveal();
  useScrollFontColor();

  const handleEasterEgg = () => {
    setEasterEggActive(true);
  };

  return (
    <>
      <ScrollBackground />
      <ReactiveBackground />
      <ScrollProgressBar />
      <Navbar onEasterEgg={handleEasterEgg} />
      <SmoothCursorFollower />
      {easterEggActive && (
        <EasterEggToast onClose={() => setEasterEggActive(false)} />
      )}
      <main>
        <Hero />
        <Missions />
        <Training />
        <Contact />
        <WebAim />
        <TerminalFooter onEasterEgg={handleEasterEgg} />
      </main>
    </>
  );
}

export default App;
