import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHouse, faPlus, faUser, faGear } from '@fortawesome/free-solid-svg-icons'

const Nav = () => {
    return(
        <>
            <nav id="navbar">
                <ul>
                    <FontAwesomeIcon icon={faHouse} size="2x"/>
                    <li>Info</li>
                    <FontAwesomeIcon icon={faPlus} size="2x"/>
                    <FontAwesomeIcon icon={faUser} size="2x"/>
                    <FontAwesomeIcon icon={faGear} size="2x"/>
                </ul>
            </nav>
        </>
    )
}

export default Nav