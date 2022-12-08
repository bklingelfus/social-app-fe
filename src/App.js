import { useState, useEffect } from 'react'
import './App.css';
import './Profile.css';
import Nav from './components/Nav.js'
import Topbar from './components/Topbar';
import Home from './components/Home';
import Search from './components/Search';
import AddPost from './components/AddPost';
import Profile from './components/Profile';
import Settings from './components/Settings';

const App = () => {
  const [page, setPage] = useState(0)

  return (
    <>
      <header>
        <Topbar/>
      </header>
      <main>
        {page === 0 ? <Home/> : <></>}
        {page === 1 ? <Search/> : <></>}
        {page === 2 ? <AddPost/> : <></>}
        {page === 3 ? <Profile/> : <></>}
        {page === 4 ? <Settings/> : <></>}
      </main>
      <footer>
        <Nav setPage={setPage}/>
      </footer>
      
    </>
  );
}

export default App;
