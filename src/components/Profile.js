import Login from './Login.js'

const Profile = (props) => {
    return (
        <>
        {(props.currentUser.username==='')?
        <Login currentUser={props.currentUser} setCurrentUser={props.setCurrentUser} users={props.users} userCreate={props.userCreate}/>
        :
        <div id="profile">
            <h1>Each Profile</h1>
            <div className="profile-info">
                <img src="https://freesvg.org/img/abstract-user-flat-4.png"/>
                <p>Followers: 10</p>
                <p>Following: 5</p>
            </div>
            <div className="profile-posts-container">
                <div className="profile-post">
                    <h3>each post</h3>
                    <img src="https://www.travelandleisure.com/thmb/SPUPzO88ZXq6P4Sm4mC5Xuinoik=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/eiffel-tower-paris-france-EIFFEL0217-6ccc3553e98946f18c893018d5b42bde.jpg"/>
                    <p>info: travelling around Paris</p>
                    <h4>likes:</h4>
                    <h4>comments:</h4>
                </div>
            </div>
        </div>
        }
        </>
    )
}

export default Profile