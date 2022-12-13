const Post =(props)=>{
    return (
        <div className='posts-container'>
            {props.posts.map((post) => {
                return(
                    <div className="post" key={post._id}>
                        <p className='username'><span className='header'>Posted By: </span>{post.owner}</p>
                        <img src={post.image} alt="cool pic"/>
                        <div className="post-info">
                            <p><span className='header'>Likes: </span> {post.likes}</p>
                            <p><span className='header'>Caption: </span>{post.body}</p>
                            <p><span className='header'>Categories:</span>
                            {post.category.map((cat) => {
                                return (
                                        <span className='category-list' key={cat}>{cat}</span>
                                )
                            })}
                            </p>
                            <details>
                                <summary>Comments:</summary>
                                {post.comments.map((comment) => {
                                    return(
                                        <div key={comment._id}>
                                            <h5>{comment.user}</h5>
                                            <p>{comment.text}</p>
                                        </div>
                                    )
                                })}
                            </details>
                            {/* <h4>Comments:</h4> */}
                        </div>
                    </div>
                )
                
            })}
        </div>
    )
}

export default Post