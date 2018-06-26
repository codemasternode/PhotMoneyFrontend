import React from 'react'
import Nav from './Nav'

const NavWrapper = (Nav) => {
    return class extends React.Component {
        render() {
            return (
                localStorage.getItem('user') ?
                    ""
                    :
                    <Nav />
            )
        }
    }
}

export default NavWrapper(Nav)
