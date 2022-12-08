import { useState } from 'react'
import './App.css';
import Nav from './components/Nav.js'
import Topbar from './components/Topbar';

const App = () => {
  return (
    <>
      <header>
        <Topbar/>
      </header>
      <main>
        <h1>Hello world</h1>
      </main>
      <footer>
        <Nav/>
      </footer>
      
    </>
  );
}

export default App;
