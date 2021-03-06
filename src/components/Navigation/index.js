import React from 'react'
import {Pane} from 'evergreen-ui'
import {NavLink} from 'react-router-dom'
import {store} from '../../redux'
import './navigation.css'

const Navigation = ({ location }) => {
    const pages = ['Feed']
    const navBar = {
    }

    const navFlex = {
        display: 'flex',
        flexDirection: 'column',
        alignItems:'flex-end',
        fontSize: '32px',
        margin: '0',
        marginTop: '10px',
        marginRight: '12px'
    }
    const navLink = {
        color: 'rgba(0,0,0,0.2)',
        lineHeight:'1.8em',
        outline: 'none',
        textDecoration: 'none',
        display: 'inline-block',

    }

    return (
        <Pane
            display='flex'
            flexDirection='column'
            height='100vh'
            width='30vw'
            minWidth='200px'
            boxShadow="inset -1px 0px 8px -1px rgba(0,0,0,0.2)"
            background="tint1"
            borderRight='muted'
        >
            <nav style={navBar}>
                <ul style={navFlex}>
                    {pages.map((tab) => (
                        <li style={navLink}  key={tab}>
                            <NavLink activeClassName="active" to={'../' + tab.toLowerCase()}>
                                {tab}
                            </NavLink>
                        </li>
                    ))}
                    <li style={navLink}  key='profile'>
                        <NavLink activeClassName='active' to={'../profile/' + store.getState().auth.login.result.username}>
                            Profile
                        </NavLink>
                    </li>
                </ul>
            </nav>
        </Pane>
    )
}

export default Navigation