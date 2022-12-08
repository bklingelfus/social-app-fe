import Login from './Login.js'

const AddPost = (props) => {
    return (
        <>
        {(props.currentUser.username==='')?
        <Login currentUser={props.currentUser} setCurrentUser={props.setCurrentUser} users={props.users} userCreate={props.userCreate}/>
        :
        <div id="add-post">
            <h1>Add Post</h1>
        </div>
        }
        </>
    )
}

export default AddPost