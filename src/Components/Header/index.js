import React from 'react'

import './styles.css'

const Header = ( props ) => {
    return (
        <header id="main-header">{props.titulo}</header>
    )
}

export default Header