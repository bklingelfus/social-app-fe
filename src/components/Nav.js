import { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHouse, faPlus, faUser, faGear, faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons'

const Nav = (props) => {

    const showPage = (num) => {
        props.setPage(num)
    }

    return(
        <>
            <nav id="navbar">
                <ul>
                    <button className={(props.page===0)?'active':null} onClick={() => { showPage(0)}}><FontAwesomeIcon icon={faHouse} size="2x"/></button>
                    <button className={(props.page===1)?'active':null} onClick={() => { showPage(1)}}><FontAwesomeIcon icon={faMagnifyingGlass} size="2x"/></button>
                    <button className={(props.page===2)?'active':null} onClick={() => { showPage(2)}}><FontAwesomeIcon icon={faPlus} size="2x"/></button>
                    <button className={(props.page===3)?'active':null} onClick={() => { showPage(3)}}><FontAwesomeIcon icon={faUser} size="2x"/></button>
                    <button className={(props.page===4)?'active':null} onClick={() => { showPage(4)}}><FontAwesomeIcon icon={faGear} size="2x"/></button>
                </ul>
            </nav>
        </>
    )
}

export default Nav