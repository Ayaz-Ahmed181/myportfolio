import React from 'react';
import Layout from './components/Layout';
import Hero from './components/Hero';

function App() {
  return (
    <Layout>
      <Hero />
      
      {/* Placeholders to verify smooth scrolling */}
      <section id="profile" style={{ minHeight: '100vh', padding: '2rem', borderTop: '1px solid rgba(255,255,255,0.1)' }}><h2>Profile</h2></section>
      <section id="missions" style={{ minHeight: '100vh', padding: '2rem', borderTop: '1px solid rgba(255,255,255,0.1)' }}><h2>Missions</h2></section>
      <section id="training" style={{ minHeight: '100vh', padding: '2rem', borderTop: '1px solid rgba(255,255,255,0.1)' }}><h2>Training</h2></section>
      <section id="loadout" style={{ minHeight: '100vh', padding: '2rem', borderTop: '1px solid rgba(255,255,255,0.1)' }}><h2>Loadout</h2></section>
      <section id="discoveries" style={{ minHeight: '100vh', padding: '2rem', borderTop: '1px solid rgba(255,255,255,0.1)' }}><h2>Discoveries</h2></section>
      <section id="arcade" style={{ minHeight: '100vh', padding: '2rem', borderTop: '1px solid rgba(255,255,255,0.1)' }}><h2>Arcade</h2></section>
      <section id="contact" style={{ minHeight: '100vh', padding: '2rem', borderTop: '1px solid rgba(255,255,255,0.1)' }}><h2>Contact</h2></section>
    </Layout>
  );
}

export default App;
