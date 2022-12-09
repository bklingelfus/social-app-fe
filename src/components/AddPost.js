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
        setPost({...post, [event.target.name]: event.target.value})
    }

    const createSubmit = (event) => {
        event.preventDefault()
        props.postCreate(post)
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
            <img src={post.image}/>
        </div>
        }
        </>
    )
}
export default AddPost
