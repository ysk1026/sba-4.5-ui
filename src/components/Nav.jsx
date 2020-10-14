import React from 'react'
import { Link } from 'react-router-dom'
// 어떤걸 import 할 지 모를 때 import {} 로 일단 두자
const Nav = () => <>
    <nav>
        <ol>
            <li>
                <Link to="/">Home</Link>
            </li>
            <li>
                <Link to="/user">User</Link>
            </li>
            <li>
                <Link to="/item">Item</Link>
            </li>
            <li>
                <Link to="/board">Board</Link>
            </li>
        </ol>
    </nav>
</>

export default Nav