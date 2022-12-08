import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMessage, faHeart, faCompass } from '@fortawesome/free-solid-svg-icons'

const Topbar = () => {
    return (
        <>
            <nav id="topbar">
                <ul>
                    <p>BA social App</p>
                    <div>
                        <button><FontAwesomeIcon icon={faMessage} size="2x"/></button>
                        <button><FontAwesomeIcon icon={faHeart} size="2x"/></button>
                        <button><FontAwesomeIcon icon={faCompass} size="2x"/></button>
                    </div>
                </ul>
            </nav>
        </>
    )
}

export default Topbar