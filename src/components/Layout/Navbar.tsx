import React from 'react'
import {NavLink } from 'react-router-dom'

function Navbar() {
    return (
        <div><nav>
            <ul>
                <li>
                    <NavLink to="/">Home</NavLink>
                </li>
                <li>
                    <NavLink to="/create">Form Create jonal</NavLink>
                </li>
                <li>
                    <NavLink to="/listjonal">List item jonal</NavLink>
                </li>
            </ul>
        </nav>
            <hr /></div>
    )
}

export default Navbar