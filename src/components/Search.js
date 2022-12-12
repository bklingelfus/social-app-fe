import { useState } from "react";

const Search = (props) => {
    // States
    const [display, setDisplay] = useState(0);
    const [search, setSearch]= useState({users:[], posts:[]});
    const [recommendation, setRecommendation] =useState({users:[], posts:[]});

    // Functions
    const handleSearch =(event)=>{
        // Change to see recommendations
        setDisplay(1)
        // Reset State for new search
        setRecommendation({users:[], posts:[]})
        // Variables to replace
        let newUsers = [];
        let newPosts = [];
        // Recommendations size
        let currentSize = recommendation.users.length+recommendation.posts.length
        console.log(currentSize)
        // Users check
        for (let i=0; i<props.users.length && currentSize<4; i++){
            if (props.users[i].username.toLowerCase().includes(event.target.value)===true){
                newUsers.push(props.users[i].username)
            }
        }
        // Posts Check
        for (let i=0; i<props.posts.length && currentSize<4; i++){
            for(let e=0; e<props.posts[i].category.length;e++){
                if(props.posts[i].category[e].includes(event.target.value)===true){
                    if (newPosts.indexOf(props.posts[i].category[e])<0){
                        newPosts.push(props.posts[i].category[e])
                    }
                }
            }
        }
        // Set State
        setRecommendation({users:newUsers, posts:newPosts})
        console.log(recommendation)
    };
    const runSearch =(event)=>{
        // Stop Form
        event.preventDefault();
        console.log(event.target.elements[0].value)
        // Change to see Search
        setDisplay(0)
        // Reset State for new search
        setSearch({users:[], posts:[]})
        // Variables to replace
        let newUsers = [];
        let newPosts = [];
        // Recommendations size
        let currentSize = search.users.length+search.posts.length
        // Users check
        for (let i=0; i<props.users.length && currentSize<10; i++){
            if (props.users[i].username.toLowerCase().includes(event.target.elements[0].value)===true){
                newUsers.push(props.users[i])
            }
        }
        // Posts Check
        for (let i=0; i<props.posts.length && currentSize<10; i++){
            for(let e=0; e<props.posts[i].category.length;e++){
                if(props.posts[i].category[e].includes(event.target.elements[0].value)===true){
                    if (newPosts.indexOf(props.posts[i])<0){
                        newPosts.push(props.posts[i])
                    }
                }
            }
        }
        // Set State
        setSearch({users:newUsers, posts:newPosts})
        console.log(search)
    };
    // Recommended Search
    const directSearch =(word)=>{
        console.log(word)
        // Change to see Search
        setDisplay(0)
        // Reset State for new search
        setSearch({users:[], posts:[]})
        // Variables to replace
        let newUsers = [];
        let newPosts = [];
        // Recommendations size
        let currentSize = search.users.length+search.posts.length
        // Users check
        for (let i=0; i<props.users.length && currentSize<10; i++){
            if (props.users[i].username.toLowerCase().includes(word)===true){
                newUsers.push(props.users[i])
            }
        }
        // Posts Check
        for (let i=0; i<props.posts.length && currentSize<10; i++){
            for(let e=0; e<props.posts[i].category.length;e++){
                if(props.posts[i].category[e].includes(word)===true){
                    if (newPosts.indexOf(props.posts[i])<0){
                        newPosts.push(props.posts[i])
                    }
                }
            }
        }
        // Set State
        setSearch({users:newUsers, posts:newPosts})
        console.log(search)
    };
    // HTML Functions
    const searchResult=()=>{
        return(
            <>
            <div>
                {search.users.map((item)=>{
                    return(
                        <div key={item._id}>
                            <img src={item.profileImg} alt="Profile Img"></img>
                            <div>
                                <h2>{item.username}</h2>
                                <div>
                                    <h4>Followers: <span>{item.followers.length}</span></h4>
                                    <h4>Following: <span>{item.following.length}</span></h4>
                                </div>
                            </div>
                        </div>
                    )
                })}
                {search.posts.map((item)=>{
                    return(
                        <div key={item._id}>
                            <h2>{item.owner}</h2>
                            <img src={item.image} alt='Post Img'></img>
                            <div>
                                <p>Caption: {item.body}</p>
                                <h4>Likes: <span>{item.likes.length}</span></h4>
                                <h4>Comments:</h4>
                                <div>
                                {item.comments.map((comment)=>{
                                    return (
                                        <div key={comment._id}>
                                            <h4>{comment.user}</h4>
                                            <p>{comment.text}</p>
                                        </div>
                                    )
                                })}
                                </div>
                            </div>
                        </div>
                    )
                })}
            </div>
            </>
        )
    };
    const searchRecommendation=()=>{
        return(
            <>
            <div>
                {recommendation.users.map((item)=>{
                    return(
                        <button onClick={()=>{directSearch(item)}} key={item}>{item}</button>
                    )
                })}
                {recommendation.posts.map((item)=>{
                    return(
                        <button onClick={()=>{directSearch(item)}} key={item}>{item}</button>
                    )
                })}
            </div>
            </>
        )
    };

    // RENDER
    return (
        <>
            <div>
                <form onSubmit={runSearch}>
                    <input type='text' onChange={handleSearch} placeholder="user, category, ..."></input>
                    <input type='submit' value='Search'></input>
                </form>
            </div>  
            {(display===0)?
            searchResult()
            :searchRecommendation()
            }
        </>    
    )
}

export default Search