import Login from './Login.js'

const Profile = (props) => {
    const postLikes = () => {
        let x = props.post.likes.length
        return (x > 0) ? x : "0"
    }
    

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
                            {/* <h3>Likes: {postLikes()}</h3> */}
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
                        </div>
                    )
                })}
            </div>
        </div>
        }
        </>
    )
}

export default Profile