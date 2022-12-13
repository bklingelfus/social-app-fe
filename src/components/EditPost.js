import {useState} from 'react'

const EditPost = (props) => {
    const [post, setPost] = useState(props.post)

    const handleChange = (event) => {
        setPost({...post, [event.target.name]: event.target.value})
    }
    const updateSubmit = (event) => {
        event.preventDefault()
        props.postEdit(post)
        props.setPage(0)
    }
    return (
        <>
            <div id="add-post">
                <h1>Edit Post</h1>
                <form onSubmit={updateSubmit}>
                    <label htmlFor="image">Image:</label>
                    <input type='text' name="image" onChange={handleChange} placeholder={post.image}/>
                    <br/>
                    <br/>
                    <label htmlFor="caption">Caption:</label>
                    <input type='text' name="body" onChange={handleChange} placeholder={post.body}/>
                    <br/>
                    <br/>
                    <label htmlFor="category">Category:</label>
                    <input type='text' name="category" onChange={handleChange} placeholder={post.category}/>
                    <br/>
                    <br/>
                    <input className='form-button' type='submit' value="Update Post"/>
                </form>
                <img src={props.post.image} alt="new-post"/>
                <p>{props.post.body}</p>
            </div>
        </>
    )
}
export default EditPost