import {useState} from 'react'
import Login from './Login.js'
import EditPost from './EditPost.js'

const Profile = (props) => {
    const [page, setPage] = useState(0)
    const [userPost, setUserPosts] = useState([])

    // const currentUserPosts = () => {
    //     let newPosts = props.posts.filter((post) => {
    //         return post.owner === props.currentUser.username
    //     })
    //     console.log(newPosts)
    //     setUserPosts(newPosts)
    //     // console.log(...userPost, newPosts)
    // }
    
    const postLikes = (post) => {
        let x = post.likes.length
        return (x > 0) ? x : 0
    }

    const showEdit = (id) => {
        setPage(id)
    }

    const deletePost = (post) => {
        props.postDelete(post)
    }

    // overarching map function that loops through each post

        // inside: conditionally render profile or edit
        // pass each post data to profile and edit 

    // place profile return code in function
    // place edit post component in function maybe??

    // props contains currentUser data, posts data
    
    const showProfile = () => {
        // currentUserPosts()
        return (
            <>
            {(props.currentUser.username==='')?
            <Login currentUser={props.currentUser} setCurrentUser={props.setCurrentUser} users={props.users} userCreate={props.userCreate}/>
            :
            <div id="profile">
                <h1>{props.currentUser.username}'s Profile</h1>
                <div className="profile-info">
                    <img src={props.currentUser.profileImg} alt="account profile"/>
                    <p>Followers: {props.currentUser.followers.length}</p>
                    <p>Following: {props.currentUser.following.length}</p>
                </div>
                <div className="profile-posts-container">
                    {props.posts.map((post) => {
                        
                        return (
                            <div key={post._id}>
                                {(post.owner === props.currentUser.username) ?
                                <div className="profile-post">
                                    <img src={post.image} alt="each post"/>
                                    <h3>Likes: {postLikes(post)}</h3>
                                    <h3>Caption: {post.body}</h3>
                                    <h4>Comments:</h4>
                                    {post.comments.map((comment) => {
                                        return(
                                            <div key={comment._id}>
                                                <h5>{comment.user}</h5>
                                                <p>{comment.text}</p>
                                            </div>
                                        )
                                    })}
                                    <button onClick={() => showEdit(post._id)}>Edit Post</button>
                                    <button onClick={() => deletePost(post)}>Delete Post</button>
                                </div>
                                :
                                <></>
                                }
                            </div>
                        )
                    })}
                </div>
            </div>
            }
        </>
        )
    }
    return (
        <>
            {page === 0? showProfile() : <></>}
            {
                userPost.map((post) => {
                    return (
                        <div key={post._id}>
                            {(page === post._id) ? <EditPost post={post} setPage={setPage} postEdit={props.postEdit}/>: <></>}
                        </div>
                    )
                })
            }
        </>
    )
}

export default Profile