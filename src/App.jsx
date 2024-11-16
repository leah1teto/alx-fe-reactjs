// src/App.jsx
import React from 'react';
import Counter from './components/Counter';
import Header from './components/Header';
import MainContent from './components/MainContent';
import Footer from './components/Footer';

function App() {
  return (
    <div>
      <Header />
      <MainContent />
      <Counter />
      <Footer />
    </div>
  );
}

export default App;
