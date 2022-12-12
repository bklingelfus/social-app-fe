const Home = (props) => {
    return (
        <div id="home">
            <h1>Home Feed</h1>
            {props.posts.map((post) => {
                return(
                    <div className="post">
                        <img src={post.image} alt="cool pic"/>
                        <div className="post-info">
                            <h3>Posted By: {post.owner}</h3>
                            <h3>Liked By: {post.likes}</h3>
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
                            <h4>Categories:</h4>
                            {post.category.map((cat) => {
                                return (
                                    <>
                                        <h5>{cat}</h5>
                                    </>
                                )
                            })}
                        </div>
                    </div>
                )
                
            })}
        </div>
    )
}

export default Home