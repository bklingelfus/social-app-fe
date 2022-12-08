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
        setNewUser(0)
        setError(0)
    }
    const handleChange =(event)=>{
        setUser({...user, [event.target.name]:event.target.value});
    }
    const loginSubmit =(event)=>{
        event.preventDefault();
        if (user.password===password){

        } else {
            setError(1)
        }
    }
    const createSubmit =(event)=>{
        event.preventDefault();
        // props.handleCreate(animal);
    }
    return (
    <>
        {(error===0)?
        <></>
        :<h1>Username and Password did not match. Check again if you spelled both correctly!</h1>
        }
        {(newUser===0)?
        // Login Page
        <>        
        <form onSubmit={loginSubmit}>
            <label htmlFor="name">Username:</label>
            <input type='text' name="username" onChange={handleChange}/>
            <br/>
            <br/>
            <label htmlFor="name">Password:</label>
            <input type='text' name="password" onChange={handleChange}/>
            <br/>
            <br/>
            <input class='form-button' type='submit'/>
        </form>
        <button onClick={()=>{changeDisplay(1)}}>Create an Account!</button>
        </>
        :
        // Create User Page
        <>
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
            <input type='number' name="email" onChange={handleChange}/>
            <br/>
            <br/>
            <label htmlFor="name">Profile Image:</label>
            <input type='number' name="profileImg" onChange={handleChange}/>
            <br/>
            <br/>
            <input class='form-button' type='submit'/>
        </form>
        <button onClick={()=>{changeDisplay(0)}}>Already has an Account?</button>
        </>
        }
    </>
    )
}

export default Login