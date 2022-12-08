import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHouse, faPlus, faUser, faGear, faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons'

const Nav = () => {
    return(
        <>
            <nav id="navbar">
                <ul>
                    <button><FontAwesomeIcon icon={faHouse} size="2x"/></button>
                    <button><FontAwesomeIcon icon={faMagnifyingGlass} size="2x"/></button>
                    <button><FontAwesomeIcon icon={faPlus} size="2x"/></button>
                    <button><FontAwesomeIcon icon={faUser} size="2x"/></button>
                    <button><FontAwesomeIcon icon={faGear} size="2x"/></button>
                </ul>
            </nav>
        </>
    )
}

export default Nav