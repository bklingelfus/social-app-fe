import {useState} from 'react'
import Login from './Login.js'
import EditPost from './EditPost.js'

const Profile = (props) => {
    const [page, setPage] = useState(0)
    
    const postLikes = (post) => {
        let x = post.likes.length
        return (x > 0) ? x : 0
    }

    const showEditPost = () => {
      setPage(1)
    }
    
    const showProfile = () => {
      return (
        <>
            {(props.currentUser.username==='')?
            <Login currentUser={props.currentUser} setCurrentUser={props.setCurrentUser} users={props.users} userCreate={props.userCreate}/>
            :
            <div id="profile">
                <h1>Each Profile</h1>
                <div className="profile-info">
                    <img src={props.currentUser.profileImg} alt="account profile"/>
                    <p>Followers: {props.currentUser.followers.length}</p>
                    <p>Following: {props.currentUser.following.length}</p>
                </div>
                <div className="profile-posts-container">
                    {props.posts.map((post) => {
                        return (
                            <div className="profile-post">
                                <img src={post.image} alt="each post"/>
                                <h3>Likes: {postLikes(post)}</h3>
                                <h3>Caption: {post.body}</h3>
                                <h4>Comments:</h4>
                                {post.comments.map((comment) => {
                                    return(
                                        <>
                                            <h5>{comment.user}</h5>
                                            <p>{comment.text}</p>
                                        </>
                                    )
                                })}
                                <button onClick={() => showEditPost()}>Edit Post</button>
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
            { page === 0 ? showProfile() : <></> }
            { page === 1 ? <EditPost post={props.post} setPage={setPage}/> : <></> }
        </>
    )
}

export default Profile