import React from 'react';
// import { NavLink } from 'react-router-dom'
// import { UserLogin, UserMenu, UserRegister, UserRemove, UserUpdate } from '../container/user'
import {UserMenu as Menu} from '../components'
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import './table.style.css'
const User = ({children}) => <>
    {/* <div>
        <ul>
            <li>
                <NavLink to ={"/"}> Home </NavLink>
            </li>
            <li>
                <NavLink to ={"/item"}> Item </NavLink>
            </li>
            <li>
                <NavLink to ={"/board"}> Board </NavLink>
            </li>
        </ul>
    </div> */}
    
    {/* <h1>User</h1> */}
    {/* <Nav/> */}
    <h1>User</h1>
    <Menu/>
    {children}
    {/* <Router>
        <UserMenu/>
        <Switch>
            <Route path='/userregister' component={UserRegister}></Route>
            <Route path='/userlogin' component={UserLogin}></Route>
            <Route path='/userremove' component={UserRemove}></Route>
            <Route path='/userupdate' component={UserUpdate}></Route>
        </Switch>
    </Router> */}
</>

export default User