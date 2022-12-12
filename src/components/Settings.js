import { useState } from 'react'
import Login from './Login.js'

const Settings = (props) => {
    // STATES
    const [settingsOption, setSettingsOption] = useState(0)
    const [user, setUser] = useState(props.currentUser)

    // FUNCTIONS 
    const changeDisplay =(num)=>{
        setSettingsOption(num)
    }
    const handleChange =(event)=>{
        let newValue = event.target.value
        if (event.target.name === 'password') {
            if (newValue.length < 8) {
                newValue = props.currentUser.password
            }
        }
        setUser({...user, [event.target.name]:newValue});
    }
    const handleSubmit =(event)=>{
        event.preventDefault();
        props.userEdit(user);
        props.setCurrentUser(user)
        props.setPage(3)
    }
    const logOff =()=>{
        props.setCurrentUser({
            username: '',
            password: '',
            profileImg: "https://freesvg.org/img/abstract-user-flat-4.png",
            email: '',
            followers: [],
            following: []
        });
    }
    const handleDelete =()=>{
        logOff()
    }
    // HTML Variables
    const editUser =()=>{
        return (
            <>      
            <form onSubmit={handleSubmit}>
                <h3>{user.username}</h3>
                {/* <label htmlFor="name">Username:</label>
                <input type='text' name="username" onChange={handleChange}/>
                <br/>
                <br/> */}
                <label htmlFor="name">New Password:</label>
                <input type='password' name="password" onChange={handleChange}/>
                <p>Leave empty if you do not want to change it</p>
                <br/>
                <br/>
                <label htmlFor="name">Email:</label>
                <input type='text' name="email" onChange={handleChange} placeholder={user.email}/>
                <br/>
                <br/>
                <label htmlFor="name">Profile Image:</label>
                <input type='text' name="profileImg" onChange={handleChange} placeholder={user.profileImg}/>
                <br/>
                <br/>
                <input className='form-button' type='submit'/>
            </form>
            </>
        )
    }

    // RENDER
    return (
        <>
        {(props.currentUser.username==='')?
        <Login currentUser={props.currentUser} setCurrentUser={props.setCurrentUser} users={props.users} userCreate={props.userCreate}/>
        :<>
            <div id="settings">
                <h1>Settings</h1>
                <button onClick={()=>{changeDisplay(0)}}>Edit Profile</button>
                {(settingsOption === 0)?
                editUser()
                :<></>
                }
                <button onClick={()=>{changeDisplay(1)}}>General Settings</button>
                {(settingsOption === 1)?
                <>
                    <p>Some future settings will be here</p>
                </>
                :<></>
                }
                <button onClick={()=>{changeDisplay(2)}}>Delete Profile</button>
                {(settingsOption === 2)?
                <>
                    <p>Are you sure you want to <span>permanently</span> delete your account? That includes all your posts but not all of yours comments on other posts.</p>
                    <button onClick={()=>{props.removeUser(user)}}>Delete Anyway</button>
                </>
                :<></>
                }
                <button onClick={logOff}>Log Off</button>
            </div>
        </>
        }
        </>
    )
}

export default Settings