import {useState} from 'react'

const EditPost = (props) => {
    const backToProfile = () => {
        props.setPage(0)
    }
    return (
        <>
            <div id="edit-post">
                <h1>Edit Post</h1>
                <button onClick={() => backToProfile()}>Submit/Back to Profile</button>
            </div>
        </>
    )
}
// button on Profile component for each post will show this component
// have to pass down current post information thru props
// edit the post and submit the update, Profile component should show again
export default EditPost