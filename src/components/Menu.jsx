import React from 'react'
import { Link } from 'react-router-dom'
// 어떤걸 import 할 지 모를 때 import {} 로 일단 두자
export const UserMenu = () => 
    (<nav>
        <ol>
            <li>
                <Link to="/signup-form">Signup form</Link>
            </li>
            <li>
                <Link to="/signin-form">Signin form</Link>
            </li>
            <li>
                <Link to="/mypage">My page</Link>
            </li>
            <li>
                <Link to="/modifying-user-info">Modifying User Info</Link>
            </li>
            <li>
          <Link to="/userlist">User List</Link>
        </li>
        </ol>
    </nav>)

const BoardMenu = () => 
    (<nav>
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
    </nav>)

const ItemMenu = () => 
    (<nav>
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
    </nav>)
