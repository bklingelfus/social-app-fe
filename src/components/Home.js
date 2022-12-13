import Post from './Post.js'

const Home = (props) => {
    return (
        <Post posts={props.posts}/>
    )
}

export default Home