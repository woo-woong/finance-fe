import './App.css';
import { useState, useEffect } from 'react';
import Header from './components/Header';
import Card from './components/Card';

function App() {
  return (
    <div className="App">
      <main className="flex flex-col items-center">
        <Header />
        <Card />
      </main>
    </div>
  );
}

export default App;
