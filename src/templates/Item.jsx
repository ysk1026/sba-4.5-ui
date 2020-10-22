import React from 'react';
// import { ItemMenu, ItemRead, ItemRegister, ItemUpdate, ItemRemove } from '../components/item'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import { NavLink } from 'react-router-dom'
import { Nav } from '../components'
import './table.style.css'

const Item = () => <>
    {/* <div>
        <ul>
            <li>
                <NavLink to ={"/"}> Home </NavLink>
            </li>
            <li>
                <NavLink to ={"/user"}> User </NavLink>
            </li>
            <li>
                <NavLink to ={"/board"}> Board </NavLink>
            </li>
        </ul>
    </div> */}
    <h1>Item</h1>
    {/* <Router>
        <ItemMenu/>
        <Switch>
            <Route path ="/itemregister" component={ItemRegister}></Route>
            <Route path ="/itemread" component={ItemRead}></Route>
            <Route path ="/itemupdate" component={ItemUpdate}></Route>
            <Route path ="/itemremove" component={ItemRemove}></Route>
        </Switch>
    </Router> */}
    {/* <Nav/> */}
</>

export default Item