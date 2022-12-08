import {useState} from 'react';

const Login =(props)=>{
    // States
    const [newUser, setNewUser] = useState(0);
    const [error, setError] = useState(0);
    const [user, setUser] = useState({
            username: '',
            password: '',
            profileImg: "https://freesvg.org/img/abstract-user-flat-4.pn",
            email: '',
            followers: [],
            following: []
        })
    //Functions
    const changeDisplay =(num)=>{
        setNewUser(num)
        setError(0)
    }
    const handleChange =(event)=>{
        setUser({...user, [event.target.name]:event.target.value});
    }
    const loginSubmit =(event)=>{
        event.preventDefault();
        // get which user is trying to log in        
        let index = props.users.findIndex( client=> {
            return client.username === user.username
        });
        // Evaluate Login
        if (index >=0){
            if (user.password===props.users[index].password){
                props.setCurrentUser(props.users[index])
            } else {
                setError(1)
            }
        } else {
            setError(1)
        }
    }
    const createSubmit =(event)=>{
        event.preventDefault();
        // Check if username doesn't exist       
        let index = props.users.findIndex( client=> {
            return client.username === user.username
        });
        // Evaluate new user
        if (index < 0){
            props.userCreate(user)
            setError(1)
        } else {
            setError(1)
        }
    }
    // HTML variables
    const errorLogin =()=>{
        if (error === 0) {
            return <></>
        } else {
            return <h1>Username and Password did not match. Check again if you spelled both correctly!</h1>
        }
    }
    const errorCreate =()=>{
        if (error === 0) {
            return <></>
        } else {
            return <h1>Invalid Credentials</h1>
        }
    }
    const login =()=>{
        return (
            <>   
            {errorLogin()}     
            <form onSubmit={loginSubmit}>
                <label htmlFor="name">Username:</label>
                <input type='text' name="username" onChange={handleChange}/>
                <br/>
                <br/>
                <label htmlFor="name">Password:</label>
                <input type='text' name="password" onChange={handleChange}/>
                <br/>
                <br/>
                <input className='form-button' type='submit'/>
            </form>
            <button onClick={()=>{changeDisplay(1)}}>Create an Account!</button>
            </>
        )
        // Login Page
    }
    const createUser =()=>{
        return (            
        <>
        {errorCreate()}  
        <form onSubmit={createSubmit}>
            <label htmlFor="name">Username:</label>
            <input type='text' name="username" onChange={handleChange}/>
            <br/>
            <br/>
            <label htmlFor="name">Password:</label>
            <input type='text' name="password" onChange={handleChange}/>
            <br/>
            <br/>
            <label htmlFor="name">Email:</label>
            <input type='text' name="email" onChange={handleChange}/>
            <br/>
            <br/>
            <label htmlFor="name">Profile Image:</label>
            <input type='text' name="profileImg" onChange={handleChange}/>
            <br/>
            <br/>
            <input className='form-button' type='submit'/>
        </form>
        <button onClick={()=>{changeDisplay(0)}}>Already has an Account?</button>
        </>
        )
    }
    // Render
    return (
    <>        
        {(newUser===0)?
        login()
        :createUser()
        }
    </>
    )
}

export default Login