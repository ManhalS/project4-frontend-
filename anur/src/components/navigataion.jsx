import React from 'react'
import {Link} from 'react-router-dom'
function Nav() {
    return (
        <nav>
        <Link to ="/">
        <h3 className="navhead">Anur</h3>
        </Link>
        <ul className= "nav-link">
            <Link to = '/About'>
            < li className="navl">About</li>
            </Link>
            <Link to = '/login'>
            <li className ='navl'>login</li>
            </Link>
        </ul>
   </nav>
    )
}

export default Nav
