import { useState, useEffect } from 'react'
import './App.css';
import Nav from './components/Nav.js'
import Topbar from './components/Topbar';
import Home from './components/Home';
import Search from './components/Search';
import AddPost from './components/AddPost';
import Profile from './components/Profile';
import Settings from './components/Settings';

const App = () => {

  // Variables
  const baseURL = 'http://localhost:3000/'
  // States
  const [posts, setPosts] = useState([]);
  const [users, setUsers] = useState([]);
  const [currentUser, setCurrentUser] = useState({
    username: '',
    password: '',
    profileImg: "https://freesvg.org/img/abstract-user-flat-4.png",
    email: '',
    followers: [],
    following: []
  });

  const [page, setPage] = useState(0)

  // Get Data
  const getPosts = () =>{
    axios.get(baseURL + 'posts')
    .then((response)=>setPosts(response.data), (err) => console.log(err))
    .catch((error) => console.log(error));
  };
  const getUsers = () =>{
    axios.get(baseURL + 'users')
    .then((response)=>setUsers(response.data), (err) => console.log(err))
    .catch((error) => console.log(error));
  };

  useEffect(()=>{
    getUsers();
    getPosts();
  }
  ,[]);
  
  // CRUD Functions 
    // Post Collection
    const postCreate =(newPost)=>{
      axios.post( baseURL + 'posts', newPost)
      .then((response)=>{
        setPosts(...posts, response.data);
      })
    };
    const postDelete =(deletedPost)=>{
      axios.delete(baseURL + 'posts/' + deletedPost._id)
      .then((response)=>{
        const newPosts = posts.filter(post=>{
          return post._id !== deletedPost._id
        })
        setPosts(newPosts)
      })
    };

    const postEdit =(editedPost)=>{
      axios.put(baseURL + 'posts/' + editedPost._id, editedPost)
      .then((response)=>{
        // Find editedPost position in state posts
        let index = posts.findIndex( post=> {
          return post._id === editedPost._id
        });
        // Assign new variable to be used for state
        let newPosts = [...posts]
        // Replace previous post for newer version
        newPosts.splice(index, 1, editedPost);
        // Assign new varaible to state
        setPosts(newPosts);
      })
    }
    // User Collection
    const userCreate =(data)=>{
      // axios.post( baseURL+ 'animals', data)
      // .then((response)=>{
      //   getAnimals();
      // })
    };
    const userDelete =(event)=>{
      // axios.delete(baseURL+'animals/' + event.target.value)
      // .then((response)=>{getAnimals()})
    };

    const userEdit =(data)=>{
      // axios.put(baseURL+'animals/'+data._id, data)
      // .then((response)=>{
      //   getAnimals();
      // })
    }
    // delete All users post
    const userPostsDelete =(event)=>{
      // axios.delete(baseURL+'animals/' + event.target.value)
      // .then((response)=>{getAnimals()})
    };

  // RENDER
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
