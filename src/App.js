// App.js
import React from 'react';
import Header from './components/Header';
import UserProfile from './components/UserProfile';
import MainContent from './components/MainContent';
import Footer from './components/Footer';

function App() {
  return (
    <div>
      <Header />
      <MainContent />
      <UserProfile name="Liya Yohannes" age={25} bio="I love exploring new cities and cultures!" />
      <Footer />
    </div>
  );
}

export default App;
