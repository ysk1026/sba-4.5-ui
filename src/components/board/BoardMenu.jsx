import React from 'react'
import { Link } from 'react-router-dom'

const BoardMenu = () => <>
    <nav>
        <ol>
            <li>
                <Link to="boardregister">BoardRegister</Link>
            </li>
            <li>
                <Link to="boardread">BoardRead</Link>
            </li>
            <li>
                <Link to="boardupdate">BoardUpdate</Link>
            </li>
            <li>
                <Link to="boardremove">BoardRemove</Link>
            </li>
        </ol>
    </nav>
</>

export default BoardMenu