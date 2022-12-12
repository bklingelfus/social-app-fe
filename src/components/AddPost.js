import Login from './Login.js'
import { useState } from 'react'

const AddPost = (props) => {
    const [post, setPost] = useState({
        owner: props.currentUser.username,
        image: "",
        body: "",
        category: [""]
    })

    const handleChange = (event) => {
        let newValue = event.target.value;
        if(event.target.name==='category'){
            newValue = event.target.value.split(', ')
            console.log(newValue)
        }
        setPost({...post, [event.target.name]: newValue})
    }

    const createSubmit = (event) => {
        console.log(post)
        console.log(props.currentUser)
        let newPost ={
            owner: props.currentUser.username,
            image: post.image,
            body: post.body,
            category: post.category
        }
        console.log(newPost)
        event.preventDefault()
        props.postCreate(newPost)
        props.setPage(0)
    }

    return (
        <>
        {(props.currentUser.username==='')?
        <Login currentUser={props.currentUser} setCurrentUser={props.setCurrentUser} users={props.users} userCreate={props.userCreate}/>
        :
        <div id="add-post">
            <h1>Add Post</h1>
            <form onSubmit={createSubmit}>
                <label htmlFor="image">Image:</label>
                <input type='text' name="image" onChange={handleChange}/>
                <br/>
                <br/>
                <label htmlFor="caption">Caption:</label>
                <input type='text' name="body" onChange={handleChange}/>
                <br/>
                <br/>
                <label htmlFor="category">Category:</label>
                <input type='text' name="category" onChange={handleChange}/>
                <br/>
                <br/>
                <input className='form-button' type='submit' value="Create Post"/>
            </form>
            <img src={post.image} alt="new-post"/>
        </div>
        }
        </>
    )
}
export default AddPost
