import Login from './Login.js'

const Settings = (props) => {
    return (
        <>
        {(props.currentUser.username==='')?
        <Login currentUser={props.currentUser} setCurrentUser={props.setCurrentUser} users={props.users} userCreate={props.userCreate}/>
        :<>
            <div id="settings">
                <h1>Settings</h1>
            </div>
        </>
        }
        </>
    )
}

export default Settings