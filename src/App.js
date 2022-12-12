import { useState, useEffect } from 'react'
import axios from 'axios';
import './App.css';
import './Profile.css';
import './Home.css'
import './AddPost.css'
import Nav from './components/Nav.js'
import Topbar from './components/Topbar';
import Home from './components/Home';
import Search from './components/Search';
import AddPost from './components/AddPost';
import Profile from './components/Profile';
import Settings from './components/Settings';

const App = () => {

  // Variables
  // const baseURL = 'https://social-media-app-back-end-ba.herokuapp.com/'
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
        // setPosts(...posts, response.data);
        let newPosts = posts;
        newPosts.push(response.data)
        setPosts(newPosts)
        console.log(response.data)
        console.log(posts)
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
      axios.post(baseURL + 'users', data)
      .then((response) => {
        let newUsers = [...users, response.data]
        setUsers(newUsers)
        if (response.data !== "") {
          setCurrentUser(response.data)
        }
      })
    };
    const userDelete =(deletedUser)=>{
      axios.delete(baseURL + 'users/' + deletedUser._id)
      .then((response) => {
        const newUsers = users.filter(user => {
          return user._id !== deletedUser._id
        })
        setUsers(newUsers)
      })
    };

    const userEdit =(updatedUser)=>{
      axios.put(baseURL + 'users/' + updatedUser._id, updatedUser)
      .then((response) => {
        // find editeduser index position in user state
        const index = users.findIndex(user => {
          return user._id === updatedUser._id
        })
        // assign current user state to new variable
        let newUsers = [...users]
        // replace previous user with newer version
        newUsers.splice(index, 1, updatedUser)
        // assign new variable to state
        setUsers(newUsers)
      })
    }
    // delete All users post
    const userPostsDelete =(user)=>{
      axios.delete(baseURL + 'allposts/' + user.username)
      .then((response) => {
        // response equals deleted posts from user
        // we want to remove these deleted posts from specific user's posts state
        
        // we have to go thru each item in post state and return the posts that don't match owner w/ user's username (which we have) - assign that to new var
        const postsToKeep = posts.filter(post => {
          return post.owner !== user.username
        })
        // assign posts that are from active users below
        setPosts(postsToKeep)
      })
    };
    // delete All users post
    const userCommentsDelete =(user)=>{
      axios.put(baseURL + 'allcomments/' + user.username)
      .then((response) => {
        // filter for all the other posts
        // filter posts for posts with user comments
        // loop in that filter
          // remove user comments
        // setState (filterOfOtherPosts + filterOfChangedPosts)
        // OR
        // do a getPosts()
      })
    };
    // delete All users post
    const userFollowingDelete =(user)=>{
      axios.put(baseURL + 'followers/' + user.username)
      .then((response) => {
      })
      axios.put(baseURL + 'following/' + user.username)
      .then((response) => {
      })
    };
    const removeUser =(user)=>{
      // Removing user "presence"
      userDelete(user);
      userPostsDelete(user);
      userCommentsDelete(user);
      userFollowingDelete(user);
      // Reset states
      getPosts();
      getUsers();
      setPage(0);
      setCurrentUser({
        username: '',
        password: '',
        profileImg: "https://freesvg.org/img/abstract-user-flat-4.png",
        email: '',
        followers: [],
        following: []
      });
    }

  // RENDER
  return (
    <>
      <header>
        <Topbar/>
      </header>
      <main>
        {page === 0 ? <Home posts={posts}/> : <></>}
        {page === 1 ? <Search users={users} posts={posts}/> : <></>}
        {page === 2 ? <AddPost setPage={setPage} currentUser={currentUser} setCurrentUser={setCurrentUser} users={users} userCreate={userCreate} postCreate={postCreate}/> : <></>}
        {page === 3 ? <Profile currentUser={currentUser} setCurrentUser={setCurrentUser} users={users} userCreate={userCreate} posts={posts}/> : <></>}
        {page === 4 ? <Settings removeUser={removeUser} setPage={setPage} currentUser={currentUser} setCurrentUser={setCurrentUser} users={users} userCreate={userCreate} userEdit={userEdit}/> : <></>}
      </main>
      <footer>
        <Nav setPage={setPage}/>
      </footer>
      
    </>
  );
}

export default App;
